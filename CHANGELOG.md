# Changelog

All notable changes to `vue-scroll-indicator` will be documented in this file.

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
