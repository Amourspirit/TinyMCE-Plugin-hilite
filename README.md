# Hilite Plugin for TinyMCE 4

-------

## Code with style

**Insert formated code with options (style, line numbers, code language)**

## Authors

* Paul Moss (Author-Developer)

## Screenshots

**Menu and Toolbar**  
![tinymce-hilite03.png](https://i.postimg.cc/y629SxBR/tinymce-hilite03.png)

**Many code languages supported**  
![tinymce-hilite04.png](https://i.postimg.cc/Qxb8ZY6M/tinymce-hilite04.png)

**Paste in your code**  
![tinymce-hilite05.png](https://i.postimg.cc/nVWKYTKC/tinymce-hilite05.png)

**Results of Hilite**  
![tinymce-hilite06.png](https://i.postimg.cc/SNpFz5Rh/tinymce-hilite06.png)

**Result os Hilite with a different Style**  
![tinymce-hilite07.png](https://i.postimg.cc/Df1sgJvX/tinymce-hilite07.png)

### Installation

* Download the dist/hilite.zip
* Unzip archive in tinyMCE plugin directory (tiny_mce/plugins/)

### Configuration

 ```html
<script type="text/javascript">
tinymce.init({
    selector: "textarea",
    plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste hilite"
            ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image| hilite",
    extended_valid_elements: "+iframe[src|width|height|name|align|class]",
    });
</script>
```
