# Zea PointClouds

[![NPM Package][npm]][npm-url]
[![Build Size][build-size]][build-size-url]
[![NPM Downloads][npm-downloads]][npmtrends-url]

# Introduction
Zea Point Clouds is a plug-in for [Zea Engine](https://docs.zea.live/zea-engine) that enables large point clouds rendering. It is based on [Potree](https://github.com/potree/potree/) with modifications to integrate into the [Zea Engine](https://docs.zea.live/zea-engine) Framework.
</br>
</br>
</br>

# Documentation
Full documentation with concepts, tutorials, live examples, API documentation and more; can be found at the zea ux docs site:
[https://docs.zea.live/zea-potree/](https://docs.zea.live/zea-potree/)

These docs allow developers to get started with the Zea UX by downloading free and open-source demo content and using Zea's publicly distributed client-side libraries.
</br>
</br>
</br>

# Licensing
The Zea Potree in is under a [`MIT`](https://en.wikipedia.org/wiki/MIT_License) license.
</br>
</br>
</br>

# Add it to your project
The process to add Zea Potree to your projects is easy. 

## *Using CDNs*
For static websites or quick implementation you can always use CDNs like JsDelivr or Unpkg:

### *JsDelivr*
```html
<script crossorigin src="https://cdn.jsdelivr.net/npm/@zeainc/zea-potree/dist/index.umd.min.js"></script>
```
### *Unpkg*
```html
<script crossorigin src="https://unpkg.com/@zeainc/zea-potree/dist/index.umd.js"></script>
```
### *Use it*
```html
<script>
  const { PointCloudAsset } = globalThis.zeapointclouds
</script>
```

</br>
</br>
</br>

# Dependencies
This plug-in depends on [ZeaEngine](https://docs.zea.live/zea-engine) and [ZeaUX](https://docs.zea.live/zea-ux). So, if you're using CDNs, make sure to import these two libraries before pointclouds.
</br>


> For questions on licensing, please fill out the contact form on our website: [_zea.live_](https://www.zea.live/contact-us)

[npm]: https://badge.fury.io/js/%40zeainc%2Fzea-pointclouds.svg
[npm-url]: https://www.npmjs.com/package/@zeainc/zea-pointclouds
[build-size]: https://badgen.net/bundlephobia/minzip/@zeainc/zea-pointclouds
[build-size-url]: https://bundlephobia.com/result?p=@zeainc/zea-pointclouds
[npm-downloads]: https://img.shields.io/npm/dw/@zeainc/zea-pointclouds
[npmtrends-url]: https://www.npmtrends.com/@zeainc/zea-pointclouds
