[![npm](https://img.shields.io/npm/v/vue-scroll-indicator.svg)](https://www.npmjs.com/package/vue-scroll-indicator)
[![npm](https://img.shields.io/npm/dt/vue-scroll-indicator.svg)](https://www.npmjs.com/package/vue-scroll-indicator)
[![npm](https://img.shields.io/npm/l/vue-scroll-indicator.svg)](https://www.npmjs.com/package/vue-scroll-indicator)

# Vue-scroll-indicator
Scroll indicator component using Vue.js.

[Live Demo](https://robbinfellow.github.io/vue-scroll-indicator/)

## Installation
```shell
$ yarn add vue-scroll-indicator --dev
# or ...
$ npm i vue-scroll-indicator --save-dev
```

#### Setup:

```javascript
// register the plugin
import Vue from 'vue'
import VueScrollIndicator from 'vue-scroll-indicator'

Vue.use(VueScrollIndicator)

// ... or register the component manually
import Vue from 'vue'
import { VueScrollIndicator } from 'vue-scroll-indicator'

Vue.component('vue-scroll-indicator', VueScrollIndicator)
```

## Usage

Display the component using default style:

```html
<vue-scroll-indicator></vue-scroll-indicator>
```

Display the component using custom style _(any valid use of css units will do)_:

```html
<vue-scroll-indicator
    height="7px"
    indicator-color="#11998e"
    bg-color="none"
>
</vue-scroll-indicator>
```

## Available properties

| Prop | Data Type | Required | Default | Description
| :--- | :--- | :--- | :--- | :--- |
| `height` | String | `false` | `5px` | Scroll indicator height
| `bg-color` | String | `false` | `#eaeaea` | Scroll indicator background-color
| `indicator-color` | String | `false` | `linear-gradient(to right, #ec008c, #fc6767)` | Scroll indicator color

## Author

Robbin Johansson \<robbinfellow@gmail.com>.

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/robbinfellow)

## License

Vue-scroll-indicator is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
