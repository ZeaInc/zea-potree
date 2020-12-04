<a name="PointCloudAsset"></a>

### PointCloudAsset 
PointCloudAsset is an application of Tree Items with rendering and material capabilities.In this case, it is an specification that supports Point clouds Octree geometries.**Parameters***  **Num Points(`NumberParameter`):** Sets the number of points in the octree geometry* **Point Size(`NumberParameter`):** Sets the size of the individual points inside the geometry* **Point Size Attenuation(`NumberParameter`):****Events*** **loaded:** Triggered after the asset is loaded


**Extends**: <code>AssetItem</code>  

* [PointCloudAsset ⇐ <code>AssetItem</code>](#PointCloudAsset)
    * [new PointCloudAsset()](#new-PointCloudAsset)
    * [getGlobalMat4() ⇒ <code>Mat4</code>](#getGlobalMat4)
    * [setGeometry(pcoGeometry)](#setGeometry)
    * [getGeometry() ⇒ <code>PointCloudOctreeGeometry</code>](#getGeometry)
    * [loadPointCloud(path, name) ⇒ <code>Promise</code>](#loadPointCloud)

<a name="new_PointCloudAsset_new"></a>

### new PointCloudAsset
Creates an instance of PointCloudAsset.

<a name="PointCloudAsset+getGlobalMat4"></a>

### getGlobalMat4
The getGlobalMat4 method


**Returns**: <code>Mat4</code> - - The global Mat4  
<a name="PointCloudAsset+setGeometry"></a>

### setGeometry
Sets asset's Point Cloud Geometry data.



| Param | Type | Description |
| --- | --- | --- |
| pcoGeometry | <code>PointCloudOctreeGeometry</code> | The pcoGeometry value |

<a name="PointCloudAsset+getGeometry"></a>

### getGeometry
Returns asset's point cloud Octree geometry


**Returns**: <code>PointCloudOctreeGeometry</code> - - The pcoGeometry  
<a name="PointCloudAsset+loadPointCloud"></a>

### loadPointCloud
Loads a Point Cloud Octree Geometry from the specified url.


**Returns**: <code>Promise</code> - - The result  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The path value |
| name | <code>string</code> | The name value |

