import { VueScrollIndicator } from '../src';
import Vue from 'vue/dist/vue.js';

describe('VueScrollIndicator', () => {
    Vue.component('vue-scroll-indicator', VueScrollIndicator);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <vue-scroll-indicator></vue-scroll-indicator>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
