(function () {
var plugin = (function () {
    'use strict';

    var setup = function (editor, url) {
      var mainFunction = function () {
        editor.windowManager.open({
          title: 'Hilight',
          body: [
            {
              margin: '1 1 1 1',
              minHeight: editor.getParam('hilite_dialog_height', Math.min(tinymce.DOM.getViewPort().h - 200, 500) - 282),
              minWidth: editor.getParam('hilite_dialog_width', 600),
              multiline: true,
              name: 'code_raw',
              padding: '1 1 1 1',
              style: 'direction: ltr; text-align: left',
              tooltip: 'Insert un-formated code here...',
              type: 'textbox',
              text: 'print hello world!'
            },
            {
              type: 'listbox',
              name: 'lexer',
              label: 'Language',
              values: [
                {
                  text: 'ABAP',
                  value: 'abap'
                },
                {
                  text: 'ActionScript',
                  value: 'as'
                },
                {
                  text: 'ActionScript 3',
                  value: 'as3'
                },
                {
                  text: 'Ada',
                  value: 'ada'
                },
                {
                  text: 'ANTLR',
                  value: 'antlr'
                },
                {
                  text: 'ANTLR With ActionScript Target',
                  value: 'antlr-as'
                },
                {
                  text: 'ANTLR With C# Target',
                  value: 'antlr-csharp'
                },
                {
                  text: 'ANTLR With CPP Target',
                  value: 'antlr-cpp'
                },
                {
                  text: 'ANTLR With Java Target',
                  value: 'antlr-java'
                },
                {
                  text: 'ANTLR With ObjectiveC Target',
                  value: 'antlr-objc'
                },
                {
                  text: 'ANTLR With Perl Target',
                  value: 'antlr-perl'
                },
                {
                  text: 'ANTLR With Python Target',
                  value: 'antlr-python'
                },
                {
                  text: 'ANTLR With Ruby Target',
                  value: 'antlr-ruby'
                },
                {
                  text: 'ApacheConf',
                  value: 'apacheconf'
                },
                {
                  text: 'AppleScript',
                  value: 'applescript'
                },
                {
                  text: 'AspectJ',
                  value: 'aspectj'
                },
                {
                  text: 'aspx-cs',
                  value: 'aspx-cs'
                },
                {
                  text: 'aspx-vb',
                  value: 'aspx-vb'
                },
                {
                  text: 'Asymptote',
                  value: 'asy'
                },
                {
                  text: 'autohotkey',
                  value: 'ahk'
                },
                {
                  text: 'AutoIt',
                  value: 'autoit'
                },
                {
                  text: 'Awk',
                  value: 'awk'
                },
                {
                  text: 'Base Makefile',
                  value: 'basemake'
                },
                {
                  text: 'Bash',
                  value: 'bash'
                },
                {
                  text: 'Bash Session',
                  value: 'console'
                },
                {
                  text: 'Batchfile',
                  value: 'bat'
                },
                {
                  text: 'BBCode',
                  value: 'bbcode'
                },
                {
                  text: 'Befunge',
                  value: 'befunge'
                },
                {
                  text: 'BlitzMax',
                  value: 'blitzmax'
                },
                {
                  text: 'Boo',
                  value: 'boo'
                },
                {
                  text: 'Brainfuck',
                  value: 'brainfuck'
                },
                {
                  text: 'Bro',
                  value: 'bro'
                },
                {
                  text: 'BUGS',
                  value: 'bugs'
                },
                {
                  text: 'C',
                  value: 'c'
                },
                {
                  text: 'C#',
                  value: 'csharp'
                },
                {
                  text: 'C++',
                  value: 'cpp'
                },
                {
                  text: 'c-objdump',
                  value: 'c-objdump'
                },
                {
                  text: 'ca65',
                  value: 'ca65'
                },
                {
                  text: 'CBM BASIC V2',
                  value: 'cbmbas'
                },
                {
                  text: 'Ceylon',
                  value: 'ceylon'
                },
                {
                  text: 'CFEngine3',
                  value: 'cfengine3'
                },
                {
                  text: 'cfstatement',
                  value: 'cfs'
                },
                {
                  text: 'Cheetah',
                  value: 'cheetah'
                },
                {
                  text: 'Clojure',
                  value: 'clojure'
                },
                {
                  text: 'CMake',
                  value: 'cmake'
                },
                {
                  text: 'COBOL',
                  value: 'cobol'
                },
                {
                  text: 'COBOLFree',
                  value: 'cobolfree'
                },
                {
                  text: 'CoffeeScript',
                  value: 'coffee-script'
                },
                {
                  text: 'Coldfusion HTML',
                  value: 'cfm'
                },
                {
                  text: 'Common Lisp',
                  value: 'common-lisp'
                },
                {
                  text: 'Coq',
                  value: 'coq'
                },
                {
                  text: 'cpp-objdump',
                  value: 'cpp-objdump'
                },
                {
                  text: 'Croc',
                  value: 'croc'
                },
                {
                  text: 'CSS',
                  value: 'css'
                },
                {
                  text: 'CSS+Django/Jinja',
                  value: 'css+django'
                },
                {
                  text: 'CSS+Genshi Text',
                  value: 'css+genshitext'
                },
                {
                  text: 'CSS+Lasso',
                  value: 'css+lasso'
                },
                {
                  text: 'CSS+Mako',
                  value: 'css+mako'
                },
                {
                  text: 'CSS+Myghty',
                  value: 'css+myghty'
                },
                {
                  text: 'CSS+PHP',
                  value: 'css+php'
                },
                {
                  text: 'CSS+Ruby',
                  value: 'css+erb'
                },
                {
                  text: 'CSS+Smarty',
                  value: 'css+smarty'
                },
                {
                  text: 'CUDA',
                  value: 'cuda'
                },
                {
                  text: 'Cython',
                  value: 'cython'
                },
                {
                  text: 'D',
                  value: 'd'
                },
                {
                  text: 'd-objdump',
                  value: 'd-objdump'
                },
                {
                  text: 'Darcs Patch',
                  value: 'dpatch'
                },
                {
                  text: 'Dart',
                  value: 'dart'
                },
                {
                  text: 'Debian Control file',
                  value: 'control'
                },
                {
                  text: 'Debian Sourcelist',
                  value: 'sourceslist'
                },
                {
                  text: 'Delphi',
                  value: 'delphi'
                },
                {
                  text: 'dg',
                  value: 'dg'
                },
                {
                  text: 'Diff',
                  value: 'diff'
                },
                {
                  text: 'Django/Jinja',
                  value: 'django'
                },
                {
                  text: 'DTD',
                  value: 'dtd'
                },
                {
                  text: 'Duel',
                  value: 'duel'
                },
                {
                  text: 'Dylan',
                  value: 'dylan'
                },
                {
                  text: 'Dylan session',
                  value: 'dylan-console'
                },
                {
                  text: 'DylanLID',
                  value: 'dylan-lid'
                },
                {
                  text: 'eC',
                  value: 'ec'
                },
                {
                  text: 'ECL',
                  value: 'ecl'
                },
                {
                  text: 'Elixir',
                  value: 'elixir'
                },
                {
                  text: 'Elixir iex session',
                  value: 'iex'
                },
                {
                  text: 'Embedded Ragel',
                  value: 'ragel-em'
                },
                {
                  text: 'ERB',
                  value: 'erb'
                },
                {
                  text: 'Erlang',
                  value: 'erlang'
                },
                {
                  text: 'Erlang erl session',
                  value: 'erl'
                },
                {
                  text: 'Evoque',
                  value: 'evoque'
                },
                {
                  text: 'Factor',
                  value: 'factor'
                },
                {
                  text: 'Fancy',
                  value: 'fancy'
                },
                {
                  text: 'Fantom',
                  value: 'fan'
                },
                {
                  text: 'Felix',
                  value: 'felix'
                },
                {
                  text: 'Fortran',
                  value: 'fortran'
                },
                {
                  text: 'FoxPro',
                  value: 'Clipper'
                },
                {
                  text: 'FSharp',
                  value: 'fsharp'
                },
                {
                  text: 'GAS',
                  value: 'gas'
                },
                {
                  text: 'Genshi',
                  value: 'genshi'
                },
                {
                  text: 'Genshi Text',
                  value: 'genshitext'
                },
                {
                  text: 'Gettext Catalog',
                  value: 'pot'
                },
                {
                  text: 'Gherkin',
                  value: 'Cucumber'
                },
                {
                  text: 'GLSL',
                  value: 'glsl'
                },
                {
                  text: 'Gnuplot',
                  value: 'gnuplot'
                },
                {
                  text: 'Go',
                  value: 'go'
                },
                {
                  text: 'GoodData-CL',
                  value: 'gooddata-cl'
                },
                {
                  text: 'Gosu',
                  value: 'gosu'
                },
                {
                  text: 'Gosu Template',
                  value: 'gst'
                },
                {
                  text: 'Groff',
                  value: 'groff'
                },
                {
                  text: 'Groovy',
                  value: 'groovy'
                },
                {
                  text: 'Haml',
                  value: 'haml'
                },
                {
                  text: 'Haskell',
                  value: 'haskell'
                },
                {
                  text: 'haXe',
                  value: 'hx'
                },
                {
                  text: 'HTML',
                  value: 'html'
                },
                {
                  text: 'HTML+Cheetah',
                  value: 'html+cheetah'
                },
                {
                  text: 'HTML+Django/Jinja',
                  value: 'html+django'
                },
                {
                  text: 'HTML+Evoque',
                  value: 'html+evoque'
                },
                {
                  text: 'HTML+Genshi',
                  value: 'html+genshi'
                },
                {
                  text: 'HTML+Lasso',
                  value: 'html+lasso'
                },
                {
                  text: 'HTML+Mako',
                  value: 'html+mako'
                },
                {
                  text: 'HTML+Myghty',
                  value: 'html+myghty'
                },
                {
                  text: 'HTML+PHP',
                  value: 'html+php'
                },
                {
                  text: 'HTML+Smarty',
                  value: 'html+smarty'
                },
                {
                  text: 'HTML+Velocity',
                  value: 'html+velocity'
                },
                {
                  text: 'HTTP',
                  value: 'http'
                },
                {
                  text: 'Hxml',
                  value: 'haxeml'
                },
                {
                  text: 'Hybris',
                  value: 'hybris'
                },
                {
                  text: 'IDL',
                  value: 'idl'
                },
                {
                  text: 'INI',
                  value: 'ini'
                },
                {
                  text: 'Io',
                  value: 'io'
                },
                {
                  text: 'Ioke',
                  value: 'ioke'
                },
                {
                  text: 'IRC logs',
                  value: 'irc'
                },
                {
                  text: 'Jade',
                  value: 'jade'
                },
                {
                  text: 'JAGS',
                  value: 'jags'
                },
                {
                  text: 'Java',
                  value: 'java'
                },
                {
                  text: 'Java Server Page',
                  value: 'jsp'
                },
                {
                  text: 'JavaScript',
                  value: 'js'
                },
                {
                  text: 'JavaScript+Cheetah',
                  value: 'js+cheetah'
                },
                {
                  text: 'JavaScript+Django/Jinja',
                  value: 'js+django'
                },
                {
                  text: 'JavaScript+Genshi Text',
                  value: 'js+genshitext'
                },
                {
                  text: 'JavaScript+Lasso',
                  value: 'js+lasso'
                },
                {
                  text: 'JavaScript+Mako',
                  value: 'js+mako'
                },
                {
                  text: 'JavaScript+Myghty',
                  value: 'js+myghty'
                },
                {
                  text: 'JavaScript+PHP',
                  value: 'js+php'
                },
                {
                  text: 'JavaScript+Ruby',
                  value: 'js+erb'
                },
                {
                  text: 'JavaScript+Smarty',
                  value: 'js+smarty'
                },
                {
                  text: 'JSON',
                  value: 'json'
                },
                {
                  text: 'Julia',
                  value: 'julia'
                },
                {
                  text: 'Julia console',
                  value: 'jlcon'
                },
                {
                  text: 'Kconfig',
                  value: 'kconfig'
                },
                {
                  text: 'Koka',
                  value: 'koka'
                },
                {
                  text: 'Kotlin',
                  value: 'kotlin'
                },
                {
                  text: 'Lasso',
                  value: 'lasso'
                },
                {
                  text: 'Lighttpd configuration file',
                  value: 'lighty'
                },
                {
                  text: 'Literate Haskell',
                  value: 'lhs'
                },
                {
                  text: 'LiveScript',
                  value: 'live-script'
                },
                {
                  text: 'LLVM',
                  value: 'llvm'
                },
                {
                  text: 'Logos',
                  value: 'logos'
                },
                {
                  text: 'Logtalk',
                  value: 'logtalk'
                },
                {
                  text: 'Lua',
                  value: 'lua'
                },
                {
                  text: 'Makefile',
                  value: 'make'
                },
                {
                  text: 'Mako',
                  value: 'mako'
                },
                {
                  text: 'MAQL',
                  value: 'maql'
                },
                {
                  text: 'Mason',
                  value: 'mason'
                },
                {
                  text: 'Matlab',
                  value: 'matlab'
                },
                {
                  text: 'Matlab session',
                  value: 'matlabsession'
                },
                {
                  text: 'MiniD',
                  value: 'minid'
                },
                {
                  text: 'Modelica',
                  value: 'modelica'
                },
                {
                  text: 'Modula-2',
                  value: 'modula2'
                },
                {
                  text: 'MoinMoin/Trac Wiki markup',
                  value: 'trac-wiki'
                },
                {
                  text: 'Monkey',
                  value: 'monkey'
                },
                {
                  text: 'MOOCode',
                  value: 'moocode'
                },
                {
                  text: 'MoonScript',
                  value: 'moon'
                },
                {
                  text: 'Mscgen',
                  value: 'mscgen'
                },
                {
                  text: 'MuPAD',
                  value: 'mupad'
                },
                {
                  text: 'MXML',
                  value: 'mxml'
                },
                {
                  text: 'Myghty',
                  value: 'myghty'
                },
                {
                  text: 'MySQL',
                  value: 'mysql'
                },
                {
                  text: 'NASM',
                  value: 'nasm'
                },
                {
                  text: 'Nemerle',
                  value: 'nemerle'
                },
                {
                  text: 'NewLisp',
                  value: 'newlisp'
                },
                {
                  text: 'Newspeak',
                  value: 'newspeak'
                },
                {
                  text: 'Nginx configuration file',
                  value: 'nginx'
                },
                {
                  text: 'Nimrod',
                  value: 'nimrod'
                },
                {
                  text: 'NSIS',
                  value: 'nsis'
                },
                {
                  text: 'NumPy',
                  value: 'numpy'
                },
                {
                  text: 'objdump',
                  value: 'objdump'
                },
                {
                  text: 'Objective-C',
                  value: 'objective-c'
                },
                {
                  text: 'Objective-C++',
                  value: 'objective-c++'
                },
                {
                  text: 'Objective-J',
                  value: 'objective-j'
                },
                {
                  text: 'OCaml',
                  value: 'ocaml'
                },
                {
                  text: 'Octave',
                  value: 'octave'
                },
                {
                  text: 'Ooc',
                  value: 'ooc'
                },
                {
                  text: 'Opa',
                  value: 'opa'
                },
                {
                  text: 'OpenEdge ABL',
                  value: 'openedge'
                },
                {
                  text: 'Perl',
                  value: 'perl'
                },
                {
                  text: 'PHP',
                  value: 'php'
                },
                {
                  text: 'PL/pgSQL',
                  value: 'plpgsql'
                },
                {
                  text: 'PostgreSQL console (psql)',
                  value: 'psql'
                },
                {
                  text: 'PostgreSQL SQL dialect',
                  value: 'postgresql'
                },
                {
                  text: 'PostScript',
                  value: 'postscript'
                },
                {
                  text: 'POVRay',
                  value: 'pov'
                },
                {
                  text: 'PowerShell',
                  value: 'powershell'
                },
                {
                  text: 'Prolog',
                  value: 'prolog'
                },
                {
                  text: 'Properties',
                  value: 'properties'
                },
                {
                  text: 'Protocol Buffer',
                  value: 'protobuf'
                },
                {
                  text: 'Puppet',
                  value: 'puppet'
                },
                {
                  text: 'PyPy Log',
                  value: 'pypylog'
                },
                {
                  text: 'Python',
                  value: 'python'
                },
                {
                  text: 'Python 3',
                  value: 'python3'
                },
                {
                  text: 'Python 3.0 Traceback',
                  value: 'py3tb'
                },
                {
                  text: 'Python console session',
                  value: 'pycon'
                },
                {
                  text: 'Python Traceback',
                  value: 'pytb'
                },
                {
                  text: 'QML',
                  value: 'qml'
                },
                {
                  text: 'Racket',
                  value: 'racket'
                },
                {
                  text: 'Ragel',
                  value: 'ragel'
                },
                {
                  text: 'Ragel in C Host',
                  value: 'ragel-c'
                },
                {
                  text: 'Ragel in CPP Host',
                  value: 'ragel-cpp'
                },
                {
                  text: 'Ragel in D Host',
                  value: 'ragel-d'
                },
                {
                  text: 'Ragel in Java Host',
                  value: 'ragel-java'
                },
                {
                  text: 'Ragel in Objective C Host',
                  value: 'ragel-objc'
                },
                {
                  text: 'Ragel in Ruby Host',
                  value: 'ragel-ruby'
                },
                {
                  text: 'Raw token data',
                  value: 'raw'
                },
                {
                  text: 'RConsole',
                  value: 'rconsole'
                },
                {
                  text: 'Rd',
                  value: 'rd'
                },
                {
                  text: 'REBOL',
                  value: 'rebol'
                },
                {
                  text: 'Redcode',
                  value: 'redcode'
                },
                {
                  text: 'reg',
                  value: 'registry'
                },
                {
                  text: 'reStructuredText',
                  value: 'rst'
                },
                {
                  text: 'RHTML',
                  value: 'rhtml'
                },
                {
                  text: 'RobotFramework',
                  value: 'RobotFramework'
                },
                {
                  text: 'RPMSpec',
                  value: 'spec'
                },
                {
                  text: 'Ruby',
                  value: 'rb'
                },
                {
                  text: 'Ruby irb session',
                  value: 'rbcon'
                },
                {
                  text: 'Rust',
                  value: 'rust'
                },
                {
                  text: 'S',
                  value: 'splus'
                },
                {
                  text: 'Sass',
                  value: 'sass'
                },
                {
                  text: 'Scala',
                  value: 'scala'
                },
                {
                  text: 'Scalate Server Page',
                  value: 'ssp'
                },
                {
                  text: 'Scaml',
                  value: 'scaml'
                },
                {
                  text: 'Scheme',
                  value: 'scheme'
                },
                {
                  text: 'Scilab',
                  value: 'scilab'
                },
                {
                  text: 'SCSS',
                  value: 'scss'
                },
                {
                  text: 'Shell Session',
                  value: 'shell-session'
                },
                {
                  text: 'Smali',
                  value: 'smali'
                },
                {
                  text: 'Smalltalk',
                  value: 'smalltalk'
                },
                {
                  text: 'Smarty',
                  value: 'smarty'
                },
                {
                  text: 'Snobol',
                  value: 'snobol'
                },
                {
                  text: 'SourcePawn',
                  value: 'sp'
                },
                {
                  text: 'SQL',
                  value: 'sql'
                },
                {
                  text: 'sqlite3con',
                  value: 'sqlite3'
                },
                {
                  text: 'SquidConf',
                  value: 'squidconf'
                },
                {
                  text: 'Stan',
                  value: 'stan'
                },
                {
                  text: 'Standard ML',
                  value: 'sml'
                },
                {
                  text: 'systemverilog',
                  value: 'systemverilog'
                },
                {
                  text: 'Tcl',
                  value: 'tcl'
                },
                {
                  text: 'Tcsh',
                  value: 'tcsh'
                },
                {
                  text: 'Tea',
                  value: 'tea'
                },
                {
                  text: 'TeX',
                  value: 'tex'
                },
                {
                  text: 'Text only',
                  value: 'text'
                },
                {
                  text: 'Treetop',
                  value: 'treetop'
                },
                {
                  text: 'TypeScript',
                  value: 'ts'
                },
                {
                  text: 'UrbiScript',
                  value: 'urbiscript'
                },
                {
                  text: 'Vala',
                  value: 'vala'
                },
                {
                  text: 'VB.net',
                  value: 'vb.net'
                },
                {
                  text: 'Velocity',
                  value: 'velocity'
                },
                {
                  text: 'verilog',
                  value: 'verilog'
                },
                {
                  text: 'VGL',
                  value: 'vgl'
                },
                {
                  text: 'vhdl',
                  value: 'vhdl'
                },
                {
                  text: 'VimL',
                  value: 'vim'
                },
                {
                  text: 'XML',
                  value: 'xml'
                },
                {
                  text: 'XML+Cheetah',
                  value: 'xml+cheetah'
                },
                {
                  text: 'XML+Django/Jinja',
                  value: 'xml+django'
                },
                {
                  text: 'XML+Evoque',
                  value: 'xml+evoque'
                },
                {
                  text: 'XML+Lasso',
                  value: 'xml+lasso'
                },
                {
                  text: 'XML+Mako',
                  value: 'xml+mako'
                },
                {
                  text: 'XML+Myghty',
                  value: 'xml+myghty'
                },
                {
                  text: 'XML+PHP',
                  value: 'xml+php'
                },
                {
                  text: 'XML+Ruby',
                  value: 'xml+erb'
                },
                {
                  text: 'XML+Smarty',
                  value: 'xml+smarty'
                },
                {
                  text: 'XML+Velocity',
                  value: 'xml+velocity'
                },
                {
                  text: 'XQuery',
                  value: 'xquery'
                },
                {
                  text: 'XSLT',
                  value: 'xslt'
                },
                {
                  text: 'Xtend',
                  value: 'xtend'
                },
                {
                  text: 'YAML',
                  value: 'yaml'
                }
              ],
              value: 'python'
            },
            {
              type: 'listbox',
              name: 'style',
              label: 'Style',
              values: [
                {
                  text: 'autumn',
                  value: 'autumn'
                },
                {
                  text: 'borland',
                  value: 'borland'
                },
                {
                  text: 'bw',
                  value: 'bw'
                },
                {
                  text: 'colorful',
                  value: 'colorful'
                },
                {
                  text: 'default',
                  value: 'default'
                },
                {
                  text: 'emacs',
                  value: 'emacs'
                },
                {
                  text: 'friendly',
                  value: 'friendly'
                },
                {
                  text: 'fruity',
                  value: 'fruity'
                },
                {
                  text: 'manni',
                  value: 'manni'
                },
                {
                  text: 'monokai',
                  value: 'monokai'
                },
                {
                  text: 'murphy',
                  value: 'murphy'
                },
                {
                  text: 'native',
                  value: 'native'
                },
                {
                  text: 'pastie',
                  value: 'pastie'
                },
                {
                  text: 'perldoc',
                  value: 'perldoc'
                },
                {
                  text: 'rrt',
                  value: 'rrt'
                },
                {
                  text: 'tango',
                  value: 'tango'
                },
                {
                  text: 'trac',
                  value: 'trac'
                },
                {
                  text: 'vim',
                  value: 'vim'
                },
                {
                  text: 'vs',
                  value: 'vs'
                }
              ],
              value: 'default'
            },
            {
              type: 'checkbox',
              name: 'linenos',
              label: 'Line numbers',
              text: 'Include line numbers',
              classes: 'checkclass'
            },
            {
              type: 'textbox',
              name: 'divstyles',
              label: 'CSS',
              value: 'border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'
            }
          ],
          onsubmit: function (e) {
            var urlApi = 'https://api.bigbytetech.ca/hilite/api.php';
            var codeParams = {
              code: e.data.code_raw,
              divstyles: e.data.divstyles,
              lexer: e.data.lexer,
              style: e.data.style
            };
            var request = JSON.stringify(codeParams);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', urlApi);
            xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var jsondata = JSON.parse(xmlhttp.responseText);
                var addLineNum = false;
                if (e.data.linenos) {
                  addLineNum = true;
                }
                var lightNum = true;
                if (addLineNum === true) {
                  var styleItm = codeParams.style;
                  if (styleItm === 'fruity' || styleItm === 'monokai' || styleItm === 'native' || styleItm === 'rrt' || styleItm === 'vim') {
                    lightNum = false;
                  }
                }
                var result_1 = processCode(jsondata.value, addLineNum, lightNum);
                editor.focus();
                editor.undoManager.transact(function () {
                  editor.insertContent(result_1);
                });
                editor.nodeChanged();
              }
            };
            xmlhttp.send(request);
          }
        });
      };
      editor.addButton('hilite', {
        title: 'Hightlight code',
        image: 'https://i.postimg.cc/XJ6gPDj3/hilite-btn.png',
        onclick: mainFunction
      });
      editor.addCommand('mceHiliteCodeFormatter', mainFunction), editor.addMenuItem('hilite', {
        image: 'https://i.postimg.cc/XJ6gPDj3/hilite-btn.png',
        text: 'Hilite Code',
        context: 'insert',
        onclick: mainFunction
      });
      var processCode = function (strCode, addLineNum, lightLineNum) {
        var divOpen = getDivOpen(strCode);
        var pre = '<div style="overflow:visible;background-color:transparent;margin: 0;line-height: 1.3em;font-family: Monaco, Courier, monospace;">';
        var divPre = divOpen + pre;
        var innerCode = extractFormatedCode(strCode);
        var codeTaged = addCodeTags(innerCode);
        if (addLineNum !== false) {
          codeTaged = addLineNumbers(codeTaged, lightLineNum);
        }
        codeTaged = addOutterDivElement(codeTaged);
        var result = divPre + codeTaged + '</div></div>';
        return result;
      };
      var getDivOpen = function (html) {
        var startDivRegex = /(<div.*?>)/gm;
        var divMatchStart = startDivRegex.exec(html);
        var startIndex = 0;
        var endIndex = 0;
        if (divMatchStart) {
          startIndex = divMatchStart.index;
          endIndex = divMatchStart.index + divMatchStart[0].length;
        }
        var strCode = html.substr(startIndex, endIndex);
        return strCode;
      };
      var extractFormatedCode = function (html) {
        var startRegex = /(<pre.*?>)/gm;
        var endRegex = /(<\/pre>)/gm;
        var matchStart = startRegex.exec(html);
        var startIndex = 0;
        var endIndex = 0;
        if (matchStart) {
          startIndex = matchStart.index + matchStart[0].length;
        }
        var matchEnd = endRegex.exec(html);
        if (matchEnd) {
          endIndex = matchEnd.index;
        }
        var len = html.length - startIndex - (html.length - endIndex);
        var strCode = html.substr(startIndex, len);
        return strCode;
      };
      var addOutterDivElement = function (html) {
        if (html === undefined) {
          return '';
        }
        var lines = html.match(/^.*([\n\r]+|$)/gm);
        var arrayLength = lines.length;
        var result = '';
        var spanOpen = '<div style="white-space: nowrap;display:block;line-height: 1.3em;">';
        var spanClose = '</div>\n';
        if (arrayLength) {
          for (var i = 0; i < arrayLength; i++) {
            result += spanOpen + lines[i] + spanClose;
          }
          return result;
        }
      };
      var addCodeTags = function (html) {
        if (html === undefined) {
          return '';
        }
        var lines = html.match(/^.*([\n\r]+|$)/gm);
        var arrayLength = lines.length;
        var result = '';
        if (arrayLength) {
          for (var i = 0; i < arrayLength; i++) {
            var codeLine = lineCodeTag(lines[i]);
            if (codeLine.length > 0) {
              result += codeLine + '\n';
            }
          }
          return result;
        }
      };
      var lineCodeTag = function (strLine) {
        if (strLine === undefined) {
          return '';
        }
        if (strLine.length === 0) {
          return '';
        }
        var spacedLine = startSpaceToNb(strLine);
        return '<code style="background-color:transparent;">' + spacedLine.trim() + '</code>';
      };
      var addLineNumbers = function (str, lightLineNum) {
        if (str === undefined) {
          return '';
        }
        var lines = str.match(/^.*([\n\r]+|$)/gm);
        var arrayLength = lines.length;
        var result = '';
        var numStyle = '-webkit-user-select: none;user-select: none;-o-user-select:none;-webkit-touch-callout: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;';
        numStyle += 'margin-right: 8px;';
        numStyle += 'min-width:28px;';
        numStyle += 'text-align: right;';
        numStyle += 'display: inline-block;';
        numStyle += 'line-height: 1.3em;';
        numStyle += 'padding-right:5px;';
        if (lightLineNum === true) {
          numStyle += 'color: #626262;';
        } else {
          numStyle += 'color: #c9c9c9;';
        }
        var openTag = '<div style="' + numStyle + '">';
        var closeTag = '</div>';
        if (arrayLength) {
          for (var i = 0; i < arrayLength; i++) {
            var count = i + 1;
            var line = lines[i];
            if (line.length > 0) {
              var codeLine = openTag + count + closeTag + line;
              result += codeLine;
            }
          }
          return result;
        }
      };
      var startSpaceToNb = function (str) {
        if (str === undefined) {
          return '';
        }
        var regex = /^\s+/;
        var m;
        var result;
        m = regex.exec(str);
        if (m !== null) {
          var arrayLength = m[0].length;
          var nbs = '';
          if (arrayLength) {
            for (var i = 0; i < arrayLength; i++) {
              nbs += '&nbsp;';
            }
            result = nbs + str.substr(arrayLength, str.length - arrayLength);
          }
        } else {
          result = str;
        }
        return result;
      };
    };
    tinymce.PluginManager.add('hilite', setup);
    function Plugin () {
    }

    return Plugin;

}());
plugin();})();
