<template>
    <div  class="w-100 imagerow d-flex align-content-center">
        <div :key="index" :data-sub-html="image.text" :data-src="image.src" v-for="(image, index) in images" class="img-wrapper align-self-center overflow-hidden" :style="widths[index] + ' border: ' + borderStyle + ';'">
            <img :src="image.thumbnail" :id="image.id" @click="click(image)" :alt="image.text ? image.text : ' '" class="h-100">
            <img :src="image.src" @load="loadImage(image)" @click="click(image)" :style="getBackground(image)" :alt="image.text ? image.text : ' '" class="h-100"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageRow",
        props: ["images", "amount", "width", "height", "borderStyle"],
        data: function(){
            return {
                widths: [],
                widestImage: null,
            }
        },
        methods: {
            getWidth(index){
                const ratio = [];
                const imageWithHighestRatio = { ratio:0 };
                for(const image of this.images){
                    const r = (parseInt(image.width)) / (parseInt(image.height));
                    ratio.push(r);
                    if(r > imageWithHighestRatio.ratio){
                        imageWithHighestRatio.ratio = r;
                        imageWithHighestRatio.image = image;
                    }
                }
                const full_width = ratio.reduce((accumulator, currentValue) => accumulator + currentValue);
                let in_percent = (ratio[index] / full_width) * 100;
                const screenWidthOfHighestRatio = ((parseInt(imageWithHighestRatio.image.width)) / (parseInt(imageWithHighestRatio.image.height)) / full_width) * this.width;

                const shrinkingFactor = screenWidthOfHighestRatio / imageWithHighestRatio.image.width;
                let height = imageWithHighestRatio.image.height * shrinkingFactor;
                if(height > window.innerHeight){
                    height = window.innerHeight;
                }
                return 'height: ' + height + 'px; width: ' + in_percent + '%;';
            },
            click(image){
                this.$emit('click', image);
            },
            loadImage(image){
                if(document.getElementById(image.id))
                    document.getElementById(image.id).remove();
                event.target.classList.add('loaded');
                this.$emit('imageLoad', event);
            },
            getBackground(image){
                return `background-image: url('${image.thumbnail_url}');`;
            }
        },
        watch: {
            images: function(){
                this.widths = [];
                for(const index in this.images){
                    this.widths.push(this.getWidth(index));
                }
            }
        },
        mounted() {
            for(const index in this.images){
                this.widths.push(this.getWidth(index));
            }
        }
    }
</script>

<style scoped>
    .postImageRow>.img-wrapper {
        border: solid thin white;
    }
    img:hover{
        cursor: pointer;
    }
    img {
        background-size: cover;
        background-position: center;
        background-color: #363636;
        max-height: 100vh;
        max-width: 100vw;
        filter: blur(15px);
        transition: .8s filter  linear;
    }
    img.loaded {
        filter: blur(0px);
        animation-name: none;
    }
    .align-content-center {
        align-content: center;
    }
    .d-flex {
        display: flex;
    }
    .overflow-hidden{
        overflow: hidden;
    }
    .align-self-center{
        align-self: center;
        text-align: center;
    }
    .w-100 {
        width: 100%!important;
    }
    .h-100 {
        height: 100%!important;
    }
</style>