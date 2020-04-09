<template>
  <div class="vue-gallery-row">
    <div
      v-for="(image, index) in images"
      :key="index"
      :data-sub-html="image.text"
      :data-src="image.src"
      :class="{
        'vue-gallery-image-wrapper': true,
        'vue-gallery-smooth-resize': smoothResize,
      }"
      :style="{ border: borderStyle, height: size[index] }"
    >
      <img
        v-if="!loaded[index]"
        :src="image.thumbnail"
        @click="click(image)"
        :alt="image.text ? image.text : ' '"
        class="vue-gallery-image"
      />
      <img
        :src="image.src"
        @load="loadImage(image)"
        @click="click(image)"
        :style="getBackground(image)"
        :alt="image.text ? image.text : ' '"
        class="vue-gallery-image"
      />
      <div
        v-if="image.text"
        @click="click(image)"
        class="vue-gallery-text"
        :style="hideText[index] ? 'bottom: -100%;' : ''"
      >
        {{ image.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageColumn",
  props: [
    "images",
    "amount",
    "width",
    "borderStyle",
    "smoothResize",
    "toggleTextOnClick",
  ],
  data: function () {
    return {
      size: [],
      loaded: [],
      hideText: [],
    };
  },
  methods: {
    updateSizes() {
      this.size = [];
      for (const index in this.images) {
        const { width, height } = this.images[index];
        const actualHeight = (this.width / this.amount / width) * height;
        this.size.push(actualHeight + "px");
      }
    },
    click(image) {
      this.$emit("click", image);
      if (this.toggleTextOnClick && image.text) {
        this.toggleText(image);
      }
    },
    toggleText(image) {
      const index = this.images.indexOf(image);
      this.$set(this.hideText, index, !this.hideText[index]);
    },
    loadImage(image) {
      const index = this.images.indexOf(image);
      this.$set(this.loaded, index, true);
      event.target.classList.add("loaded");
      this.$emit("imageLoad", event);
    },
    getBackground(image) {
      return `background-image: url('${image.thumbnail}');`;
    },
  },
  watch: {
    images() {
      this.updateSizes();
    },
    width() {
      this.updateSizes();
    },
  },
  mounted() {
    this.updateSizes();
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
img {
  background-size: cover;
  background-position: center;
  background-color: #363636;
  max-width: 100vw;
  filter: blur(15px);
  transition: 0.8s filter linear;
}
img.loaded {
  filter: blur(0px);
  animation-name: none;
}
.vue-gallery-image-wrapper {
  display: block;
  align-self: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.vue-gallery-row {
  width: 100%;
  align-content: center;
}
.vue-gallery-image {
  height: 100%;
  width: 100%;
}
.vue-gallery-smooth-resize {
  transition: width 0.3s linear, height 0.3s linear;
}
.vue-gallery-text {
  transition: bottom 0.3s;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  bottom: 0;
  max-height: calc(100% - 1rem);
  overflow-y: scroll;
  width: calc(100% - 1rem);
  color: white;
  background: rgba(54, 54, 54, 0.8);
  padding: 0.5rem;
  word-wrap: break-word;
}
</style>
