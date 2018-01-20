import VueScrollIndicator from './components/VueScrollIndicator.vue'

const plugin = {
    install: Vue => {
        Vue.component('vue-scroll-indicator', VueScrollIndicator)
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin
export { VueScrollIndicator }
