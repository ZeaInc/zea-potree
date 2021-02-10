# Process a point cloud

Pointclouds made up of millions of points take up significant space on disc and are difficult to share with other users. The PotreeConverter breaks huge point clouds into thousands of small parts which are then streamed into the browser allowing users to instantly access those huge clouds without needing to download the whole cloud.

> Note: 

## Download the PotreeConverter

The Potree Point Clouds plugin for Zea is based on version 1.6 of Potree. You will need to download this version of the converter to process a file compatible with the Zea Engine point clouds plugin. 

[PotreeConverter 1.6](https://github.com/potree/PotreeConverter/releases/tag/1.6)

## Run the PotreeConverter on your data

Run the converter to generate the output folder containing all the small files.

```bash
PotreeConverter.exe "MyPointCloud.las" -o "./MyPointCloud-out"
```

Within that folder, you will see a few files 

> cloud.js <br>
> sources.json

The Zea Potree plugin is provided the URL to 'cloud.js' file when loading the point cloud. 

## Cloud Processing

Zea has setup Docker images for processing point clouds using the PotreeConverter. If you are interested in setting up your own Docker images, please feel free to reach out to info@zea.live

