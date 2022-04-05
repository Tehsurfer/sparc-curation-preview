//  :: previews.js ::

// Used for previewing curations to show PIs for publishing.

// HOW TO USE:
// Add/replace the listings below in the form
//  {
//    datasetId: <discover id>,
//    type: <plot/scaffold/image/flatmap>,
//    title: <title to show in gallery>,
//    pennsieveId: <pennsieve identifier>
//    metadata: <metadata for plots>,
//    thumbnailId: <pennsieve id of thumbnail for image gallery>, ::optional::
//    additionalId: 'package:279cfa72-951b-407c-bde0-5de33317cf35' ::optional:: (only used for timeseries data)
//  }

// Notes for help:
//
// Pennsieve identifiers can be found by clicking on the file name in app.pennsieve.io
// Only plots are currently supported

export default [
  {
    datasetId: 141,
    type: 'plot',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "no-header": true}},
    title: 'subject1',
    pennsieveId: 'package:615a5a08-f2f4-4621-a151-ba1271697aae',
    additionalId: 'package:b092a8c0-c684-4bb6-8383-f9de478473e8'
  },
  {
    datasetId: 141,
    type: 'plot',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "no-header": true}},
    title: 'subject2',
    pennsieveId: 'package:6f89589e-11c9-41fb-ba35-ba4f836a4453',
    additionalId: 'package:743478cd-4be5-485a-82ad-5f7f1bd13c99'
  },
  {
    datasetId: 141,
    type: 'plot',
    title: 'subject3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "no-header": true}},
    layout: {margin: {t: 300, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:ea813c23-e110-46ba-815f-d134b955a8b5',
    additionalId: 'package:79ff8e5d-7ca4-45a6-93a9-7f81027c9b1e'
  },
  {
    datasetId: 141,
    type: 'plot',
    title: 'RAGP_4subs_negddct_matrix',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:f3316fd4-6dcb-45d4-9b45-b4c3f8b8331d',
    thumbnailId: 'package:c97775a9-d616-4a42-ac93-3dec503bb5c5'
  },
  {
    datasetId: 141,
    type: 'plot',
    title: 'RAGP_4subs_raw_Ct',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:ac7c976a-459a-4d32-ae43-09cd89340480',
    thumbnailId: 'package:6ab78c2e-f66f-44bb-9d32-70070ce604c5'
  },
  {
    datasetId: 29,
    type: 'plot',
    title: 'HB-ICN-NegDDCT',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true, "layout": {"margin": {"t": 55, "l": 200, "r": 55, "b": 200, "pad": 4}}}},
    pennsieveId: 'package:975df3ca-ff23-4c50-829b-b28eba4f423a',
    thumbnailId: 'package:cbfda02a-e982-40fb-b7cb-8bb5c70e24d6'
  },
  {
    datasetId: 118,
    type: 'plot',
    title: 'PR1705_Negddct',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:5febabcf-6e49-4d6c-9163-d6e04fc811f8',
    thumbnailId: 'package:314ad290-4aeb-4639-b307-63b1174238e7'
  },
  {
    datasetId: 139,
    type: 'plot',
    title: 'Average per strain',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true,}},
    pennsieveId: 'package:b220ef4d-deba-4541-a707-315340c6eb46',
    thumbnailId: 'package:d977ef0a-8c06-48ce-a153-badf9d546c93'
  },
  {
    datasetId: 139,
    type: 'plot',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    title: 'Differential expression WistarVsSHR',
    pennsieveId: 'package:bfd00749-f476-4859-868a-672275745f14',
    thumbnailId: 'package:82c05031-c3f5-4d10-8df8-80be0d96443f'
  },
  {
    datasetId: 117,
    type: 'plot',
    title: 'PR1643_Negddct',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:4b82a35a-7914-4080-85fa-f15fb6f984c0',
    thumbnailId: 'package:fa18cdb2-a910-49f1-9df9-63618153349b'
  },
  {
    datasetId: 117,
    type: 'plot',
    title: 'PR1643 normalised gene counts',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:3730b83a-42d4-44b9-b90e-6f6fefa5b29b',
    thumbnailId: 'package:e9f62128-785c-4615-a09b-a64da2c890b7'
  },
  {
    datasetId: 116,
    type: 'plot',
    title: 'PR1643-142 Samples Raw Gene Counts',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true, "layout": {"margin": {"t": 55, "l": 200, "r": 55, "b": 200, "pad": 4}}}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:7b1a5fe7-c8de-4c29-8c69-69b8186ccffe',
    thumbnailId: 'package:92bb7cd2-f9f8-4979-9332-c825fdf58972'
  },
  {
    datasetId: 116,
    type: 'plot',
    title: 'PR1643 Normalised Gene Counts',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true, "layout": {"margin": {"t": 55, "l": 200, "r": 55, "b": 200, "pad": 4}}}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:f13a41ae-edd7-408c-89f5-477a23be9591',
    thumbnailId: 'package:9f5eb94e-4ddd-48fc-8771-a00d7de04c0d'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'RAGP_4subs_negddct_matrix',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:ebb762ff-7c4a-41ac-ad45-c8044e499832',
    thumbnailId: 'package:c97775a9-d616-4a42-ac93-3dec503bb5c5'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'RAGP_4subs_raw_Ct',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:a6c01a56-30f0-4156-b4d1-758bc8e3f7b1',
    thumbnailId: 'package:a9ac5be0-1db8-4552-8172-745d9b42a09b'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'RNAseq_PR1643 Normalised Gene Counts',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:5e2789e7-746c-4b38-abd1-f979dedc33ff',
    thumbnailId: 'package:6b5e7237-d27b-41d0-8c23-f1cca7e5f3ae'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'Genes 60% Expression Across All RAGP',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:8b9aa0e6-d79d-48fe-913b-fdbf08dcda88',
    thumbnailId: 'package:019e165b-da95-427d-9241-d336af71054c'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'Neuronally Enriched GTEx Genes in our Data',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:30617cbc-f321-4d4c-ad01-d0dc014b7b14',
    thumbnailId: 'package:c6222010-efdd-4cc4-a936-0e9525e75f5a'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig-820 Nodose-002 Blood gases',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "y-axes-columns": [1, 2, 3, 4, 5]}},
    pennsieveId: 'package:3a85cca5-9df8-46d8-9a85-3c3deb2524b8',
    thumbnailId: 'package:97059e93-7c8e-4823-b8fc-5546e1244805'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig-820 Nodose-002 Hemodynamics',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6]}},
    pennsieveId: 'package:64ca9585-91a7-405d-ac1a-5db641097085',
    thumbnailId: 'package:163556fb-0988-48b4-b5ac-6377e743fe02'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig013 ICNS15 Blood gases',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "y-axes-columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}},
    pennsieveId: 'package:225a8f4d-1e42-4f6b-9cfb-7c1c92adf55d',
    thumbnailId: 'package:f2807c57-7c2f-44f8-b1f4-a8b9a98e2856'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig013 ICNS15 Hemodynamics',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6]}},
    pennsieveId: 'package:ecd9693d-d6aa-43f6-9371-0c693aab445c',
    thumbnailId: 'package:30132148-93a7-4c91-8201-8daeccfe5c1a'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig47 Stellate Stim Metadata Physiology Hemodynamics',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "y-axes-columns": [3, 4, 5]}},
    pennsieveId: 'package:44f1433d-d60a-4dc7-8382-4399088f0fda',
    thumbnailId: 'package:bf300ea0-249c-49b4-922d-01fbb6e698cd'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'postInsert Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:df3b16ef-53fd-4995-be3c-0a8de20ff407',
    thumbnailId: 'package:7efb2cea-9dc5-4445-8b90-3b968c50dcda',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill9',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:e284767d-c873-4fe4-b0a6-4fdefb8ce5f3',
    thumbnailId: 'package:db2c9b97-c92b-4b09-88f9-054127ebd8f2',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill8',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:eaf1399c-8964-4969-847b-1b4fdc3e3344',
    thumbnailId: 'package:cbc7f8ab-15e4-4c3f-b8c7-519abfe64362',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill6',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:df646e8b-89f5-4504-bb00-c29563002733',
    thumbnailId: 'package:60e19c55-15ef-4538-9c66-476cdf5360bf',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:dbe2eb8a-a445-49e8-afe1-bab77cfb1fb8',
    thumbnailId: 'package:149fa0da-b3b6-4254-9294-f8005b43590f',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill4',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:2b64f387-6d83-4a76-89a5-574378bd309b',
    thumbnailId: 'package:326b6ddb-89f7-4e1d-88ff-200a3a76eade',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:3e6909ed-6a98-4983-b068-94d81348dc3b',
    thumbnailId: 'package:8b63faa9-ff98-458b-887d-37bbbf64aa86',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:3df8fd10-11c0-4975-bd0d-5e21fd90d0e8',
    thumbnailId: 'package:acb6c150-7418-4df2-92bf-b8f7d7ac2a00',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:08a6c8b8-bf23-4bbe-ba72-0cdc791fe632',
    thumbnailId: 'package:a4f24715-0e65-41a5-be7e-29b71005f727',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Side Position Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:7e4d80fd-4f4f-4d6c-a0ca-a75d6ffaa97e',
    thumbnailId: 'package:3303e95e-bb30-4248-bed4-d55caabc4499',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Side Position Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:ff8b8027-3d76-4cc3-a22d-691e4f4203cc',
    thumbnailId: 'package:7af18f5c-5194-4a6f-bb3e-0e8a048ad55d',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'postInsert Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:b32488c8-7e12-448d-b7e8-451234704452',
    thumbnailId: 'package:0cd3f8a9-97db-4199-a7cf-c2b23764b09c',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'preInsert',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:26f34b72-9d51-4437-834a-859956d4a5c2',
    thumbnailId: 'package:b2fea8d4-e160-48c4-afd4-fd3cec23f669',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Baseline Fill2 Acute Cat 1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:d53a87a0-1cac-42ff-8c4d-ef18639916bc',
    thumbnailId: 'package:a7961260-c6b2-4fa7-9347-44ee0e75da24',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Baseline Fill1 Acute Cat 1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:635814c0-1b57-414e-a43e-db2fd03477fe',
    thumbnailId: 'package:2a5d42a2-1325-4ceb-a480-4d1237675c42',
    additionalId: 'package:34b89474-6401-4a72-9f75-29c4a1bbacd1'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0519',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:86a5d649-aa62-4b85-ba86-3fb91f1e0536',
    thumbnailId: 'package:9cc42883-fed8-48ee-ad61-45f3ae1c46c9'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0520',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:d5ffdbbd-ea3f-4d99-b0d4-eb6d73024718',
    thumbnailId: 'package:ce60b66c-d2ea-4865-8dcb-6f21f1fac63c'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0521',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:e7c8ce5e-0ab8-4846-b735-9dd0c02f23fc',
    thumbnailId: 'package:8dc48f41-e8d7-4ca1-9fd1-6c5d64666ae0'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0309',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:feecada3-f260-457e-bdf1-b94b9d266993',
    thumbnailId: 'package:389565e4-0201-4f2f-a6fa-034ce284e073'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0515',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:2bca1135-9d0d-4363-b7d9-cab61e213fa4',
    thumbnailId: 'package:c3d07963-93de-422e-8835-ecedd7bd3b8c'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0518',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:283cca60-c68e-4b71-82e1-4bd4939ed081',
    thumbnailId: 'package:7f2bd123-c566-4be9-b686-1ea59825c2dc'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_1018',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:7ea44bac-a1fa-4b9e-bbf9-b5e2d8591cb8',
    thumbnailId: 'package:748795a5-06ea-482c-94cf-692c8e2d2ca2'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0303',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:a293394d-d999-4011-8154-ef0bcf342d77',
    thumbnailId: 'package:1e0c811f-6346-4ec7-aab9-d69821878abb'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0324',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:d2a06d39-5b72-4afe-a71b-a14d9a925ca9',
    thumbnailId: 'package:735cf422-3321-4393-8827-9a0d22264275'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_0829',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:7826fa03-bf6f-4023-9140-94f366ddb0ad',
    thumbnailId: 'package:8e2577e2-62a4-4a39-9142-7f2694e765e7'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_0917',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:757c7420-80c0-4896-b0e0-393e0740334a',
    thumbnailId: 'package:1a0a1fc1-a83a-41ea-966f-6679da79d861'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_1016',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:3b88c0d9-d1b4-424c-9f0d-d8a0a4b8b182',
    thumbnailId: 'package:9ecf4d51-fa52-4d2b-9dad-f697e4f387e8'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Abdomen Push Trial',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:d5379bd9-79cf-48d9-b320-9ed52c598ba0',
    thumbnailId: 'package:279cfa72-951b-407c-bde0-5de33317cf35',
    additionalId: 'package:c7ce85e3-1cde-4e21-927c-73bebce92807'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial7 Second Artificial Stool',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:57eb1228-312f-4fb7-8c43-4163ab1e16a3',
    thumbnailId: 'package:fe4060d4-62f8-4104-9001-a5c02b25f103',
    additionalId: 'package:f7f32446-adfe-4563-937e-2054a2a10da0'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial2 Stool Calibration',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:257c03ab-96dc-4de7-8415-6f8a92630202',
    thumbnailId: 'package:d14a21d2-67b6-464e-9b23-a20f4c2df0ef',
    additionalId: 'package:cb1644e3-0d2c-40b4-ac96-eab61161a3ae'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial3 Insertion',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:f139631b-c30d-4c66-901a-f12af8409242',
    thumbnailId: 'package:15386109-3cc2-4f39-af66-3620ca901ba3',
    additionalId: 'package:83e2fadc-61be-4d68-b8f2-26bdc1f68c15'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial4 Insertion',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:316836dc-c247-4663-b1de-544083649b78',
    thumbnailId: 'package:387d6c43-0d97-48fd-8fa1-c5a839fb1762',
    additionalId: 'package:da3e7234-d99a-4367-992b-90fe2ee2a6af'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial8 New Pressure Test',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:16186ca4-f9a5-437c-a2b7-483046f77488',
    thumbnailId: 'package:58abeb94-fc6a-4e9c-8f11-7be589e8e624',
    additionalId: 'package:6b4ad2be-fa98-4461-8845-373bf3528a61'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial5 Artificial Stool',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:bd1ff1e2-6176-43aa-be57-1e9f3a152629',
    thumbnailId: 'package:18dfa462-19ce-4b9b-aa7d-c53549af372d',
    additionalId: 'package:376b1f0e-21a3-4992-b66d-93a0e33acd16'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial6 Removal of First Artifical Stool',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:fbbc8f5c-9cbe-4d1f-b225-702620d14578',
    thumbnailId: 'package:b5f67b4a-00dd-4d01-86e8-f27f6f09ac6c',
    additionalId: 'package:5a8a1896-f34f-4c34-9e17-5e327ca4828f'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'posthoc Calibration',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:98745016-ff1d-4c47-81da-d3d1a8940ff3',
    thumbnailId: 'package:71e73f2c-d913-4f80-957a-09babb0f1aea',
    additionalId: 'package:199f2af7-e397-4b8d-bcf3-9b795ff8480e'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'posthoc ConducCalib',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:ffc0fd0c-76a6-4d92-b9f3-e68a50575a39',
    thumbnailId: 'package:9623f8a5-b953-461a-bcd7-c3c9b78f0951',
    additionalId: 'package:3bef884f-9f22-4d56-8656-45350e41d241'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Ian PressCalib2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:7d1ff231-a809-4207-97b4-508b9aec021e',
    thumbnailId: 'package:7ad982e9-3f52-4a62-a337-55b905466d01',
    additionalid: 'package:41f6b12a-a785-42ab-86f2-9d37494aaebd'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparotomy Pressure Trial',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:8c450dda-86e5-4628-8fd6-bed662dcaf4f',
    thumbnailId: 'package:9e4912bd-3c83-4dd6-b946-75ea5d532bc5',
    additionalId: 'package:f076f4f1-88d3-4c4a-80dd-1a31e7df3865'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparotomy pressure trial - Stool Movement',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:3735b5eb-fd8e-468e-a5f8-a8a0cadee038',
    thumbnailId: 'package:84c2481a-3246-46dd-971f-c5075d0f7f0c',
    additionalId: 'package:eec54a3a-e4d8-4ac1-ad3f-4fbc63ff3ab8'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparatomy pressure trial - Abdomen Closed',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:5af8bc1a-ec3e-46f3-a655-8c67c45254e0',
    thumbnailId: 'package:4a575c78-cbb5-4df3-9320-1b7f4d4294e7',
    additionalId: 'package:6e3fb674-15da-4353-a2a2-e76283fb0ab3'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparotomy pressure trial - Empty out stool HC Stool',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:99c5d69e-016a-4b1b-97c3-f97d8d0ee714',
    thumbnailId: 'package:5167b48e-aaf0-46af-8d7e-85f2fc1d8593',
    additionalId: 'package:335d45f5-5ff5-461d-9f1d-2999d5f00b04'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laprotomy pressure trial - Empty out stool 2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:a1e027a3-d208-454d-ae7e-ff3272c53e46',
    thumbnailId: 'package:93884695-20fe-42ed-8885-94e0f7f62793',
    additionalId: 'package:98f63a27-2552-4f0a-9870-41fbb30d8593'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Pre-insert Calibration',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:ea199df6-fc25-4570-b204-2f2803125c49',
    thumbnailId: 'package:1605999a-6aac-438c-93e3-c992cae7f04b',
    additionalId: 'package:6fc94af1-969e-4f54-ab63-2ae2fa73c69f'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Artificial Stool Volume',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:9561aa4c-55f8-4775-b4e5-a068f66658bc',
    thumbnailId: 'package:52bda9b4-1be5-40ab-afdd-d512976a0bc5',
    additionalId: 'package:e9b72eea-e80e-4fb5-86f6-41e2ef7a392d'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Balloon Insertion',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:42a25127-27e7-4314-9388-7f0325fed1cb',
    thumbnailId: 'package:f1dcbe17-1a6b-45df-b7b8-9c7f28dc607d',
    additionalId: 'package:15e0748e-1428-4fc7-84d3-31a413b9b8c7'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Put Artificial Stool Volume Inside Stool Over Sensor',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:f4e9193d-0bef-4877-adea-21dab30303bb',
    thumbnailId: 'package:551f2bac-37fd-4d5c-a34e-0e32f645d2a3',
    additionalId: 'package:8827f56c-9287-4106-853c-f921da3daf81'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Put Artificial Stool Volume Inside Stool Over Sensor Advancing',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:f4c935ca-f139-41d0-a0e3-239d2a6af679',
    thumbnailId: 'package:e8756972-813e-4143-9966-bd7fb9028856',
    additionalId: 'package:0f743239-94fa-4dc3-bc5a-34da49b5081a'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill1 9-02-50 AM',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:b5811ced-55fb-4c8c-9520-511d7ad09617',
    thumbnailId: 'package:c294fe78-42ac-452e-8a61-360993687aed'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill2 11-45-38 AM',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:945be1f0-31b2-4ea0-a9a0-b16042b126fb',
    thumbnailId: 'package:dc8cb778-fa5e-4603-9e34-d070bc284d18'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill2 11-57-18 AM',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:4e8dac59-6cdb-40cf-a010-a3239366b9aa',
    thumbnailId: 'package:71d954d3-1f2a-4a4a-946c-9b2f9942dd71'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill1 9-18-30 AM',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:e6c91af4-23dc-4f42-85ce-48c790f6b508',
    thumbnailId: 'package:29e6fa0b-0c66-4773-8d9e-f8a53ac8aa20'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 PostFill Empty Bladder',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:d0e6adb0-5dc4-44e0-9750-0a35fce7a306',
    thumbnailId: 'package:b78745be-93d0-4a34-a763-e4e8b3af298d'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses2 Cat1 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:c0f4bb9c-69cd-41f7-be80-d1d50f85b5ff',
    thumbnailId: 'package:62137c1a-77ce-4456-bb05-9a4f66fd767a'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat2 Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:423cfa79-e587-4c75-9de1-c782f5279d7f',
    thumbnailId: 'package:90c5e51e-47e9-4298-8c28-c2b812f5b849'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses3 Cat1 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:92a240cf-398d-4be1-b8a7-460f33bd2c51',
    thumbnailId: 'package:bd385a45-d1c9-4454-b6ff-43e3d92b2fe4'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses3 Cat1 Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:16a68a7b-43b7-44df-b6cd-9bceeb672fae',
    thumbnailId: 'package:57b9a3f7-59e1-41cb-8881-da35293fec9a'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2 Surgery1 postSurgery Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:27a5ab42-4b1c-4b9c-90c2-0019e7f8a871',
    thumbnailId: 'package:35ad545f-69d3-4bb8-81ea-ee8400171b42'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2 Surgery1 preSurgery Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:3e2d7ccb-5a09-4603-8963-2740021b1ee8',
    thumbnailId: 'package:5832a1e9-bf93-423e-b006-25b80f10326f'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.2 Surgery2 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:4bc1a212-4181-4b90-8284-853dfa96fbfe',
    thumbnailId: 'package:83f14e0a-a6b2-4e77-be9d-95f592ca4f6a'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.2 Surgery2 Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:1e5068f8-713b-41d3-8971-1e88d8ea9c6a',
    thumbnailId: 'package:30d72a4b-bf22-4a3a-abb1-d3506bc04993'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.3 Surgery3 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:19694b51-ece7-4684-8be1-25962a1aa905',
    thumbnailId: 'package:922958e8-74d0-491f-a1f1-7cc82e0c7e9d'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.3 Surgery3 Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:2f9dc2ff-6cb8-4f42-b722-257a93802672',
    thumbnailId: 'package:d690988c-5743-4ac3-b6b9-e6e878b0e0ed'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.1 Surgery1 PreOp Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:1c17c682-e2b9-4133-8b85-8514a34a3b9b',
    thumbnailId: 'package:d04e2d0a-1619-45ae-baad-e9d3d3abf1a4'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.1 Surgery1 PostOp Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:27d06ed4-9213-4998-b3f1-8f9e3838a78c',
    thumbnailId: 'package:384fde54-7965-43c1-bbcf-4be3f3d78927'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.2 Surgery2 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:77b73911-cb68-47cd-80ab-3a75faab8bc1',
    thumbnailId: 'package:54ab98ce-c7b5-4e30-9eab-86b4373a9ad5'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.2 Surgery2 Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:8bdd898e-9651-4004-9552-b62e4320e941',
    thumbnailId: 'package:6381f06b-03ae-4615-a7ed-05cdb40750c1'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.3 PostOp Day 30 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:53f7411f-7dec-4f87-ae77-e2fa3bee15f3',
    thumbnailId: 'package:33bda4d7-3ea2-489f-a945-a6c3e283e4ad'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'ChronicCat 1.1.1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:75fe41ad-61a4-4265-bda2-980dfb961338',
    thumbnailId: 'package:caa333ed-599e-4801-b18c-49145c9bdd2c',
    additionalId: 'package:9478768a-f62b-4046-aa89-2a5bb7190dbc'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'ChronicCat 1.1.2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:81b6f432-4521-4bc9-87a0-4f7cfd810676',
    thumbnailId: 'package:03174292-5b29-4bfe-8e12-e100270a41ab',
    additionalId: 'package:145ddcf7-ca3e-4845-bcbd-e87467abcc27'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat4.2 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:e2a419e6-b32c-415f-b224-52e828510229',
    thumbnailId: 'package:98492754-6509-470f-9dac-dbe20ef88f13',
    additionalId: 'package:c4bc18da-fc84-4913-942c-47980e7a634b'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat4.2 Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:ccb90d56-1482-4085-b3e0-9ae1cd2e7ae1',
    thumbnailId: 'package:388e7d68-8e76-49f9-9f24-1373f01b06af',
    additionalId: 'package:bf9cb636-9efb-4b75-9a7e-a01b3718bcf6'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat 4.3 Fill1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:69cfce9d-3a32-4f07-86e9-3eefae9f9852',
    thumbnailId: 'package:088bd5c0-e744-4904-bd13-c64a9d077538',
    additionalId: 'package:9d158cd2-4832-40e6-a7a3-67467fa9eefc'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat4.3 Fill2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "no-header": true}},
    pennsieveId: 'package:75f8aff0-036d-43da-b5e4-f5529f500eb2',
    thumbnailId: 'package:a84a74dd-a9c8-43ee-82b1-26107e74ec0c',
    additionalId: 'package:0dfa5227-f9d1-4458-b204-ff1c23d2fb7f'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_0730',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:a112a193-ea69-4821-954e-24655ea969a4',
    thumbnailId: 'package:8f122397-1663-453b-8982-d76da85596d8'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1117',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:a0868fa9-f720-4b9f-9f67-c5d04db8a53e',
    thumbnailId: 'package:32737ed8-7e26-4171-baf1-baa2046f0bee'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1119',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:5590fdc3-85b3-42bf-a77d-d4f1585bc424',
    thumbnailId: 'package:87937959-8dc4-4fb5-bbfe-4a952dffc7d9'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1120',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:0fa897cd-fc99-4140-beef-fcc261e7a529',
    thumbnailId: 'package:24789648-ba50-46d0-abc3-a9f547860d0a'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1201',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:d494d5df-0d9c-419b-bd16-c426d37f4917',
    thumbnailId: 'package:722617d9-e44d-47da-9e2c-410907b7b3fb'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1214a',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:9ae5c331-3910-4780-b096-9c888e5d691d',
    thumbnailId: 'package:e6faee0a-5501-4ebe-a3f8-de642e2b2694'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1215',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:98731b79-f86c-4067-8e5a-615ea8aa96cf',
    thumbnailId: 'package:d4bc798e-1248-452b-b5ef-f569085d1d74'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0104',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:7e85c332-0f40-461e-a2b8-fbe43e768332',
    thumbnailId: 'package:5faf9536-0ed7-406e-8e9e-a0ddb9977013'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0105a',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:e0bd4535-bdb9-44e5-ac2a-5bd41e187a1d',
    thumbnailId: 'package:e6a5c3de-6061-47ca-a055-b98c14ca5c01'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0105b',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:060c5284-7c4d-4db9-91a9-6aa5ca5c38c4',
    thumbnailId: 'package:324f1f4e-7b75-4792-b413-63807112028e'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0106',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:e0810cd6-62c8-41af-ab80-2ca4128fef3a',
    thumbnailId: 'package:a68727a4-cb10-4d50-a22f-97309437c51e'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0107',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:17aa92b9-a00a-437d-afea-2bf9d744a1d3',
    thumbnailId: 'package:ea36733b-89d7-4f4d-a1ef-ca13337ed6d3'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0119',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:64f9e242-702e-4a11-a6bc-10e47289b802',
    thumbnailId: 'package:23a0ee76-c36e-4a6e-9d69-12768fac786a'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0120',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:c7e01757-a77e-41c8-925c-9dd525e34779',
    thumbnailId: 'package:6372b90a-dde4-49d5-a1e2-e9d863ef7ea8'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0202',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:8268251b-c676-4669-8873-f5820355fb78',
    thumbnailId: 'package:b73bc0eb-e91f-44c8-ac86-38f720d438dc'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0203a',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:7c0900e0-56e5-4370-97c4-42ad40d83e7c',
    thumbnailId: 'package:0bd0b90f-de4b-4574-8d96-cae867ca6db6'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0203b',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:4211e9ee-12cf-470c-9dcd-a9b9e6265300',
    thumbnailId: 'package:221d150d-9aae-493b-8e8a-e52102fbca37'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0315',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:b34a4cea-4f22-4a75-8909-189269648976',
    thumbnailId: 'package:55560a92-a247-40f4-a2c8-b44cd1f62620'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0316b',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:d62a3323-6e3d-41c1-aada-3fe885525096',
    thumbnailId: 'package:f1aad2e3-312d-4316-b9ac-b8ca2e3746d2'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0318a',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:7399d9e4-b0c7-45dc-bcf1-f50ff63b188a',
    thumbnailId: 'package:a0e6708f-a890-44e5-9abb-89c9b7b4ddc9'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0318b',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:9f7e7ef8-80b3-4dec-858b-947ef232a625',
    thumbnailId: 'package:860f8448-ba52-485b-b087-43467a347a7f'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0319',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:b21217ec-eb55-410c-9c17-bfd0adef182d',
    thumbnailId: 'package:a8fc885f-0d8d-4a00-8a08-b1bd0b0c3431'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0326',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:1ff02559-b9c7-41bd-bae6-d9d2b116b7d3',
    thumbnailId: 'package:b89c2ad2-32f6-45f8-a233-74a712ae5ff2'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0329b',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:ec21fb67-037b-4dc0-be56-de2ecef1a0a5',
    thumbnailId: 'package:513f936c-6811-45a1-a41d-63df8733aeac'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub10 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:10d905a5-9cd1-4dc8-af79-8bd9c9551be6',
    thumbnailId: 'package:a70a171e-2185-4b87-b3ef-819e923fafb7',
    additionalId: 'package:7e0a747d-a6de-4ad4-8c1e-bd103b0bd6d4'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub10 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:8ee78065-1b60-4c4b-8da9-7d62ea9f5395',
    thumbnailId: 'package:ef3fc185-e340-40fd-8fbc-453818a43c57',
    additionalId: 'package:6b7b09d8-5b59-42d1-bd0a-f11b2c53114c'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub10 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:b17ecc40-3745-4ba9-8bed-0f389781f3de',
    thumbnailId: 'package:69d369cc-338f-4aff-922d-240401816817',
    additionalId: 'package:f77d2c1f-957b-41b1-84d8-c6d39edca6de'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub11 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:9f08a52a-736a-4825-a232-6e096d56b8b6',
    thumbnailId: 'package:652287e9-d583-46cb-89bc-ee76142eb4ed',
    additionalId: 'package:6a9d5add-2caa-4361-9d17-e125a9a060d5'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub11 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:bb850a45-9a0a-4a10-90a9-e5cf5d8ac168',
    thumbnailId: 'package:3e16cf2c-88f1-4945-b933-e47f6514cd76',
    additionalId: 'package:3dbff556-2460-4ec9-9575-a7fb4710b518'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub11 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:2ce44214-34cb-4d9d-be56-6b2f9732ba29',
    thumbnailId: 'package:62c951f1-58b5-47ff-a773-b3b1586f8132',
    additionalId: 'package:12924749-e64f-45eb-b963-a3efc9e55e74'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub12 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:3d5f470c-371d-41c9-a2f8-c2c748d58d18',
    thumbnailId: 'package:70d4c06e-8157-4146-8315-2160e5aecb07',
    additionalId: 'package:c045b72f-ecae-4d5b-9b8c-f3972eef8b37'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub12 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:ba746a4f-1ed8-4504-8142-066f0818ebc7',
    thumbnailId: 'package:c4679e2a-b73d-4781-badb-de77ef4a9c37',
    additionalId: 'package:b5dc27f1-d366-435d-8c79-10454818eeff'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub12 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:ee3d4ec0-667e-4cdf-858b-835a216dfe6c',
    thumbnailId: 'package:70ada4af-905f-4c59-99e5-40dae1e7efd0',
    additionalId: 'package:4e6e5ed5-48f7-4f17-b48c-a0ea88c06e16'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub5 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:b1469896-1a35-4014-997e-05e3577f84ca',
    thumbnailId: 'package:8582d0f2-a65e-453c-b3a2-93f53d5fac0e',
    additionalId: 'package:d209e4dd-366b-428e-9961-fab6f77613f5'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub5 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:87bfe5ce-3d89-4dd3-9df0-083499f7a204',
    thumbnailId: 'package:f59368c9-b4ca-42bc-9eb5-e0e9695a0054',
    additionalId: 'package:a7f8570f-5f99-47ce-b86a-e93a63871185'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub5 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:89b58f84-e788-4ed5-81f6-6ac60f12c687',
    thumbnailId: 'package:64c0de57-370a-4847-bc52-ee791c088a80',
    additionailId: 'package:9e810e88-c2c1-4cca-85fb-156c97a2da05'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub6 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:1f8f1582-da35-4f56-8544-2e2a86f92f92',
    thumbnailId: 'package:4ae0471b-5d6e-4f67-8e0a-f85afe3e6f14',
    additionalId: 'package:30ca7382-f879-46fa-8725-32a68423b924'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub6 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:571593a0-1377-4e93-99b8-f53dd40b52a4',
    thumbnailId: 'package:97e8ec40-aba9-48f5-9ba6-5ba41fc426cf',
    additionalId: 'package:9e066817-2987-4b86-b36b-5b0e1f45a156'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub6 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:b50d51a4-f2ce-4d42-877c-1213bf878f2c',
    thumbnailId: 'package:2caf2811-b1c2-4f9b-b0f3-3f3546d81357',
    additionalId: 'package:de424bcf-e556-4bc9-b3dc-4956b6554f0d'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub7 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:76c5a955-7604-4ff4-9b71-c50fb288384a',
    thumbnailId: 'package:1d4bfc08-7d56-419d-8a2c-987ff75989bc',
    additionalId: 'package:5a0bbe7a-3510-423a-8d35-c2d546d2ff69'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub7 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:f5deff5a-16cf-42cb-a668-4375c016d443',
    thumbnailId: 'package:45a388cd-9102-4579-856f-b20237f1a352',
    additionalId: 'package:0cc50366-62a8-429b-9908-848b311bb920'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub8 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:fce1d052-5068-4de5-ba7b-8908bcf1a228',
    thumbnailId: 'package:08aa4314-dc70-47b2-9b24-e2eb0b5e5ab7',
    additionalId: 'package:d24b7c7c-e3e0-4f90-8bf9-d499ba1755a4'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub8 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d33fe7df-8770-4dc8-bff3-7b490866f374',
    thumbnailId: 'package:6b8ed987-2304-4253-bc8a-f52a9856f64d',
    additionalId: 'package:b45db651-cedd-41e5-82ff-a6d07c2e3c15'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e2b05ff5-36d3-49c5-bcb3-310bcc030c7f',
    thumbnailId: 'package:39a2a04e-b98b-4e5a-8f46-213c99804057',
    additionalId: 'package:88cc11dd-b000-4b0b-983b-6e2b47e0bab7'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9 Sam1 Strech Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:9fb092b6-8daa-4e86-8ad2-4358173581b2',
    thumbnailId: 'package:e5650cd2-1b6e-481d-8cb8-e1f2fd860f48',
    additionalId: 'package:4da5253d-664a-443c-8ee7-02674e86684c'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:36da4fd2-2035-44d3-820a-f92974f6a282',
    thumbnailId: 'package:63d3013c-1394-4f6b-aaa5-0fefb7f31475',
    additionalId: 'package:fd1dd185-cdea-4a1d-9bdc-d3a56c91f008'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9170 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:9873902d-cf0f-4a1a-bcd6-769f31a1f041',
    thumbnailId: 'package:9f132ecf-93e3-4305-8ac1-9f1cf90d4c76',
    additionalId: 'package:9a190ac2-bae8-461f-b58b-c5393940b25a'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9170 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:0d6966ed-2ad0-4916-a55b-ce567b80dfa7',
    thumbnailId: 'package:0d815cf0-6810-4691-aa4c-1a8e2cb2c777',
    additionalId: 'package:c6cd68dc-6b0e-409c-b9b2-d472e5a396bb'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9170 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d298b82f-a80f-4a76-a4f2-5eae92ee682a',
    thumbnailId: 'package:69dfdf70-d94d-43f9-937a-23e3b3228a7b',
    additionalId: 'package:543886a0-a334-4986-9fb0-668f7bb6da05'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9238 Sam1 Pressure Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:6edaee3d-e4bb-4557-9ee6-56e8be6d35be',
    thumbnailId: 'package:9945f80b-263f-4418-82f0-1caf88ff07b7',
    additionalId: 'package:13830fc8-6a88-40c9-a019-de9074d8dff3'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9238 Sam1 Stretch Preconditioning',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:3bcf64da-bdf5-4cb1-b8be-3767bbb7141c',
    thumbnailId: 'package:e26181a9-4231-42e3-a9cb-13860397cfa0',
    additionalId: 'package:9c901df9-fc10-4b4e-b4f8-ff231d9eda0f'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9238 Sam1 Stretch Pressure Twist',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 2, "y-axes-columns": [3, 4, 5, 6, 7, 8, 9, 10]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d67aa547-d7a7-4734-8083-a0cb3bd97b70',
    thumbnailId: 'package:698068e8-f0f1-4416-9f4d-55e7fed18548',
    additionalId: 'package:ca6956b3-db16-4948-b11d-72ba7730b163'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180809_G5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:0de9ac31-9f4d-48af-8b4a-7b8e38bf7ee9',
    thumbnailId: 'package:1048bf77-9423-4cb1-b77a-b5f1f3635b1c'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180813_G5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:d7e3d21a-2290-405b-a6f2-bbef20595d9a',
    thumbnailId: 'package:8264e36d-47f6-4a5c-b2d3-8019e721b744'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180821_G5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:bce0c156-00e8-4586-a578-78380e806189',
    thumbnailId: 'package:0ffc3745-304b-45d4-bc2d-add5f1f7974b'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180827_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:224c669d-2be3-484d-afc4-00504e7b42ff',
    thumbnailId: 'package:cb48b5a1-9559-4748-ba8a-99b58b12420b'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180828_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6]}},
    pennsieveId: 'package:d2182a1f-1d16-4bff-b83b-fa06a9db9b4d',
    thumbnailId: 'package:9a30cb3f-2f77-4ec8-a33d-40f1ed600856'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180905_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:392e4256-1f5d-4c3a-9f29-5602c7d51f82',
    thumbnailId: 'package:0afc9d87-2831-418b-be19-5b0638938218'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180906_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6]}},
    pennsieveId: 'package:876f8bf5-b0e0-4ce4-8a51-35b6ae127142',
    thumbnailId: 'package:c865c591-3fa2-46ea-ab97-5fa97a32db0d'
  },
  { 
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180911_G5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:23de167c-6a27-4fee-9373-bf70d72861db',
    thumbnailId: 'package:aeb54cc5-7d8a-4928-a86b-0ee6f0ff0a37'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180912_G5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6]}},
    pennsieveId: 'package:f051e0a4-7183-4daf-87a5-0e8206273681',
    thumbnailId: 'package:808a4001-318d-42a7-88f5-9cc3cac962da'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181009_G5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:6e090115-646f-4263-8c8d-5130f20f89e9',
    thumbnailId: 'package:6691464a-4750-480a-9ec8-9238b6d58247'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181018_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7]}},
    pennsieveId: 'package:85a5e8f3-8458-4a5d-903e-1409338333e7',
    thumbnailId: 'package:84ba74a8-8d84-498e-a070-ff629c5a23b3'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181018_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:3e2212fa-9982-4ba0-8f4f-bcc0eb1850b3',
    thumbnailId: 'package:79348eb8-55b6-4f82-9c25-1bc08a403f7a'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181029_G4',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:1d728d4d-1a51-45c4-a419-4aa625683a47',
    thumbnailId: 'package:fddac5ec-5f73-4bbf-9b57-aab76c5d3fd8'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190212_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:50af1be4-4f81-4228-813f-8d2e8b6da430',
    thumbnailId: 'package:44e730c7-9f90-4ed6-a7b5-4d6fb8682d7d'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190214_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:2a39814e-97c7-4d64-bbf3-aa7a97055c50',
    thumbnailId: 'package:cff07669-6bb7-4d35-9342-bac26236bd36'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190220_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7]}},
    pennsieveId: 'package:814ff884-dedb-4c22-805d-b0e2fb43a77a',
    thumbnailId: 'package:e2fd0433-e506-4af3-a85d-222d1845b0e4'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190220_G5',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:e5fdb91c-e9aa-4397-b632-f4d7a3a1cc80',
    thumbnailId: 'package:e4844721-c578-4fec-aadc-4dbc17fbc772'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190617_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10]}},
    pennsieveId: 'package:b06dfc78-4e09-420c-8431-f81101b58d8a',
    thumbnailId: 'package:75aae1ef-10b7-4573-bfc5-8ddbfa639e61'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190618_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:8bab5053-8925-41a1-b78c-70d336458250',
    thumbnailId: 'package:2c8b6103-0b88-466c-bd5a-8a1d87cd9f56'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190618_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10]}},
    pennsieveId: 'package:b7381a2b-cde0-483a-952f-0b9269242b02',
    thumbnailId: 'package:5bbebede-0322-4472-9b25-770259aced38'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190619_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7]}},
    pennsieveId: 'package:19db1ffc-5f71-40eb-9881-40655ca31cee',
    thumbnailId: 'package:cb9d5d89-d3f2-4a7d-bcb2-8e3a14aba1d1'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190624_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:02a4df82-b0b9-40e6-a41c-05dbb8d7a5d1',
    thumbnailId: 'package:1e285877-236c-4ec8-a10a-c12d9ad137f6'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190626_2_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:de9942c4-2789-46e6-88a8-6ed9c60b7df1',
    thumbnailId: 'package:df24f5c6-67be-47a6-90f8-ff49e13ee4c5'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190626_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:c93419a8-3fc9-4acd-9bba-ed597a44c4de',
    thumbnailId: 'package:88e79d24-f82a-4c7c-8559-4bfb837af242'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190701_2_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:d521071b-bab5-4643-b9c3-76e40ea5a621',
    thumbnailId: 'package:b17b7400-71fc-4c12-931f-acf85c508872'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190701_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:bbef6e4b-ef7a-4491-934d-249ed21cdfca',
    thumbnailId: 'package:b61595ff-6974-43f6-b461-8d962bf6b8ba'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190806_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:88bbbc97-9bda-4d04-96aa-b4569cda4af6',
    thumbnailId: 'package:a969ab26-cdab-44b0-8b5b-fda37bdbf2c7'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190905_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:91648efd-8aa8-41ec-bac9-01cea452ccaa',
    thumbnailId: 'package:eb74470b-eb93-4d7d-92e7-881534cb09f5'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181010_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7]}},
    pennsieveId: 'package:3e514c69-0368-4c8b-b6f4-1bd7e5611fe2',
    thumbnailId: 'package:7ed0063d-0c85-4ec8-bf2c-70439bcbc930'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181127_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5]}},
    pennsieveId: 'package:598170e8-414b-40f4-99e8-08cf0b54b49c',
    thumbnailId: 'package:02077095-375e-4b6d-90c1-25de6df772c6'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190226_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:648bea83-be18-4ada-9e7b-c80b0b3af329',
    thumbnailId: 'package:76678bb3-d9a4-49ae-91a8-75ee9e3a2ed4'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190228_G4',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:03e257bd-adbc-4de8-a9ae-05ad77c564f8',
    thumbnailId: 'package:d28d6132-11f3-417c-b2b4-6f7ebfa24e13'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190306_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9]}},
    pennsieveId: 'package:2cd902fb-bf35-40ee-9a46-ab4879b3ab31',
    thumbnailId: 'package:5eb407b5-ad04-444f-8762-f0b2827e0729'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190306_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:6a0283f9-0dd4-4690-a46d-c9cd7a95e2b2',
    thumbnailId: 'package:d1907aa3-4cbd-4293-a9ad-b1e7cd10a552'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190306_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:d55d41c9-9e86-4cb3-912e-e646fcf6a882',
    thumbnailId: 'package:db66a0ee-79d5-4446-bd6b-7bfb555e0ad2'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190312_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:86656ef9-d6c4-4207-b27c-65821820e203',
    thumbnailId: 'package:11ba5b6d-7bae-4c74-81ce-af5676efc5d3'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190312_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6]}},
    pennsieveId: 'package:d271783e-0dca-4988-b514-ca29a1d114f3',
    thumbnailId: 'package:9d43f2d0-5bd7-4e65-9fbe-36a8822a49d7'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190312_G4',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:68fa1138-fcce-440a-9759-d2fdeb464abc',
    thumbnailId: 'package:60fd19ef-5d4f-4b67-871e-f74e8a66dc44'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190320_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:d4ff0303-025e-40b2-8211-63ebc610c29c',
    thumbnailId: 'package:8b7c2fbe-641d-4f66-a429-1eb559ef3dda'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190326_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:d609f383-a0f0-4ffd-87f8-f545e9796087',
    thumbnailId: 'package:0db497e6-baba-4bff-9ba2-5f3da2ee39fb'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190326_G3',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:63af01a0-b4ae-4166-b9d0-f534dbef37d6',
    thumbnailId: 'package:fbff252d-9bf4-40f4-8c99-425d4c994305'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190408_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5, 6, 7]}},
    pennsieveId: 'package:d7eaa3bf-6381-454a-9f23-7d100f764805',
    thumbnailId: 'package:fd42e6b5-8e47-4e67-a318-ea4fd5dd0257'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190806_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:e8fa1ae0-3864-4841-83dc-eefbe018a9ff',
    thumbnailId: 'package:d605049d-33ad-40f4-9b0b-01651b5418e5'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190812_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:436925ef-16c6-4d67-81e4-b6eb2fc26a25',
    thumbnailId: 'package:163e5fe7-9efc-4cbb-a5de-1df3b48f8752'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190826_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5]}},
    pennsieveId: 'package:e537e3cc-1adb-4a92-9baa-8128ff356e86',
    thumbnailId: 'package:73e4ee9d-8b7d-41fe-8e4a-f20895c1c75f'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190828_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:898571db-fb0f-42c1-bd8d-699e213dab16',
    thumbnailId: 'package:3f933edf-0345-4908-90ee-95aa683044aa'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190828_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:eb336031-2417-4912-9ece-d34df15449d1',
    thumbnailId: 'package:0f884791-c9cb-482d-8602-c328071f7572'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190904_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:cc2f84c3-da9c-4302-8f10-777803e10602',
    thumbnailId: 'package:c83a65a1-906b-4439-9c02-d9f087c17325'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190916_2_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3]}},
    pennsieveId: 'package:54005d0a-43c3-4c68-a31d-d0e216440ac4',
    thumbnailId: 'package:c3c24d94-c916-47da-9cc0-fce1ad4d254a'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190912_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:b915fadb-9553-40e6-98e3-ce6d9ca98c5e',
    thumbnailId: 'package:d006acef-72d5-4bf5-8553-87c41939d832'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190912_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:6e7829fd-6c73-49e6-bf84-47820516ebee',
    thumbnailId: 'package:25956e5f-ad45-44f8-b30d-840548ee7cd3'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190913_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4]}},
    pennsieveId: 'package:95e8a7f7-3934-4a27-ae8a-b403f6e6bbf7',
    thumbnailId: 'package:8e0c9eac-73c9-4ef3-8ae3-2d831ba54e01'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190913_G2',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2, 3, 4, 5]}},
    pennsieveId: 'package:10cf9d00-3446-4212-8dd2-9d29696eca6e',
    thumbnailId: 'package:9811ad8b-69af-4d81-b537-8c25c2fab4b5'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190916_G1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis-column": 1, "y-axes-columns": [2]}},
    pennsieveId: 'package:e06defa6-2cf0-477d-973d-afee6fda77c9',
    thumbnailId: 'package:b3f67de4-d657-47e5-beaf-178ce01dcfbd'
  },
  {
    datasetId: 153,
    type: 'plot',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    title: 'Rectal temperature change',
    pennsieveId: 'package:93869d71-fc32-43b3-8952-2a9d5920f235',
    thumbnailId: 'package:9f2726bc-71c8-4c62-b74a-b43ec2034d7b'
  },
  {
    datasetId: 153,
    type: 'plot',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    title: 'Rectal temperature data',
    pennsieveId: 'package:9cc575d8-287c-4384-89e0-514ea46182d0',
    thumbnailId: 'package:39d522d7-3383-4033-aed7-53519aef345e'
  },
  {
    datasetId: 153,
    type: 'plot',
    title: 'iBAT temperature change',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:a49f708c-341d-4db0-80e2-d12970b671f9',
    thumbnailId: 'package:816dc01f-fefd-436d-b465-21471682598b'
  },
  {
    datasetId: 153,
    type: 'plot',
    title: 'iBAT temperature data',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:b0ea3d0b-2649-422c-afe8-2ebccd432c69',
    thumbnailId: 'package:bc8484a8-d74c-48c1-8da4-6fffa559e3fd'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 10Hz Stimulation, Afferent fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d55cd350-3143-45b4-add0-68fa07050bfd',
    thumbnailId: 'package:f1a96b94-d8a5-436f-97a4-27b21862e481'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 10Hz Stimulation, Afferent and Efferent fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:7bff95f8-9421-45d6-8f14-a107dead26dd',
    thumbnailId: 'package:44281b1b-a5bf-4f2a-a519-de663f0585ec'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 30Hz Stimulation, Afferent fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d858ba5f-a2b8-4256-9c35-574dd36335b0',
    thumbnailId: 'package:14b018f7-d82e-43c2-b320-827c61888355'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 30Hz Stimulation, Afferent and Efferent fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:b7aa1fd2-e222-425e-88ec-8c3aba183aff',
    thumbnailId: 'package:84ffef92-acd6-466e-84e0-7777dc08289c'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 10Hz Stimulation, Afferent Fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:0b5e2b36-7e58-4e90-a499-66796c81f954',
    thumbnailId: 'package:e4d07e61-6ae3-4a5d-8840-9e92264615b6'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 10Hz Stimulation, Afferent and Efferent fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:11565806-6a94-4a34-91a3-3256d3373e55',
    thumbnailId: 'package:039cd02e-a5bd-48b7-ae91-b3e094da1840'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 30Hz Stimulation, Afferent fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:5bec5bf7-95a5-447f-a22f-39560a820936',
    thumbnailId: 'package:77502660-2da9-49e1-a294-f6286447de2a'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 30Hz Stimulation, Afferent and Efferent fibres',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e4af58c4-1438-4321-91fc-7fcba639614a',
    thumbnailId: 'package:64b3f593-487d-4ab2-a8dd-28e32975d321'
  },
  {
    datasetId: 131,
    type: 'plot',
    title: 'Normalised sequencing data',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:1a08e704-def1-4f71-9a51-2cc3da82760b',
    thumbnailId: 'package:c5e59fcf-79a0-407a-84ec-52caac2c37a7'
  },
  {
    datasetId: 140,
    type: 'plot',
    title: 'Normalised sequencing data',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:f369aa8a-b182-42b7-9b28-89ca44365e6f',
    thumbnailId: 'package:f7102f30-6b65-4152-83d4-6bbb782f4d79'
  },
  {
    datasetId: 123,
    type: 'plot',
    title: 'Motility data',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:7ab9246f-004a-4d36-ad04-8594aa7f1021'
  },
  {
    datasetId: 123,
    type: 'plot',
    title: 'Electrode Location data',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e4b89211-7549-420c-9f0c-25de3cbf5315'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '01_F_31071947',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "no-header": true}},
    pennsieveId: 'package:4f606bd7-c723-4a2d-97ae-9b740116deea',
    thumbnailId: 'package:9c40531f-c20b-481a-bd3b-a570f980865d',
    additionalId: 'package:ef19b3a7-dbc6-49f4-b168-f051c39f730d'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '11_M_30081928',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "no-header": true}},
    pennsieveId: 'package:8fa8e6b9-ca48-4570-9354-21fcab7f7927',
    thumbnailId: 'package:a4e6ffae-bf16-4ce3-b5e7-1140412be975',
    additionalId: 'package:882ec6c3-a959-46e3-a494-2d99fcb9c6e9'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '13_M_24011938',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "no-header": true}},
    pennsieveId: 'package:24a0a347-8511-4ef0-9639-98cc288efbb6',
    thumbnailId: 'package:9e8cbc88-a562-4251-ab46-7e52a6d4e40c',
    additionalId: 'package:61d4661e-9a11-4cd8-81cf-8a8d5693990a'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '14_F_12021927',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "no-header": true}},
    pennsieveId: 'package:fd65ba6a-aef2-4efa-9592-dcaa058ac3c3',
    thumbnailId: 'package:6eb35479-9061-4b21-a06a-8c2d511fbabc',
    additionalId: 'package:d5880bbe-1678-466b-a7da-1db3e995d6b0'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '15_M_250535',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "no-header": true}},
    pennsieveId: 'package:a4d3bed8-f2f6-4555-91c9-b35b07feeeee',
    thumbnailId: 'package:8f4a4942-e00f-40ad-96af-d4b4e0f2bad0',
    additionalId: 'package:613f83a3-3a76-4aef-b24f-906f0624afb3'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '17_M_021035',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "no-header": true}},
    pennsieveId: 'package:7cbe378b-7f6e-4f7f-8888-cd5faa861b5b',
    thumbnailId: 'package:9b49e8b9-25d1-45e8-b8ef-d75d1e6cb897',
    additionalId: 'package:4e66c199-defe-4373-8505-8d9f6cab31df'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '27_F_1943',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "no-header": true}},
    pennsieveId: 'package:09f6bb06-c293-401c-b070-c4f6440bc3e4',
    thumbnailId: 'package:f32b1e20-0b0b-4276-8d7d-8ab9a4ae1aa0',
    additionalId: 'package:868c83ee-3895-4fec-a474-536b8bddc843'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '28_M_1940',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "no-header": true}},
    pennsieveId: 'package:a7357ee9-46c0-45fb-9cc1-905982ad5e04',
    thumbnailId: 'package:a9eea43b-c998-4edf-a26e-63996eea9142',
    additionalId: 'package:c445df6d-02d6-41d3-aedc-9abe84f1e966'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '29_M_20091965',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "no-header": true}},
    pennsieveId: 'package:0231bcba-bda4-4006-ad53-65ab63709e54',
    thumbnailId: 'package:1354839e-362c-46f3-95bf-49c7bdbff7f9',
    additionalId: 'package:f6186687-b31c-42c0-aa96-c07d4ab10cd2'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '31_F_24081938',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "no-header": true}},
    pennsieveId: 'package:c3570070-bcd9-4315-abb2-701f060c9be2',
    thumbnailId: 'package:b4f58f0b-9fc1-4575-aeac-6eddef2d4a4c',
    additionalId: 'package:390add15-d32d-415c-a371-6bae715b1bd2'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '32_M_02071953',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "no-header": true}},
    pennsieveId: 'package:f9ed1426-b086-43c1-86a9-2ce3264de04e',
    thumbnailId: 'package:c250bc29-dcdb-4418-8af0-8972762f9fe4',
    additionalId: 'package:71ff97f2-f36b-430d-8656-d620b7fd7e35'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '33_F_09081960',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "no-header": true}},
    pennsieveId: 'package:fa952ef2-ea17-4160-8e95-08d99964156d',
    thumbnailId: 'package:e87c4e63-7870-4c77-9910-61e8f508b4f1',
    additionalId: 'package:74666c52-5428-429e-8dc0-2bd709a5a4f9'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '34_M_24061955',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "no-header": true}},
    pennsieveId: 'package:ab3730d0-ed5c-42f9-80c3-0c589ff0c19f',
    thumbnailId: 'package:4444d4b3-1288-4ae9-a116-debb3ebf5021',
    additionalId: 'package:53c1b9d2-c6d7-4441-a21f-8b58601b8359'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '35_F_21091950',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], "no-header": true}},
    pennsieveId: 'package:888a42d2-5a19-4cff-8b4c-b8ba63f0b61d',
    thumbnailId: 'package:c672958a-abcc-462b-97f4-4a0652306357',
    additionalId: 'package:19a96573-c512-4206-a282-aba34eca71d2'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '36_M_24041935',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "no-header": true}},
    pennsieveId: 'package:101e75b8-e399-4173-80bf-7a6bfb2404e2',
    thumbnailId: 'package:39675e97-cc1a-4125-8e6c-9671d8f4c8b0',
    additionalId: 'package:8d476713-e7ab-4f5a-89b8-9e308aa209ac'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '37_F_06021950',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "no-header": true}},
    pennsieveId: 'package:c3ac1b3d-dbdd-4c53-a0ad-1029f113304b',
    thumbnailId: 'package:37512c13-ebd3-4703-be26-6c67cae0a5f9',
    additionalId: 'package:927cb267-9000-4bd6-bb98-0d24629f96a0'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '38_M_06091963',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], "no-header": true}},
    pennsieveId: 'package:8309f4a3-2d45-419f-8104-3f2acd6d52b4',
    thumbnailId: 'package:ed92f570-4423-4eae-b34f-4abe0eaa8b43',
    additionalId: 'package:b9be5fbf-30e8-4373-aa13-94cc11c5bc9d'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '39_M_16081941',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "no-header": true}},
    pennsieveId: 'package:6d2bf265-f3fc-4796-bddf-fd41bdfd1063',
    thumbnailId: 'package:5aed2c9d-5934-496b-9f8d-271fa1a5d357',
    additionalId: 'package:8677f547-75f4-47a4-b9e9-9c9e6e4dfea5'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '41_F_16081945',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "no-header": true}},
    pennsieveId: 'package:effc466e-4bc1-444b-82b4-019412668821',
    thumbnailId: 'package:b4a6094e-7ec1-44e1-9854-40ae6d15b815',
    additionalId: 'package:f563cc60-aca2-415a-9a4d-74de644b68f6'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '43_M_11071949',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], "no-header": true}},
    pennsieveId: 'package:55ab9d03-a15b-44c0-8e27-f38d2ee4f60c',
    thumbnailId: 'package:b974e49f-cc88-4e67-b149-a22075fd6a68',
    additionalId: 'package:2fdd26c0-73ae-4099-a426-935f963ddd98'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '46_F_15021952',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], "no-header": true}},
    pennsieveId: 'package:44e93fc2-f73d-45fc-b24e-8ff1b84fbcb2',
    thumbnailId: 'package:71665e48-9874-4fd3-af65-18f3e33338f2',
    additionalId: 'package:cbb20147-d4e4-4f89-98cf-2f693514ceb9'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '48_F_26111939',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "no-header": true}},
    pennsieveId: 'package:ea23f0c5-d3a9-426f-81fb-549f92131086',
    thumbnailId: 'package:3d50b006-d54e-40b8-a713-5585555245ce',
    additionalId: 'package:3ad69e27-fba8-4441-b8b1-4a1f79db3b97'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '49_M_18011956',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "no-header": true}},
    pennsieveId: 'package:47aa8a46-76ef-4cd9-9cff-90fa102359f2',
    thumbnailId: 'package:ca5b761b-787e-4bd8-af28-0397377bd138',
    additionalId: 'package:90d6fd41-3da6-4add-adf4-4051f678d345'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '50_13091943',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], "no-header": true}},
    pennsieveId: 'package:7f434f53-c809-4b98-aec9-9f2f86378305',
    thumbnailId: 'package:c7a50ebe-41b1-4528-bf75-a251ec5e7a37',
    additionalId: 'package:bf52b81a-2ec6-4668-af2e-ba939be74526'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '51_M_07121936',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "no-header": true}},
    pennsieveId: 'package:e022b746-1dc8-4dde-8736-864477f16af6',
    thumbnailId: 'package:37d504be-fed2-4263-afcc-ae4724c465b1',
    additionalId: 'package:942b972e-9c61-4059-b171-808e5309afd8'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '52_M_01071947',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "no-header": true}},
    pennsieveId: 'package:c7f9937e-e834-4521-8d6a-9c79d7f8e0b2',
    thumbnailId: 'package:bb1039d9-623d-4665-a06f-1d82ea47ee47',
    additionalId: 'package:1e8bab5f-8c93-458c-ac49-c72577727e76'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '53_F_12091960',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "no-header": true}},
    pennsieveId: 'package:a5e2968f-3dc5-40b0-96cf-08c4cbd32933',
    thumbnailId: 'package:722c9509-3895-4e6f-9b50-a699c6749ef4',
    additionalId: 'package:4137d3c1-e2a4-41dd-b07c-9176e6bc8bf3'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '54_F_02111959',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], "no-header": true}},
    pennsieveId: 'package:b451c9c0-c96d-4475-bb6d-294c9fa0bd33',
    thumbnailId: 'package:d7f7369a-a60f-49b2-b8f0-aec7561e5d47',
    additionalId: 'package:9ddd4dcb-d5a8-4282-a3c6-6cf60747320b'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '56_M_03081929',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "no-header": true}},
    pennsieveId: 'package:3bd00c51-6aa0-4259-ac04-04b3ec06fa35',
    thumbnailId: 'package:09969fed-dd95-43dd-82b9-e0207c434b66',
    additionalId: 'package:00b88a26-1a45-4ed4-8c9b-8408bcbf9b8c'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '57_F_20031934',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "no-header": true}},
    pennsieveId: 'package:bbcb206d-70f4-4d66-b8cb-aa99372a6b03',
    thumbnailId: 'package:41fd0629-5573-4290-8d01-1945102fa0bb',
    additionalId: 'package:cf011a5c-b3a9-421b-8d3d-04b8e64aab11'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '58_M_16101960',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], "no-header": true}},
    pennsieveId: 'package:db59b2d4-e692-4cf0-9cd1-4cf4e13026fe',
    thumbnailId: 'package:f6f8edc4-2f10-4e89-8a7a-c5884ff719c8',
    additionalId: 'package:e2afc4a4-0e19-44ad-833b-57391a1350cb'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '59_M_21091979',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "no-header": true}},
    pennsieveId: 'package:7d8aa6fb-45e6-4c61-8fbe-df8b13e341f6',
    thumbnailId: 'package:bcf3bc65-f2bf-40a4-81aa-85e65d919c3a',
    additionalId: 'package:7bc5bd8c-95ee-4767-b22f-79d266ff3054'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '62_F_14121963',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], "no-header": true}},
    pennsieveId: 'package:5cead5ed-e53c-4a04-a33c-f8a19c7ff640',
    thumbnailId: 'package:117d4e12-e074-4d73-a5c1-8372c2f28e06',
    additionalId: 'package:6cce3764-1180-4054-ac40-91c8d45bd298'
  },
  {
    datasetId: 33,
    type: 'plot',
    title: '63_F_30051973_1',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "delimiter": "tab", "y-axes-columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "no-header": true}},
    pennsieveId: 'package:86597f87-5eba-4fa3-9084-820cc88847e0',
    thumbnailId: 'package:ca9be7ef-862c-4580-9265-a34fd595acbb',
    additionalId: 'package:a2f32b92-d2cb-4773-a6f4-e983d21bdb72'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_300us_5mA_PT_wAB_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:99b4c68d-b2e9-4ffe-9ab5-9baa0907c5d1',
    thumbnailId: 'package:7ff6ed5f-edb6-47e9-8a53-15fd6eac61fe'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_300us_5mA_PT_wEB_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:0ceba4ba-bc71-4c73-9295-1705fe8a8719',
    thumbnailId: 'package:e504e6ea-7618-4746-a51a-8930f5f5ba73'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_300us_5mA_PT_wOB_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:f0264826-4b1a-4061-98de-bf63bfa43e15',
    thumbnailId: 'package:4782cd0e-7eba-4fbb-ae95-597056267648'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_4 ms_5mA_PT_wAB_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:584d8729-4569-4223-9d55-886209e8dc94',
    thumbnailId: 'package:afafff17-d4dc-47d3-95ed-f3d5061ecf74'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_4ms_5mA_PT_woB_Y1_manometry.',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:44afbab2-e508-422d-ba45-771d36115e01',
    thumbnailId: 'package:9f8b67f4-7323-4e64-8d4f-e1c571296623'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_4ms_5mA_PT_wEB_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:0364b9c8-ea2f-4afe-9e12-ea78efac3a95',
    thumbnailId: 'package:15c71d1b-e53d-4672-ab01-a0839160d97a'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_4ms_5mA_PT_woB_Y2_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:bbf045ad-e3f2-454d-8085-7637ee07cbe8',
    thumbnailId: 'package:8f24d621-48e9-4fb1-be68-46807bee4fb4'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_4ms_5mA_continuous_woB_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:aee53315-1557-4ce8-a4d7-b44c380c143d',
    thumbnailId: 'package:85d0c8a4-1d3e-453b-990b-9ba1a987c726'
  },
  {
    datasetId: 150,
    type: 'plot',
    title: 'stim_4ms_5mA_SW_woB_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e09425d1-f793-4daf-9201-88a71669f749',
    thumbnailId: 'package:fcdafe51-ea1d-44f7-94bf-3c31fe9dda4d'
  },
  {
    datasetId: 34,
    type: 'plot',
    title: 'stim_proximal-colon_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:5c51dc5c-58af-46e2-a8f7-ecb4f36329ef',
    thumbnailId: 'package:1b3d1d00-1c74-45b6-b4c7-73078b633039'
  },
  {
    datasetId: 34,
    type: 'plot',
    title: 'stim_distal-colon_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:27259d18-c03c-46fd-8f48-20f78c125cfd',
    thumbnailId: 'package:80f1739a-7745-4217-a42f-8627c774d52a'
  },
  {
    datasetId: 34,
    type: 'plot',
    title: 'stim_transverse-colon_manometry',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:9f571560-f2d9-4676-bcce-88ac14c771b5',
    thumbnailId: 'package:4a90dafa-b392-47d7-a706-e080ff6f8fa1'
  },
  {
    datasetId: 46,
    type: 'plot',
    title: 'Experiment2_Meal-size',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries"}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e55b0ca3-e2b1-4de9-9429-714b9e680df8',
    thumbnailId: 'package:75cf89ce-b06a-42b7-9848-9727273099c0'
  },
  {
    datasetId: 46,
    type: 'plot',
    title: 'Experiment1_Meal-size',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries"}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:eadd037e-8680-48e6-b39b-30da8abab67a',
    thumbnailId: 'package:b15a2937-fe82-43bf-97f7-ab61a3326879'
  },
  {
    datasetId: 46,
    type: 'plot',
    title: 'Experiment1_Daily-intake',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries"}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:c2d959f7-a604-40f6-b0fb-d54d5cf85701',
    thumbnailId: 'package:9de0d38a-059b-42ec-a6ef-f4cc64cc7ccc'
  },
  {
    datasetId: 46,
    type: 'plot',
    title: 'Experiment1_Number-of-meals',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries"}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:04e261d0-e742-4186-8fae-61ea58f6f210',
    thumbnailId: 'package:1a2f499a-ae35-4883-a4a2-19dfeea8fefd'
  },
  {
    datasetId: 46,
    type: 'plot',
    title: 'Experiment2_Daily-intake',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries"}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e5e7799f-32b2-4d47-b9b6-0bea9d3008a9',
    thumbnailId: 'package:985b706c-f81f-46d1-928a-fdf5f290349e'
  },
  {
    datasetId: 46,
    type: 'plot',
    title: 'Experiment2_Number-of-meals',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries"}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:eedff3cb-aeb8-4f31-9271-a3a0912ff9e5',
    thumbnailId: 'package:edb079fa-36d4-41b9-bb16-c2bfd325d992'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat7_PostUroMOCAInsertion',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:80d976d7-9ce8-4130-b57a-564dee656b93',
    additionalId: 'package:8536a791-42ca-423d-bff1-b77be88ebab8'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat7_PreUroMOCAInsertion',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:96d6be65-ea03-4cff-b78b-70ca8237b94f',
    additionalId: 'package:71df21e6-98ff-42b3-862a-2239e1379665'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7.2 Day 14 UDS trial 1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:4b414cd9-a384-4fdd-affe-f38c5c617d27',
    additionalId: 'package:f0c95e17-0370-4a72-9792-b2e6723ddc08'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7.2 Day 14 UDS trial 2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:ad552b7b-6565-4e23-bcc3-ccc7e18accc4',
    additionalId: 'package:f0c95e17-0370-4a72-9792-b2e6723ddc08'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7.3 UDS run 1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d2ef504d-00a9-42b6-8bab-a4f755fdc179'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7.3 UDS run 2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:9cb36924-23f4-4819-bea8-ee44dd562a79'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7 Day 2 Trial 2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:121c3111-0b00-4b23-bd54-376bff1012af',
    additionalId: 'package:79a0d7d8-af06-4b61-98fb-80114ee9da7d'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7 Day 3 Trial 2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d9a18eb6-e1f6-4007-bd6c-eb71f43315f3',
    additionalId: 'package:79a0d7d8-af06-4b61-98fb-80114ee9da7d'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7 Day 4 Trial 2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:afd31d24-5532-48c9-ba93-3161edbb298f',
    additionalId: 'package:79a0d7d8-af06-4b61-98fb-80114ee9da7d'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7 Day 8 trial 1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:2ceb647f-a792-42c9-9360-746536d83c88',
    additionalId: 'package:79a0d7d8-af06-4b61-98fb-80114ee9da7d'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat 7 Day 9 Trial 1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:93a75b56-e4fd-43bb-85b3-18b7502942a8',
    additionalId: 'package:79a0d7d8-af06-4b61-98fb-80114ee9da7d'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8_Urodynamics1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d1ffcd87-b0ad-4854-9ad4-cb245eaa3a52',
    additionalId: 'package:02944b92-1079-4d7a-9755-2ec9849a26be'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8_Urodynamics2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:1ec8d252-2f14-41c3-86b7-cd89f0138053',
    additionalId: 'package:df77604f-d96c-4abe-a2aa-524ee1dc4349'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8_Urodynamics3',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:ff66bc6a-ff1d-4bb9-b02c-3d902cb65496',
    additionalId: 'package:865318e3-4281-4a33-ae4e-acd277ca2536'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8.2_Urodynamics1 Emptying',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:074cd5d7-803a-4592-8cd7-31d410cb89c3',
    additionalId: 'package:ea3d5f4e-063b-488f-81ca-d1e460471bda'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8.2_Urodynamics1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:f0c4ed0d-68b2-4428-bc1c-911822387ffb',
    additionalId: 'package:ea3d5f4e-063b-488f-81ca-d1e460471bda'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8.2_Urodynamics2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4], "no-header": true}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:cc56f99f-6f7b-4b54-bb89-140378bd089d',
    additionalId: 'package:ea3d5f4e-063b-488f-81ca-d1e460471bda'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8.3_Urodynamics1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:3b02b72a-d7a6-49fa-8c9d-ae0894597b69'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8.3_Urodynamics2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:d7eb14f3-007f-40ed-8989-0e5d34730286'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8 11 Days Post Op',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4, 5, 6, 7, 8]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:0b7493ff-5991-4b3b-af7b-cc2b9597f19f'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat8 3 Days Post Op',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4, 5, 6, 7, 8]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:921589cd-6008-46b6-a985-ea34173eac18'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat9.1_Urodynamics1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e1ef37a5-f39c-4a0d-b581-1dc78178d8b9'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat9.1_Urodynamics1A',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:fce5e7df-ad62-4589-8981-6cff5cc9e489'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat9.1_Urodynamics2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1, 2, 3, 4]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:0812b030-449e-4ff1-8f66-910ed6142581'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat9.2_Urodynamics1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:36396a56-d76c-4f8e-9e69-d085e0fac74d'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat9.3_Urodynamics1',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:e63e5d98-528c-4eeb-9926-701ba4697b12'
  },
  {
    datasetId: 120,
    type: 'plot',
    title: 'Cat9.3_Urodynamics2',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "timeseries", "x-axis": 0, "y-axes-columns": [1]}},
    layout: {margin: {t: 55, l: 200, r: 55, b: 200, pad: 4}},
    pennsieveId: 'package:26d41b00-7b6f-4bb0-a290-ddbc943ef0e3'
  },
  {
    datasetId: 188,
    type: 'plot',
    title: 'Bipolar recording',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true, "layout": {"margin": {"t": 55, "l": 200, "r": 55, "b": 200, "pad": 4}}}},
    pennsieveId: 'package:165d9b00-5be4-428b-942c-8b24ef67412b',
    thumbnailId: 'package:2766b8ea-af11-4d53-9d2d-0f26191a387c'
  },
  {
    datasetId: 188,
    type: 'plot',
    title: 'Fascicle stimulus',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap", "logScale": true, "layout": {"margin": {"t": 55, "l": 200, "r": 55, "b": 200, "pad": 4}}}},
    pennsieveId: 'package:efbe2edd-0e02-4e82-9ada-f7d66d0135b6',
    thumbnailId: 'package:8bf4501c-af74-4502-b3e3-c7775f30013f'
  }
]
