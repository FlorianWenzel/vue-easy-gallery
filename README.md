# vue-easy-gallery
A easy to use, responsive gallery vue component. 
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
## Attributes
### per-row
The amount of images per row
```html
<Gallery :images="images" :per-row="3"></Gallery>  
```
### images
the images to display
```js
images = [                              
    {  
        //[required] the source of the image
        "src" : "https://myimage.url/img1.jpg",

        //[required] the hight of the image, required 
        "height" : 4013,  

        //[required] the width of the image, required 
        "width" : 3581,

        //[recommended] a less detailed version of the image, will be displayed blurred during loading
        //recommended size is less then 1kb, optional but recommended 
        "thumbnail" : "https://myimage.url/img1thumb.jpg",

        //[optional] Text, that will be displayed at the bottom of the image, optional
        "text": "Lorem ipsum dolor sit amet"
    },  
];          
```
### options
```js                           
options = {
    //the border around each image, can be used as padding
    border: 'solid .5rem transparent',  //default: none
    
    //smoother transitions on window resize
    smoothResize: false,                //default: false
    
    //When the image is clicked, the text is toggled visible/invisible
    toggleTextOnClick: false            //default: false
}
```
