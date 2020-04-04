import Vue from 'vue';
import GalleryTest from './GalleryDemo';

Vue.config.productionTip = false;

new Vue({
    render: h => h(GalleryTest),
}).$mount('#app');
