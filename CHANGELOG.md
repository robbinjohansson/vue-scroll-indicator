# Changelog

All notable changes to `vue-scroll-indicator` will be documented in this file.

## [0.1.3] - 2019-02-01

### Fixed
- Upgrade `webpack-dev-server` to `^3.1.14` due to security vulnerability in `<3.1.11` (https://nvd.nist.gov/vuln/detail/CVE-2018-14732). As a result the following packages had to be updated: `vue-loader@^14.2.2`, `webpack@^4.29.0`. Also added `webpack-cli` as a dev dependency.

## [0.1.2] - 2019-01-31

### Added
- Add component name.

### Changed
- Moved repo to [robbinworks/vue-scroll-indicator/](https://github.com/robbinworks/vue-scroll-indicator).
- Moved demo to [robbinworks.github.io/vue-scroll-indicator/](https://robbinworks.github.io/vue-scroll-indicator/).

## [0.1.1] - 2018-04-09

### Changed
- Replace mounted `scrollHandler()` in favor of `EventListener('load')`.

### Fixed
- Rename data `document` > `docHeight`.

## [0.1.0] - 2018-03-19

### Changed
- Refactor code/plugin using [spatie/skeleton-vue](https://github.com/spatie/skeleton-vue).
- Rename prop `indicator-color` > `color`.
- Rename prop `bg-color` > `background`.

### Fixed
- Add `destroyed()` lifecycle hook (`window.removeEventListener`).
