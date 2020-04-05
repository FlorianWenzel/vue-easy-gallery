<template>
    <div>
        <ImageRow
                v-for="amount in amountOfRows"
                @click="imageClick"
                :border-style="options.border"
                :smooth-resize="!!options.smoothResize"
                :toggle-text-on-click="options.toggleTextOnClick"
                :width="width"
                :height="height"
                :key="amount"
                :images="images.slice((amount - 1) * perRow, ((amount) * perRow))" :amount="amount"
        >
        </ImageRow>
    </div>
</template>
<script>
    import ImageRow from "./components/ImageRow";
    export default {
        components: {ImageRow},
        props: ["images", "options", "perRow"],
        methods: {
            imageClick(image){
                this.$emit('imageClick', image);
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
            },
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
            }
        },
        created(){
            if(typeof  this.images !== typeof []){return;}
            this.imgs = [...this.images];
            this.amountOfRows = Math.ceil(this.imgs.length / this.perRow);
            this.options.border = this.options.border ? this.options.border : 'none';
        },
        mounted() {
            this.width = this.$el.getBoundingClientRect().width;
            this.height = this.$el.getBoundingClientRect().height;
            window.addEventListener("resize", this.handleResize);
        }
    }
</script>