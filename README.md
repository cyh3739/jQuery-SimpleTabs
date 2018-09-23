# jQuery-SimpleTabs
jQuery | SimpleTabs

### License
MIT license - http://opensource.org/licenses/MIT

### Set up

```html
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!--[if lt IE 9]> <script src="http://code.jquery.com/jquery-1.9.1.js"></script> <![endif]-->

<!-- simpleTabs.css & simpleTabs.min.js -->
<link rel="stylesheet" href="./simpleTabs.css">
<script src="./simpleTabs.min.js"></script>

<!-- Call the simpleTabs -->
<script>
$(document).ready(function(){
    $('.simpleTabs').simpleTabs();
});  
</script>

<!--=== simpleTabs(Basic) ===-->
<div class="simpleTabs">
            <div data-st-title="Button01"> Contents... </div>
            <div data-st-title="Button02"> Contents... </div>
            <div data-st-title="Button03"> Contents... </div>
</div>   

```

### Custom Style - [Example]

```css
/*button - (.simpleTabs_button)*/
.simpleTabs>.simpleTabs_button>li{margin:0 5px 0 0; border:1px solid #adb5bd; color:#333; }
.simpleTabs>.simpleTabs_button>li.active{background:#e9ecef; border-bottom:1px solid #e9ecef; }

/*contents - (.simpleTabs_contents)*/
.simpleTabs>.simpleTabs_contents{margin-top:-1px; padding:5px 10px; background:#e9ecef; color:#333; border:1px solid #adb5bd; }
```
