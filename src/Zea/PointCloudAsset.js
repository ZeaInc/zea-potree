import { Box3, NumberParameter, AssetItem, Registry } from '@zeainc/zea-engine'
import { POCLoader } from '../loader/POCLoader'

// Note: replaces PointCloudOctree.
//
/**
 * PointCloudAsset is an application of Tree Items with rendering and material capabilities.
 * In this case, it is an specification that supports Point clouds Octree geometries.
 *
 * **Parameters**
 * *  **Num Points(`NumberParameter`):** Sets the number of points in the octree geometry
 * * **Point Size(`NumberParameter`):** Sets the size of the individual points inside the geometry
 * * **Point Size Attenuation(`NumberParameter`):**
 *
 * **Events**
 * * **loaded:** Triggered after the asset is loaded
 *
 * @extends {AssetItem}
 */
class PointCloudAsset extends AssetItem {
  /**
   * Creates an instance of PointCloudAsset.
   */
  constructor() {
    super()

    this.numPointsParam = new NumberParameter('Num Points', 0)
    this.pointSizeParam = new NumberParameter('Point Size', 1)
    this.pointSizeAttenuationParam = new NumberParameter('Point Size Attenuation', 1.0)

    this.pointBudget = 5 * 1000 * 100
    this.minimumNodeVSize = 0.2 // Size, not in pixels, but a fraction of screen V height.
    this.level = 0
    this.visibleNodes = []

    this.loaded = false

    // this.addParameter(new NumberParameter('Version', 0))
    this.addParameter(this.numPointsParam)
    this.addParameter(this.pointSizeParam)
    this.addParameter(this.pointSizeAttenuationParam)
  }

  /**
   * The getGlobalMat4 method
   *
   * @return {Mat4} - The global Mat4
   */
  getGlobalMat4() {
    return this.globalXfoParam.value.toMat4()
  }

  /**
   * The cleanBoundingBox method
   *
   * @param {Box3} bbox -
   * @return {Box3} - The cleaned bounding box
   * @private
   */
  cleanBoundingBox(bbox) {
    bbox = super.cleanBoundingBox(bbox)
    const mat4 = this.getGlobalMat4()
    const geomBox = new Box3()
    const { min, max } = this.pcoGeometry.tightBoundingBox
    geomBox.min.set(min.x, min.y, min.z)
    geomBox.max.set(max.x, max.y, max.z)
    bbox.addBox3(geomBox, mat4)
    return bbox
  }

  /**
   * Sets asset's Point Cloud Geometry data.
   *
   * @param {PointCloudOctreeGeometry} pcoGeometry - The pcoGeometry value
   */
  setGeometry(pcoGeometry) {
    this.pcoGeometry = pcoGeometry

    const xfo = this.globalXfoParam.value
    xfo.tr = this.pcoGeometry.offset
    this.globalXfoParam.value = xfo

    // this.getParameter('Version').setValue(parseFloat(pcoGeometry.version));
    if (pcoGeometry.numPoints) this.numPointsParam.value = pcoGeometry.numPoints

    // this._setBoundingBoxDirty()

    this.loaded = false
    this.emit('loaded')

    // if (this.viewport)
    //   this.updateVisibility();
  }

  /**
   * Returns asset's point cloud Octree geometry
   *
   * @return {PointCloudOctreeGeometry} - The pcoGeometry
   */
  getGeometry() {
    return this.pcoGeometry
  }

  /**
   * Loads a Point Cloud Octree Geometry from the specified url.
   *
   * @param {string} path - The path value
   * @param {string} name - The name value
   * @return {Promise} - The result
   */
  load(path) {
    return new Promise((resolve, reject) => {
      POCLoader.load(path, (geometry) => {
        if (!geometry) {
          reject(`failed to load point cloud from URL: ${path}`)
        } else {
          this.setGeometry(geometry)
          resolve(geometry)
        }
      })
    })
  }

  loadPointCloud(path, name) {
    return this.load(path)
  }
}

Registry.register('PointCloudAsset', PointCloudAsset)

export default PointCloudAsset
export { PointCloudAsset }
