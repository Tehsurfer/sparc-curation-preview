# sparc.science curation preview
This repository is used as a preview for curated datasets yet to be published. 

Preview site can be viewed here:
https://sparc-publish-preview.herokuapp.com/

If you wish to add curations to preview the file can be found here:
[curation/previews.js](https://github.com/Tehsurfer/sparc-curation-preview/blob/curation-publish-preview/curation/previews.js)

Contact me and I will add you as a collaborator.


## How to make a curation

HOW TO USE:
Add/replace the listings below in the form
```javascript
//  {
//    datasetId: <discover id>,
//    type: <plot/scaffold/image/flatmap>,
//    title: <title to show in gallery>,
//    pennsieveId: <pennsieve identifier>
//    metadata: <metadata for plots>,
//    thumbnailId: <pennsieve id of thumbnail for image gallery>, ::optional::
//    additionalId: 'package:279cfa72-951b-407c-bde0-5de33317cf35' ::optional:: (only used for timeseries data)
//  }
```
Additional notes:

Pennsieve identifiers can be found by clicking on the file name in app.pennsieve.io


  ![image](https://user-images.githubusercontent.com/37255664/140044758-4e6c00e2-f64c-45b3-8b64-f8fc39956b88.png)
  
Only plots are currently supported


## How to run locally
1. clone this repo and `yarn install` `yarn dev`
2. clone https://github.com/Tehsurfer/BlackfynnToScaffold and run on port `6768`
3. Check you have env variables for `PENNSIEVE_API_SECRET` and `PENNSIEVE_API_TOKEN` that have access to sparc-curation data (DM me if needed)
4. Run any recent sparc-api on port 8000

And you should be good to go!

Refer here for finding curations:
[curation/previews.js](https://github.com/Tehsurfer/sparc-curation-preview/blob/curation-publish-preview/curation/previews.js)
