<template>
    <div style="width: 100%;">
        <label for="range">Images per Row: </label><input id="range" type="range" min="1" max="10" v-model="perRow">
        <Gallery :images="images" :per-row="perRow" :options="options"></Gallery>
    </div>
</template>
<style scoped>

</style>
<script>
    import Gallery from "../Gallery";

    export default {
        components: {Gallery},
        data: function(){
            return {
                perRow: 3,
                options: {
                    border: 'solid thin white'
                },
                images: [
                    { height: 4160,
                        width: 3120,
                        src:
                            'https://florianwenzel.github.io/stock_images/low-angle-shot-of-a-building-of-ancient-architecture-3097592.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/low-angle-shot-of-a-building-of-ancient-architecture-3097592.jpg' },
                    { height: 2000,
                    width: 3000,
                    src: 'https://florianwenzel.github.io/stock_images/white-concrete-houses-1531660.jpg',
                    thumbnail: 'https://florianwenzel.github.io/stock_images/thumbnails/white-concrete-houses-1531660.jpg' },
                    { height: 3078,
                        width: 2462,
                        src:
                            'https://florianwenzel.github.io/stock_images/green-leafed-tree-in-a-park-surrounded-by-water-2456439.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/green-leafed-tree-in-a-park-surrounded-by-water-2456439.jpg' },
                    { height: 2259,
                        width: 3872,
                        src: 'https://florianwenzel.github.io/stock_images/scenic-view-of-mountains-320555.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/scenic-view-of-mountains-320555.jpg' },
                    { height: 2832,
                        width: 4256,
                        src: 'https://florianwenzel.github.io/stock_images/two-monks-walking-between-trees-750895.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/two-monks-walking-between-trees-750895.jpg' },
                    { height: 3000,
                        width: 4342,
                        src: 'https://florianwenzel.github.io/stock_images/landscape-photography-of-montain-3027138.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/landscape-photography-of-montain-3027138.jpg' },
                    { height: 4897,
                        width: 3264,
                        src:
                            'https://florianwenzel.github.io/stock_images/close-up-photography-of-gray-bridge-2543253.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/close-up-photography-of-gray-bridge-2543253.jpg' },
                    { height: 3448,
                        width: 4592,
                        src: 'https://florianwenzel.github.io/stock_images/tilicho-lake-nepal-674865.jpg',
                        thumbnail: 'https://florianwenzel.github.io/stock_images/thumbnails/tilicho-lake-nepal-674865.jpg' },
                    { height: 3376,
                        width: 5062,
                        src: 'https://florianwenzel.github.io/stock_images/houses-near-hill-3352873.jpg',
                        thumbnail: 'https://florianwenzel.github.io/stock_images/thumbnails/houses-near-hill-3352873.jpg' },
                    { height: 5320,
                        width: 3547,
                        src: 'https://florianwenzel.github.io/stock_images/low-angle-shot-of-the-temple-732895.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/low-angle-shot-of-the-temple-732895.jpg' },
                    { height: 3648,
                        width: 5472,
                        src:
                            'https://florianwenzel.github.io/stock_images/aerial-photography-of-brown-mountain-ranges-and-lake-1449601.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/aerial-photography-of-brown-mountain-ranges-and-lake-1449601.jpg' },
                    { height: 5774,
                        width: 3537,
                        src: 'https://florianwenzel.github.io/stock_images/photo-of-ancient-building-3287165.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/photo-of-ancient-building-3287165.jpg' },
                    { height: 4000,
                        width: 5600,
                        src:
                            'https://florianwenzel.github.io/stock_images/woman-wearing-yellow-and-red-traditional-dress-dancing-near-1274922.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/woman-wearing-yellow-and-red-traditional-dress-dancing-near-1274922.jpg' },
                    { height: 6000,
                        width: 4000,
                        src: 'https://florianwenzel.github.io/stock_images/black-donkey-on-a-road-2409958.jpg',
                        thumbnail: 'https://florianwenzel.github.io/stock_images/thumbnails/black-donkey-on-a-road-2409958.jpg' },
                    { height: 6000,
                        width: 4000,
                        src:
                            'https://florianwenzel.github.io/stock_images/group-of-people-walking-beside-concrete-building-2102064.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/group-of-people-walking-beside-concrete-building-2102064.jpg' },
                    { height: 4000,
                        width: 6000,
                        src: 'https://florianwenzel.github.io/stock_images/red-and-brown-temple-roofs-2104882.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/red-and-brown-temple-roofs-2104882.jpg' },
                    { height: 4000,
                        width: 6000,
                        src: 'https://florianwenzel.github.io/stock_images/people-standing-near-building-2177708.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/people-standing-near-building-2177708.jpg' },
                    { height: 4000,
                        width: 6000,
                        src: 'https://florianwenzel.github.io/stock_images/white-horses-2856273.jpg',
                        thumbnail: 'https://florianwenzel.github.io/stock_images/thumbnails/white-horses-2856273.jpg' },
                    { height: 4000,
                        width: 6000,
                        src:
                            'https://florianwenzel.github.io/stock_images/snow-capped-mountain-during-golden-hour-3142916.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/snow-capped-mountain-during-golden-hour-3142916.jpg' },
                    { height: 4084,
                        width: 8192,
                        src: 'https://florianwenzel.github.io/stock_images/photo-of-mountains-under-clouds-2902939.jpg',
                        thumbnail:
                            'https://florianwenzel.github.io/stock_images/thumbnails/photo-of-mountains-under-clouds-2902939.jpg' } ]
            }
        }
    }
</script>