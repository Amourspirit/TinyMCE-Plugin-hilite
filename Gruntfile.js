const { CheckerPlugin } = require('awesome-typescript-loader');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const swag = require('@ephox/swag');

module.exports = function (grunt) {
  var packageData = grunt.file.readJSON('package.json');
  var BUILD_VERSION = packageData.version + '-' + (process.env.BUILD_NUMBER ? process.env.BUILD_NUMBER : '0');
  const libPluginPath = 'lib/main/ts/Plugin.js';
  const scratchPath = 'scratch/compiled';
  const scratchTmpPath = 'scratch/tmp';
  const pluginJsName = 'plugin.js';
  const pluginMinJsName = 'plugin.min.js';
  const scratchPluginPath = scratchPath + '/' + pluginJsName; // 'scratch/compiled/plugin.js';
  const scratchPluginMinPath = scratchPath + '/' + pluginMinJsName; //'scratch/compiled/plugin.min.js';
  const webButtonImage = 'https://i.postimg.cc/XJ6gPDj3/hilite-btn.png';
  const localButtonImage = '/img/hilite-btn.png';
  const zipName = 'hilite.zip';

  // const scratchPluginPath = 'scratch/compiled/plugin.js';
  // const scratchPluginMinPath = 'scratch/compiled/plugin.min.js';

  grunt.initConfig({
    pkg: packageData,

    clean: {
      dirs: ['js'],
      dist: ['dist'],
      scratch: ['scratch']
    },

    tslint: {
      options: {
        configuration: 'tslint.json'
      },
      plugin: ['src/**/*.ts']
    },

    shell: {
      command: 'tsc'
    },

    rollup: {
      options: {
        treeshake: true,
        name: 'plugin',
        format: 'iife',
        banner: '(function () {',
        footer: 'plugin();})();',
        onwarn: swag.onwarn,
        plugins: [
          swag.nodeResolve({
            basedir: __dirname,
            prefixes: {}
          }),
          swag.remapImports()
        ]
      },
      plugin: {
        files: [
          {
            src: libPluginPath,
            dest: scratchPluginPath
          }
        ]
      }
    },

    uglify: {
      plugin: {
        files: [
          {
            src: scratchPluginPath,
            dest: scratchPluginMinPath
          }
        ]
      },
      optons: {
        compress: {
          drop_console: true
        }
      }
    },

    concat: {
      license: {
        options: {
          process: function (src) {
            var buildSuffix = process.env.BUILD_NUMBER
              ? '-' + process.env.BUILD_NUMBER
              : '';
            return src.replace(
              /@BUILD_NUMBER@/g,
              packageData.version + buildSuffix
            );
          }
        },
        // scratchPluginMinPath is used twice on purpose, all outputs will be minified for premium plugins
        files: {
          'dist/plugin.js': [
            'src/text/license-header.js',
            scratchPluginMinPath
          ],
          'dist/plugin.min.js': [
            'src/text/license-header.js',
            scratchPluginMinPath
          ]
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            cwd: 'src/text',
            src: ['license.txt'],
            dest: 'dist',
            expand: true
          },
          { src: ['changelog.txt'], dest: 'dist', expand: true },
          {
            cwd: 'src/main/img',      // set working folder / root to copy
            src: ['hilite-btn.png'],  // file to copy
            dest: 'dist/img',      // destination folder
            expand: true              // required when using cwd
          }
        ]
      },
      zip: { // copy compiled javascript to js folder
        files: [
          {
            cwd: scratchTmpPath,
            src: [zipName],
            dest: 'dist',
            expand: true
          }
        ]
      }
    },

    replace: {
      web_plugin: {
        src: [scratchPath + '/' + pluginJsName],   // source files array (supports minimatch)
        dest: 'js/' + pluginJsName,  // destination directory or file
        replacements: [{
          from: '@@IMAGE',                   // string replacement
          to: webButtonImage
        }]
      },
      web_plugin_min: {
        src: [scratchPath + '/' + pluginMinJsName],   // source files array (supports minimatch)
        dest: 'js/' + pluginMinJsName,                // destination directory or file
        replacements: [{
          from: '@@IMAGE',                            // string replacement
          to: webButtonImage
        }]
      },
      local_plugin: {
        src: ['dist/' + pluginJsName],   // source files array (supports minimatch)
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: '@@IMAGE',               // string replacement
          to: localButtonImage
        }]
      },
      local_plugin_min: {
        src: ['dist/' + pluginMinJsName],   // source files array (supports minimatch)
        overwrite: true,                    // overwrite matched source files
        replacements: [{
          from: '@@IMAGE',                  // string replacement
          to: localButtonImage
        }]
      }
    },

    zip: {
      'using-cwd': {
        cwd: 'dist/',
    // Files will zip to 'hello.js' and 'world.js'
        src: ['dist/img/hilite-btn.png', 'dist/plugin.min.js', 'dist/changelog.txt','dist/version.txt', 'LICENSE.txt'],
        dest: scratchTmpPath + '/' + zipName
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('@ephox/swag');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('version', 'Creates a version file', function () {
    grunt.file.write('dist/version.txt', BUILD_VERSION);
  });

  grunt.registerTask('default', [
    'clean',
    // 'copy:ts',
    'tslint',
    'shell',
    'rollup',
    'uglify',
    'concat',
    'copy:main',
    // 'copy:js', 'copy',
    'replace',
    'version',
    'zip',
    'clean:dist',
    'copy:zip'
  ]);
};