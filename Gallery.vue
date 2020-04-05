<template>
    <div>
        <ImageRow @click="imageClick" class="postImageRow" :border-style="borderStyle" :width="width" :height="height" :key="amount" v-for="amount in amountOfRows" :images="images.slice((amount - 1) * perRow, ((amount) * perRow))" :amount="amount"></ImageRow>
    </div>
</template>
<script>
    import ImageRow from "./components/ImageRow";
    import { v4 } from 'uuid';

    export default {
        components: {ImageRow},
        props: ["images", "options", "perRow"],
        methods: {
            imageClick(image){
                this.openIndex = this.images.indexOf(image);
            },
            handleResize(){
                if(this.resizeTimeout)
                    clearTimeout(this.resizeTimeout);
                this.resizeTimeout = setTimeout(() => {
                    this.width = this.$el.getBoundingClientRect().width;
                    this.height = this.$el.getBoundingClientRect().height;
                }, 300)
            }
        },
        watch: {
            perRow(){
                this.amountOfRows = Math.ceil(this.imgs.length / this.perRow);
            }
        },
        data: function(){
            return {
                imgs: [],
                amountOfRows: 0,
                openIndex: -1,
                opt: null,
                width: 1000,
                height: 1000,
                resizeTimeout: null,
                borderStyle: 'none',
            }
        },
        created(){
            if(typeof  this.images !== typeof []){return;}
            this.imgs = [...this.images];
            for(const image of this.imgs)
                image.id = v4();
            this.amountOfRows = Math.ceil(this.imgs.length / this.perRow);
            this.borderStyle = this.options.border ? this.options.border : 'none';
        },
        mounted() {
            this.width = this.$el.getBoundingClientRect().width;
            this.height = this.$el.getBoundingClientRect().height;
            window.addEventListener("resize", this.handleResize);
        }
    }
</script>