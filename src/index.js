import VueScrollIndicator from './components/VueScrollIndicator.vue';

export default {
    install(Vue, options) {
        Vue.component('vue-scroll-indicator', VueScrollIndicator);
    },
};

export { VueScrollIndicator };

