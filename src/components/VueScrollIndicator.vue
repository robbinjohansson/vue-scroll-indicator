<template>
    <div class="v-scroll--indicator-wrapper" :style="{ height: height, background: bgColor }">
        <div class="v-scroll--indicator" :style="{ background: indicatorColor, width: indicatorWidth }"></div>
    </div>
</template>

<style lang="sass" scoped>
    .v-scroll--indicator-wrapper
        width: 100%
        position: fixed
        top: 0
        left: 0
        right: 0
        z-index: 9999
        .v-scroll--indicator
            width: 0%
            height: 100%
</style>

<script>
export default {
    name: 'vue-scroll-indicator',

    props: {
        height: {
            type: String,
            default: '5px',
            required: false
        },
        bgColor: {
            type: String,
            default: '#eaeaea',
            required: false
        },
        indicatorColor: {
            type: String,
            default: 'linear-gradient(to right, #ec008c, #fc6767)',
            required: false
        }
    },

    mounted() {
        this.scrollHandler()
    },

    created(){
        window.addEventListener('scroll', this.scrollHandler)
    },

    data() {
        return {
            winScroll: '',
            docHeight: '',
            indicatorWidth: '',
        }
    },

    methods: {
        scrollHandler(){
            this.winScroll = document.body.scrollTop || document.documentElement.scrollTop
            this.docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            this.indicatorWidth = (this.winScroll / this.docHeight) * 100+'%'
        }
    }
}
</script>
