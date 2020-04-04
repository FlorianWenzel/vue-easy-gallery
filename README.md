# vue-easy-gallery
A easy to use, beautiful gallery vue component.
## Demo
[Example Gallery](https://florianwenzel.github.io/)  
[Example Code](https://github.com/FlorianWenzel/vue-easy-gallery/blob/master/example/GalleryDemo.vue)
## Installation
### NPM
```shell
$ npm i vue-easy-gallery
```
## Usage
### Example 
```html
<template>   
  <Gallery :images="images" :per-row="3" :options="{border: 'solid thin white'}"></Gallery>  
</template>   
```
```js
<script>  
    import Gallery from "vue-easy-gallery";  

    export default {  
        components: { Gallery },  
        data(){  
            return {  
                images: [  
                    {  
                        "src" : "https://myimage.url/img1.jpg",  
                        "thumbnail" : "https://myimage.url/img1thumb.jpg",   
                        "height" : 4013,  
                        "width" : 3581  
                    },  
                    {    
                        "src" : "https://myimage.url/img2.jpg",  
                        "thumbnail" : "https://myimage.url/img2thumb.jpg",  
                        "height" : 4264,  
                        "width" : 2843  
                    }
                ]  
            }  
        }  
    }  
</script>
```
### Options
```
per-row: 3                  #amount of images per row
images: []                  #the images to display
options.border: 'none'      #border to seperate the images
```
