[![Latest Version on NPM](https://img.shields.io/npm/v/vue-scroll-indicator.svg?style=flat-square)](https://npmjs.com/package/vue-scroll-indicator)
[![Total Downloads on NPM](https://img.shields.io/npm/dt/vue-scroll-indicator.svg)](https://www.npmjs.com/package/vue-scroll-indicator)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

# Vue-scroll-indicator
Scroll indicator component using Vue.js.

## Demo

[Link](https://robbinworks.github.io/vue-scroll-indicator/)

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

``` vue
<vue-scroll-indicator></vue-scroll-indicator>
```

Display the component using custom style:

``` vue
<vue-scroll-indicator
    height="7px"
    color="#11998e"
    background="none"
>
</vue-scroll-indicator>
```

## Available properties

| Prop | Data Type | Required | Default | Description
| :--- | :--- | :--- | :--- | :--- |
| `height` | String | `false` | `5px` | Scroll indicator height
| `color` | String | `false` | `linear-gradient(to right, #ec008c, #fc6767)` | Scroll indicator color
| `background` | String | `false` | `#eaeaea` | Scroll indicator background-color

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

* [Robbin Johansson](https://github.com/robbinworks)
* [spatie/skeleton-vue](https://github.com/spatie/skeleton-vue)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
