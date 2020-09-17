# Load a point cloud


```javascript
// const socket = io('http://localhost');
const domElement = document.getElementById("viewport");

const scene = new Scene();
scene.setupGrid(10.0, 10);

const renderer = new GLRenderer( domElement, {
  webglOptions: {
    antialias: true
  },
});

renderer.setScene(scene);
renderer.resumeDrawing();

////////////////////////////////////
// Point Cloud renderer
const pointcloudPass = new GLPointCloudPass();
renderer.addPass(pointcloudPass, PassType.OPAQUE);

const pointcloudAsset = new PointCloudAsset();
const pointClouudUrl = "https://storage.googleapis.com/visualive-tmp/CNA/Old_Aguathuna_Ship_Loading_Area-Medium_Density_Cloud2/cloud.js"
pointcloudAsset.loadPointCloud(pointClouudUrl, "PointCloud").then(e => {
  renderer.frameAll()
});
scene.getRoot().addChild(pointcloudAsset);
```

> See the live example

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/zea-load-a-point-cloud?path=index.html&previewSize=100"
    title="zea-load-a-point-cloud on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>
