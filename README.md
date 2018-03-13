[![npm](https://img.shields.io/npm/v/vue-scroll-indicator.svg)](https://www.npmjs.com/package/vue-scroll-indicator)
[![npm](https://img.shields.io/npm/dt/vue-scroll-indicator.svg)](https://www.npmjs.com/package/vue-scroll-indicator)
[![npm](https://img.shields.io/npm/l/vue-scroll-indicator.svg)](https://www.npmjs.com/package/vue-scroll-indicator)

# Vue-scroll-indicator
Scroll indicator component using Vue.js.

## Installation
```shell
$ yarn add vue-scroll-indicator --dev
# or ...
$ npm i vue-scroll-indicator --save-dev
```

Register the component:

```javascript
import Vue from 'vue';
import { VueScrollIndicator } from 'vue-scroll-indicator';

Vue.component('vue-scroll-indicator', VueScrollIndicator);
```

Alternatively using `Vue.use()` to register the component:

```javascript
import VueScrollIndicator from 'vue-scroll-indicator';

Vue.use(VueScrollIndicator);
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

## Credits

* [Robbin Johansson](https://github.com/robbinfellow)

## License

Vue-scroll-indicator is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
