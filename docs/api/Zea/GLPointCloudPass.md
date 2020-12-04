<a name="GLPointCloudPass"></a>

### GLPointCloudPass 
GLPointCloudPass abstracts the rendering of cloud point geometries to the screen.

**Parameters**
**MinimumNodeVSize(`NumberParameter`)**
**VisiblePointsTarget(`NumberParameter`)**

**Events**
* *updated:* Triggers every time one of the Point Cloud Asset changes.


**Extends**: <code>GLPass</code>  

* [GLPointCloudPass ⇐ <code>GLPass</code>](#GLPointCloudPass)
    * [new GLPointCloudPass()](#new-GLPointCloudPass)
    * [init(renderer, passIndex)](#init)
    * [itemAddedToScene(treeItem, rargs) ⇒ <code>Boolean</code>](#itemAddedToScene)
    * [itemRemovedFromScene(treeItem, rargs) ⇒ <code>Boolean</code>](#itemRemovedFromScene)
    * [addPotreeasset(pointcloudAsset)](#addPotreeasset)
    * [setViewport(viewport)](#setViewport)
    * [updateVisibilityStructures(priorityQueue) ⇒ <code>array</code>](#updateVisibilityStructures)
    * [updateVisibility()](#updateVisibility)
    * [computeVisibilityTextureData(nodes) ⇒ <code>Map</code>](#computeVisibilityTextureData)
    * [draw(renderstate)](#draw)
    * [drawHighlightedGeoms(renderstate)](#drawHighlightedGeoms)
    * [drawGeomData(renderstate)](#drawGeomData)
    * [getGeomItemAndDist(geomData)](#getGeomItemAndDist)

<a name="new_GLPointCloudPass_new"></a>

### new GLPointCloudPass
Creates an instance of GLPointCloudPass.

<a name="GLPointCloudPass+init"></a>

### init
Initializes the rendering of the point cloud geometries hosted.



| Param | Type | Description |
| --- | --- | --- |
| renderer | <code>GLRenderer</code> | The renderer param. |
| passIndex | <code>number</code> | The passIndex param. |

<a name="GLPointCloudPass+itemAddedToScene"></a>

### itemAddedToScene
The itemAddedToScene method is called on each pass when a new item
is added to the scene, and the renderer must decide how to render it.
It allows Passes to select geometries to handle the drawing of.


**Returns**: <code>Boolean</code> - - The return value.  

| Param | Type | Description |
| --- | --- | --- |
| treeItem | <code>TreeItem</code> | The treeItem value. |
| rargs | <code>object</code> | Extra return values are passed back in this object. The object contains a parameter 'continueInSubTree', which can be set to false, so the subtree of this node will not be traversed after this node is handled. |

<a name="GLPointCloudPass+itemRemovedFromScene"></a>

### itemRemovedFromScene
The itemRemovedFromScene method is called on each pass when aa item
is removed to the scene, and the pass must handle cleaning up any resources.


**Returns**: <code>Boolean</code> - - The return value.  

| Param | Type | Description |
| --- | --- | --- |
| treeItem | <code>TreeItem</code> | The treeItem value. |
| rargs | <code>object</code> | Extra return values are passed back in this object. |

<a name="GLPointCloudPass+addPotreeasset"></a>

### addPotreeasset
Adds a new point cloud asset the the list of assets rendered by this abstraction.



| Param | Type | Description |
| --- | --- | --- |
| pointcloudAsset | <code>[PointCloudAsset](api/Zea\PointCloudAsset.md)</code> | The pointcloudAsset value |

<a name="GLPointCloudPass+setViewport"></a>

### setViewport
Sets viewport that is used by current abstraction.



| Param | Type | Description |
| --- | --- | --- |
| viewport | <code>GLViewport</code> | The viewport value |

<a name="GLPointCloudPass+updateVisibilityStructures"></a>

### updateVisibilityStructures
The updateVisibilityStructures method


**Returns**: <code>array</code> - - The result  

| Param | Type | Description |
| --- | --- | --- |
| priorityQueue | <code>array</code> | The priorityQueue value |

<a name="GLPointCloudPass+updateVisibility"></a>

### updateVisibility
The updateVisibility method


<a name="GLPointCloudPass+computeVisibilityTextureData"></a>

### computeVisibilityTextureData
The computeVisibilityTextureData method


**Returns**: <code>Map</code> - - The result  

| Param | Type | Description |
| --- | --- | --- |
| nodes | <code>array</code> | the nodes value |

<a name="GLPointCloudPass+draw"></a>

### draw
The draw method.



| Param | Type | Description |
| --- | --- | --- |
| renderstate | <code>object</code> | The renderstate param. |

<a name="GLPointCloudPass+drawHighlightedGeoms"></a>

### drawHighlightedGeoms
The drawHighlightedGeoms method.



| Param | Type | Description |
| --- | --- | --- |
| renderstate | <code>object</code> | The renderstate param. |

<a name="GLPointCloudPass+drawGeomData"></a>

### drawGeomData
The drawGeomData method.



| Param | Type | Description |
| --- | --- | --- |
| renderstate | <code>object</code> | The renderstate param. |

<a name="GLPointCloudPass+getGeomItemAndDist"></a>

### getGeomItemAndDist
The getGeomItemAndDist method.



| Param | Type | Description |
| --- | --- | --- |
| geomData | <code>array</code> | The geomData param. |

