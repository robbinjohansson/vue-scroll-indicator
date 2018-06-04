<template>
    <div class="v-scroll--indicator-wrapper" :style="{ height: height, background: background }">
        <div class="v-scroll--indicator" :style="{ background: color, width: width }"></div>
    </div>
</template>

<style scoped>
    .v-scroll--indicator-wrapper {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
    }
    .v-scroll--indicator {
        width: 0;
        height: 100%;
    }
</style>

<script>
export default {
    name: 'vue-scroll-indicator',

    props: {
        height: {
            type: String,
            default: '5px',
            required: false,
        },
        color: {
            type: String,
            default: 'linear-gradient(to right, #ec008c, #fc6767)',
            required: false,
        },
        background: {
            type: String,
            default: '#eaeaea',
            required: false,
        },
    },

    data() {
        return {
            scrolled: '',
            docHeight: '',
            width: '',
        };
    },

    created() {
        window.addEventListener('load', this.scrollHandler);
        window.addEventListener('scroll', this.scrollHandler);
    },

    destroyed() {
        window.removeEventListener('load', this.scrollHandler);
        window.removeEventListener('scroll', this.scrollHandler);
    },

    methods: {
        scrollHandler() {
            this.scrolled = document.body.scrollTop || document.documentElement.scrollTop;
            this.docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.width = (this.scrolled / this.docHeight) * 100 + '%';
        },
    },
};
</script>
