import { libsRegistry } from '@zeainc/zea-engine'

import pkg from '../../package.json'
if (libsRegistry) {
  libsRegistry.registerLib(pkg)
} else {
  console.warn(
    "The version of the Zea Engine that you're using doesn't support the libraries registry. Please upgrade to the latest Zea Engine version."
  )
}

export * from './GLPointCloudPass'
export * from './PointCloudAsset'
