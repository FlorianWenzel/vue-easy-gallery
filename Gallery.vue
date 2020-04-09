<template>
  <div>
    <div v-if="!options.vertical">
      <ImageRow
        v-for="amount in amountOfRows"
        @click="imageClick"
        :border-style="options.border"
        :smooth-resize="!!options.smoothResize"
        :toggle-text-on-click="options.toggleTextOnClick"
        :width="width"
        :key="amount"
        :images="images.slice((amount - 1) * perRow, amount * perRow)"
        :amount="amount"
      />
    </div>
    <div class="vue-gallery-vertical-wrapper" v-if="options.vertical">
      <ImageColumn
        v-for="amount in amountOfColumns"
        @click="imageClick"
        :border-style="options.border"
        :smooth-resize="!!options.smoothResize"
        :toggle-text-on-click="options.toggleTextOnClick"
        :width="width"
        :key="amount"
        :images="
          images.slice(
            (amount - 1) * (imgs.length / perRow),
            amount * (imgs.length / perRow)
          )
        "
        :amount="amountOfColumns"
      />
    </div>
  </div>
</template>
<style scoped>
.vue-gallery-vertical-wrapper {
  display: flex;
  width: 100%;
}
</style>
<script>
import ImageRow from "./components/ImageRow";
import ImageColumn from "./components/ImageColumn";
export default {
  components: { ImageColumn, ImageRow },
  props: ["images", "options", "perRow"],
  methods: {
    imageClick(image) {
      this.$emit("imageClick", image);
    },
    handleResize() {
      if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.width = this.$el.getBoundingClientRect().width;
        this.height = this.$el.getBoundingClientRect().height;
      }, 300);
    },
  },
  watch: {
    perRow() {
      this.amountOfRows = Math.ceil(this.imgs.length / this.perRow);
      this.amountOfColumns = parseInt(this.perRow);
    },
  },
  data: function () {
    return {
      imgs: [],
      amountOfRows: 0,
      amountOfColumns: 0,
      openIndex: -1,
      opt: null,
      width: 1000,
      resizeTimeout: null,
    };
  },
  created() {
    if (typeof this.images !== typeof []) {
      return;
    }
    this.imgs = [...this.images];
    this.amountOfRows = Math.ceil(this.imgs.length / this.perRow);
    this.amountOfColumns = this.perRow;
    this.options.border = this.options.border ? this.options.border : "none";
  },
  mounted() {
    this.width = this.$el.getBoundingClientRect().width;
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
