<template>
    <div  class="vue-gallery-row">
        <div v-for="(image, index) in images"
             :key="index"
             :data-sub-html="image.text"
             :data-src="image.src"
             class="vue-gallery-image-wrapper"
             :style="size[index] + ' position: relative; border: ' + borderStyle + ';' + (smoothResize ? 'transition: width .3s, height .3s;' : '')"
        >
            <img v-if="!loaded[index]" :src="image.thumbnail" @click="click(image)" :alt="image.text ? image.text : ' '" class="vue-gallery-image">
            <img :src="image.src" @load="loadImage(image)" @click="click(image)" :style="getBackground(image)" :alt="image.text ? image.text : ' '" class="vue-gallery-image"/>
            <div v-if="image.text" @click="click(image)" class="vue-gallery-text" :style="hideText[index] ? 'bottom: -100%;' : ''">{{image.text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageRow",
        props: ["images", "amount", "width", "height", "borderStyle", "smoothResize", "toggleTextOnClick"],
        data: function(){
            return {
                size: [],
                loaded: [],
                hideText: []
            }
        },
        methods: {
            updateSizes(){
                this.size = [];
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
                for(const index in this.images){
                    let in_percent = (ratio[index] / full_width) * 100;
                    const screenWidthOfHighestRatio = ((parseInt(imageWithHighestRatio.image.width)) / (parseInt(imageWithHighestRatio.image.height)) / full_width) * this.width;

                    const shrinkingFactor = screenWidthOfHighestRatio / imageWithHighestRatio.image.width;
                    let height = imageWithHighestRatio.image.height * shrinkingFactor;
                    this.size.push( 'height: ' + height + 'px; width: ' + in_percent + '%;');
                }
            },
            click(image){
                this.$emit('click', image);
                if(this.toggleTextOnClick && image.text){
                    this.toggleText(image);
                }
            },
            toggleText(image){
                const index = this.images.indexOf(image);
                this.$set(this.hideText, index, !this.hideText[index]);
            },
            loadImage(image){
                const index = this.images.indexOf(image);
                this.$set(this.loaded, index, true);
                event.target.classList.add('loaded');
                this.$emit('imageLoad', event);
            },
            getBackground(image){
                return `background-image: url('${image.thumbnail}');`;
            }
        },
        watch: {
            images() {
                this.updateSizes();
            },
            width() {
                this.updateSizes();
            }
        },
        mounted() {
            this.updateSizes();
        },
    }
</script>

<style scoped>
    img:hover{
        cursor: pointer;
    }
    img {
        background-size: cover;
        background-position: center;
        background-color: #363636;
        max-width: 100vw;
        filter: blur(15px);
        transition: .8s filter  linear;
    }
    img.loaded {
        filter: blur(0px);
        animation-name: none;
    }
    .vue-gallery-image-wrapper{
        align-self: center;
        text-align: center;
        overflow: hidden;
    }
    .vue-gallery-row{
        width: 100%;
        display: flex;
        align-content: center;
    }
    .vue-gallery-image{
        height: 100%;
        width: 100%;
    }
    .vue-gallery-text{
        transition: bottom .3s;
        font-family: Avenir,Helvetica,Arial,sans-serif;
        position: absolute;
        bottom: 0;
        max-height: calc(100% - 1rem);
        overflow-y: scroll;
        width: calc(100% - 1rem);
        color: white;
        background: rgba(54, 54, 54, .8);
        padding: .5rem;
        word-wrap: break-word
    }
</style>