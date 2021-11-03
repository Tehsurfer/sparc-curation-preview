//  :: previews.js ::

// Used for previewing curations to show PIs for publishing.

// HOW TO USE:
// Add/replace the listings below in the form
//  {
//    datasetId: <discover id>,
//    type: <plot/scaffold/image/flatmap>,
//    title: <title to show in gallery>,
//    pennsieveId: <pennsieve identifier>
//  }

// Notes for help:
//
// Pennsieve identifiers can be found by clicking on the file name in app.pennsieve.io
// Only plots are currently supported

export default [
  {
    datasetId: 141,
    type: 'plot',
    title: 'this-is-a-test',
    pennsieveId: 'package:615a5a08-f2f4-4621-a151-ba1271697aae'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'this-is-a-test-2',
    pennsieveId: 'package:615a5a08-f2f4-4621-a151-ba1271697aae'
  }
]