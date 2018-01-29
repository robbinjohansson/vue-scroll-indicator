import VueScrollIndicator from './components/VueScrollIndicator.vue';

export default {
    install(Vue) {
        Vue.component('vue-scroll-indicator', VueScrollIndicator);
    },
};

export { VueScrollIndicator };
