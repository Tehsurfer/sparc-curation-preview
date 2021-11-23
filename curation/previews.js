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
    metadata: {
      version: '1.1.0',
      type: 'plot',
      attrs: {
        style: 'timeseries',
        delimiter: 'tab',
        'y-axes-columns': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        'no-header': true
      }
    },
    title: 'this-is-a-test',
    pennsieveId: 'package:615a5a08-f2f4-4621-a151-ba1271697aae',
    thumbnailId: 'package:9aee14c8-8244-42d9-ad6a-63b7ecc19e6f',
    additionalId: 'package:b092a8c0-c684-4bb6-8383-f9de478473e8'
  },
  {
    datasetId: 29,
    type: 'plot',
    title: 'HB-ICN-NegDDCT',
    metadata: { version: '1.2.0', type: 'plot', attrs: { style: 'heatmap', columnHeaderIndex: 1, columnHeaderSize: 3 } },
    pennsieveId: 'package:975df3ca-ff23-4c50-829b-b28eba4f423a',
    thumbnailId: 'package:cbfda02a-e982-40fb-b7cb-8bb5c70e24d6'
  },
  {
    datasetId: 118,
    type: 'plot',
    title: 'PR1705_Negddct',
    metadata: { version: '1.2.0', type: 'plot', attrs: { style: 'heatmap', columnHeaderIndex: 1, columnHeaderSize: 3 } },
    pennsieveId: 'package:5febabcf-6e49-4d6c-9163-d6e04fc811f8'
  },
  {
    datasetId: 139,
    type: 'plot',
    title: 'Average per strain',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:b220ef4d-deba-4541-a707-315340c6eb46',
    thumbnailId: 'package:d977ef0a-8c06-48ce-a153-badf9d546c93'
  },
  {
    datasetId: 139,
    type: 'plot',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    title: 'Differential expression WistarVsSHR',
    pennsieveId: 'package:bfd00749-f476-4859-868a-672275745f14',
    thumbnailId: 'package:82c05031-c3f5-4d10-8df8-80be0d96443f'
  },
  {
    datasetId: 117,
    type: 'plot',
    title: 'PR1643_Negddct',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:4b82a35a-7914-4080-85fa-f15fb6f984c0'
  },
  {
    datasetId: 117,
    type: 'plot',
    title: 'PR1643 normalised gene counts',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:3730b83a-42d4-44b9-b90e-6f6fefa5b29b'
  },
  {
    datasetId: 116,
    type: 'plot',
    title: 'PR1643-142 Samples Raw Gene Counts',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:7b1a5fe7-c8de-4c29-8c69-69b8186ccffe',
    thumbnailId: 'package:af55ea97-5789-4113-852d-9e5a277cb4e6'
  },
  {
    datasetId: 116,
    type: 'plot',
    title: 'PR1643 Normalised Gene Counts',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:f13a41ae-edd7-408c-89f5-477a23be9591',
    thumbnailId: 'package:8ad4b25c-e979-4f88-8a42-71f8c0f5f309'
  },
  {
    datasetId: 119,
    type: 'plot',
    title: 'RAGP_4subs_final_negddct_matrix',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:dc315029-255d-4c41-86de-4b857d6149a9',
    thumbnailId: 'package:c68657f2-383d-467d-a98e-6bfd98694935'
  },
  {
    datasetId: 119,
    type: 'plot',
    title: 'RAGP_4subs_negdct',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:3df73fd7-2903-4880-80c6-ceb8f9b061ef',
    thumbnailId: 'package:1fa4bf27-a49d-4b04-8eb2-dbebad2d88d9'
  },
  {
    datasetId: 119,
    type: 'plot',
    title: 'RAGP_4subs_negddct',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:156174dc-06e4-4b35-9ffa-2c4f01c91ba4',
    thumbnailId: 'package:468e45e5-00fc-4b7b-a822-7e9b4f77296a'
  },
  {
    datasetId: 119,
    type: 'plot',
    title: 'RAGP_4subs_raw_Ct',
    metadata: { version: '1.2.0', type: 'plot', attrs: { style: 'heatmap', columnHeaderIndex: 1, columnHeaderSize: 3 } },
    pennsieveId: 'package:ac7c976a-459a-4d32-ae43-09cd89340480',
    thumbnailId: 'package:6ab78c2e-f66f-44bb-9d32-70070ce604c5'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'RAGP_4subs_negddct_matrix',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:ebb762ff-7c4a-41ac-ad45-c8044e499832'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'RAGP_4subs_raw_Ct',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:a6c01a56-30f0-4156-b4d1-758bc8e3f7b1'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'RNAseq_PR1643 Normalised Gene Counts',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:5e2789e7-746c-4b38-abd1-f979dedc33ff'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'Genes 60% Expression Across All RAGP',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:8b9aa0e6-d79d-48fe-913b-fdbf08dcda88'
  },
  {
    datasetId: 115,
    type: 'plot',
    title: 'Neuronally Enriched GTEx Genes in our Data',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:30617cbc-f321-4d4c-ad01-d0dc014b7b14'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig-820 Nodose-002 Blood gases',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "y-axes-columns": [0, 1, 2, 3, 4, 5]}},
    pennsieveId: 'package:3a85cca5-9df8-46d8-9a85-3c3deb2524b8',
    thumbnailId: 'package:97059e93-7c8e-4823-b8fc-5546e1244805'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig-820 Nodose-002 Hemodynamics',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries", "y-axes-columns": [0, 1, 2, 3, 4, 5, 6]}},
    pennsieveId: 'package:64ca9585-91a7-405d-ac1a-5db641097085',
    thumbnailId: 'package:163556fb-0988-48b4-b5ac-6377e743fe02'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig013 ICNS15 Blood gases',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:225a8f4d-1e42-4f6b-9cfb-7c1c92adf55d',
    thumbnailId: 'package:f2807c57-7c2f-44f8-b1f4-a8b9a98e2856'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig013 ICNS15 Hemodynamics',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:ecd9693d-d6aa-43f6-9371-0c693aab445c',
    thumbnailId: 'package:30132148-93a7-4c91-8201-8daeccfe5c1a'
  },
  {
    datasetId: 26,
    type: 'plot',
    title: 'Pig47 Stellate Stim Metadata Physiology Hemodynamics',
    metadata: {"version": "1.1.0", "type": "plot", "attrs": {"style": "timeseries"}},
    pennsieveId: 'package:44f1433d-d60a-4dc7-8382-4399088f0fda',
    thumbnailId: 'package:bf300ea0-249c-49b4-922d-01fbb6e698cd'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'postInsert Fill2',
    pennsieveId: 'package:df3b16ef-53fd-4995-be3c-0a8de20ff407'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill9',
    pennsieveId: 'package:e284767d-c873-4fe4-b0a6-4fdefb8ce5f3'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill8',
    pennsieveId: 'package:eaf1399c-8964-4969-847b-1b4fdc3e3344'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill6',
    pennsieveId: 'package:df646e8b-89f5-4504-bb00-c29563002733'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill5',
    pennsieveId: 'package:dbe2eb8a-a445-49e8-afe1-bab77cfb1fb8'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill4',
    pennsieveId: 'package:2b64f387-6d83-4a76-89a5-574378bd309b'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill3',
    pennsieveId: 'package:3e6909ed-6a98-4983-b068-94d81348dc3b'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill2',
    pennsieveId: 'package:3df8fd10-11c0-4975-bd0d-5e21fd90d0e8'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'bolusFill1',
    pennsieveId: 'package:08a6c8b8-bf23-4bbe-ba72-0cdc791fe632'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Side Position Fill2',
    pennsieveId: 'package:7e4d80fd-4f4f-4d6c-a0ca-a75d6ffaa97e'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Side Position Fill1',
    pennsieveId: 'package:ff8b8027-3d76-4cc3-a22d-691e4f4203cc'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'postInsert Fill1',
    pennsieveId: 'package:b32488c8-7e12-448d-b7e8-451234704452'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'preInsert',
    pennsieveId: 'package:26f34b72-9d51-4437-834a-859956d4a5c2'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Baseline Fill2 Acute Cat 1',
    pennsieveId: 'package:d53a87a0-1cac-42ff-8c4d-ef18639916bc'
  },
  {
    datasetId: 132,
    type: 'plot',
    title: 'Baseline Fill1 Acute Cat 1',
    pennsieveId: 'package:635814c0-1b57-414e-a43e-db2fd03477fe'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0519',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:86a5d649-aa62-4b85-ba86-3fb91f1e0536'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0520',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:d5ffdbbd-ea3f-4d99-b0d4-eb6d73024718'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0521',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:e7c8ce5e-0ab8-4846-b735-9dd0c02f23fc'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0309',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:feecada3-f260-457e-bdf1-b94b9d266993'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0515',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:2bca1135-9d0d-4363-b7d9-cab61e213fa4'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0518',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:283cca60-c68e-4b71-82e1-4bd4939ed081'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_1018',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:7ea44bac-a1fa-4b9e-bbf9-b5e2d8591cb8'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0303',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:a293394d-d999-4011-8154-ef0bcf342d77'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '20_0324',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:d2a06d39-5b72-4afe-a71b-a14d9a925ca9'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_0829',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:7826fa03-bf6f-4023-9140-94f366ddb0ad'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_0917',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:757c7420-80c0-4896-b0e0-393e0740334a'
  },
  {
    datasetId: 126,
    type: 'plot',
    title: '19_1016',
    metadata: { "version": "1.1.0", "type": "plot", "attrs": { "style": "timeseries" } },
    pennsieveId: 'package:3b88c0d9-d1b4-424c-9f0d-d8a0a4b8b182'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Abdomen Push Trial',
    pennsieveId: 'package:d5379bd9-79cf-48d9-b320-9ed52c598ba0'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial7 Second Artificial Stool',
    pennsieveId: 'package:57eb1228-312f-4fb7-8c43-4163ab1e16a3'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial2 Stool Calibration',
    pennsieveId: 'package:257c03ab-96dc-4de7-8415-6f8a92630202'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial3 Insertion',
    pennsieveId: 'package:f139631b-c30d-4c66-901a-f12af8409242'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial4 Insertion',
    pennsieveId: 'package:316836dc-c247-4663-b1de-544083649b78'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial8 New Pressure Test',
    pennsieveId: 'package:16186ca4-f9a5-437c-a2b7-483046f77488'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial5 Artificial Stool',
    pennsieveId: 'package:bd1ff1e2-6176-43aa-be57-1e9f3a152629'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'trial6 Removal of First Artifical Stool',
    pennsieveId: 'package:fbbc8f5c-9cbe-4d1f-b225-702620d14578'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'posthoc Calibration',
    pennsieveId: 'package:98745016-ff1d-4c47-81da-d3d1a8940ff3'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'posthoc ConducCalib',
    pennsieveId: 'package:ffc0fd0c-76a6-4d92-b9f3-e68a50575a39'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Ian PressCalib2',
    pennsieveId: 'package:7d1ff231-a809-4207-97b4-508b9aec021e'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparotomy Pressure Trial',
    pennsieveId: 'package:8c450dda-86e5-4628-8fd6-bed662dcaf4f'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparotomy pressure trial - Stool Movement',
    pennsieveId: 'package:3735b5eb-fd8e-468e-a5f8-a8a0cadee038'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparatomy pressure trial - Abdomen Closed',
    pennsieveId: 'package:5af8bc1a-ec3e-46f3-a655-8c67c45254e0'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laparotomy pressure trial - Empty out stool HC Stool',
    pennsieveId: 'package:99c5d69e-016a-4b1b-97c3-f97d8d0ee714'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Laprotomy pressure trial - Empty out stool 2',
    pennsieveId: 'package:a1e027a3-d208-454d-ae7e-ff3272c53e46'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Pre-insert Calibration',
    pennsieveId: 'package:ea199df6-fc25-4570-b204-2f2803125c49'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Artificial Stool Volume',
    pennsieveId: 'package:9561aa4c-55f8-4775-b4e5-a068f66658bc'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Balloon Insertion',
    pennsieveId: 'package:42a25127-27e7-4314-9388-7f0325fed1cb'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Put Artificial Stool Volume Inside Stool Over Sensor',
    pennsieveId: 'package:f4e9193d-0bef-4877-adea-21dab30303bb'
  },
  {
    datasetId: 114,
    type: 'plot',
    title: 'Put Artificial Stool Volume Inside Stool Over Sensor Advancing',
    pennsieveId: 'package:f4c935ca-f139-41d0-a0e3-239d2a6af679'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill1 9-02-50 AM',
    pennsieveId: 'package:b5811ced-55fb-4c8c-9520-511d7ad09617'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill2 11-45-38 AM',
    pennsieveId: 'package:945be1f0-31b2-4ea0-a9a0-b16042b126fb'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill2 11-57-18 AM',
    pennsieveId: 'package:4e8dac59-6cdb-40cf-a010-a3239366b9aa'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 Fill1 9-18-30 AM',
    pennsieveId: 'package:e6c91af4-23dc-4f42-85ce-48c790f6b508'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat1 PostFill Empty Bladder',
    pennsieveId: 'package:d0e6adb0-5dc4-44e0-9750-0a35fce7a306'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses2 Cat1 Fill1',
    pennsieveId: 'package:c0f4bb9c-69cd-41f7-be80-d1d50f85b5ff'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses1 Cat2 Fill2',
    pennsieveId: 'package:423cfa79-e587-4c75-9de1-c782f5279d7f'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses3 Cat1 Fill1',
    pennsieveId: 'package:92a240cf-398d-4be1-b8a7-460f33bd2c51'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Ses3 Cat1 Fill2',
    pennsieveId: 'package:16a68a7b-43b7-44df-b6cd-9bceeb672fae'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2 Surgery1 postSurgery Fill1',
    pennsieveId: 'package:27a5ab42-4b1c-4b9c-90c2-0019e7f8a871'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2 Surgery1 preSurgery Fill1',
    pennsieveId: 'package:3e2d7ccb-5a09-4603-8963-2740021b1ee8'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.2 Surgery2 Fill1',
    pennsieveId: 'package:4bc1a212-4181-4b90-8284-853dfa96fbfe'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.2 Surgery2 Fill2',
    pennsieveId: 'package:1e5068f8-713b-41d3-8971-1e88d8ea9c6a'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.3 Surgery3 Fill1',
    pennsieveId: 'package:19694b51-ece7-4684-8be1-25962a1aa905'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat2.3 Surgery3 Fill2',
    pennsieveId: 'package:2f9dc2ff-6cb8-4f42-b722-257a93802672'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.1 Surgery1 PreOp Fill1',
    pennsieveId: 'package:1c17c682-e2b9-4133-8b85-8514a34a3b9b'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.1 Surgery1 PostOp Fill1',
    pennsieveId: 'package:27d06ed4-9213-4998-b3f1-8f9e3838a78c'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.2 Surgery2 Fill1',
    pennsieveId: 'package:77b73911-cb68-47cd-80ab-3a75faab8bc1'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.2 Surgery2 Fill2',
    pennsieveId: 'package:8bdd898e-9651-4004-9552-b62e4320e941'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat3.3 PostOp Day 30 Fill1',
    pennsieveId: 'package:53f7411f-7dec-4f87-ae77-e2fa3bee15f3'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'ChronicCat 1.1.1',
    pennsieveId: 'package:75fe41ad-61a4-4265-bda2-980dfb961338'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'ChronicCat 1.1.2',
    pennsieveId: 'package:81b6f432-4521-4bc9-87a0-4f7cfd810676'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat4.2 Fill1',
    pennsieveId: 'package:e2a419e6-b32c-415f-b224-52e828510229'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat4.2 Fill2',
    pennsieveId: 'package:ccb90d56-1482-4085-b3e0-9ae1cd2e7ae1'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat 4.3 Fill1',
    pennsieveId: 'package:69cfce9d-3a32-4f07-86e9-3eefae9f9852'
  },
  {
    datasetId: 145,
    type: 'plot',
    title: 'Cat4.3 Fill2',
    pennsieveId: 'package:75f8aff0-036d-43da-b5e4-f5529f500eb2'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_0730',
    pennsieveId: 'package:a112a193-ea69-4821-954e-24655ea969a4'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1117',
    pennsieveId: 'package:a0868fa9-f720-4b9f-9f67-c5d04db8a53e'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1119',
    pennsieveId: 'package:5590fdc3-85b3-42bf-a77d-d4f1585bc424'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1120',
    pennsieveId: 'package:0fa897cd-fc99-4140-beef-fcc261e7a529'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1201',
    pennsieveId: 'package:d494d5df-0d9c-419b-bd16-c426d37f4917'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1214a',
    pennsieveId: 'package:9ae5c331-3910-4780-b096-9c888e5d691d'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '20_1215',
    pennsieveId: 'package:98731b79-f86c-4067-8e5a-615ea8aa96cf'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0104',
    pennsieveId: 'package:7e85c332-0f40-461e-a2b8-fbe43e768332'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0105a',
    pennsieveId: 'package:e0bd4535-bdb9-44e5-ac2a-5bd41e187a1d'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0105b',
    pennsieveId: 'package:060c5284-7c4d-4db9-91a9-6aa5ca5c38c4'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0106',
    pennsieveId: 'package:e0810cd6-62c8-41af-ab80-2ca4128fef3a'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0107',
    pennsieveId: 'package:17aa92b9-a00a-437d-afea-2bf9d744a1d3'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0119',
    pennsieveId: 'package:64f9e242-702e-4a11-a6bc-10e47289b802'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0120',
    pennsieveId: 'package:c7e01757-a77e-41c8-925c-9dd525e34779'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0202',
    pennsieveId: 'package:8268251b-c676-4669-8873-f5820355fb78'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0203a',
    pennsieveId: 'package:7c0900e0-56e5-4370-97c4-42ad40d83e7c'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0203b',
    pennsieveId: 'package:4211e9ee-12cf-470c-9dcd-a9b9e6265300'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0315',
    pennsieveId: 'package:b34a4cea-4f22-4a75-8909-189269648976'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0316b',
    pennsieveId: 'package:d62a3323-6e3d-41c1-aada-3fe885525096'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0318a',
    pennsieveId: 'package:7399d9e4-b0c7-45dc-bcf1-f50ff63b188a'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0318b',
    pennsieveId: 'package:9f7e7ef8-80b3-4dec-858b-947ef232a625'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0319',
    pennsieveId: 'package:b21217ec-eb55-410c-9c17-bfd0adef182d'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0326',
    pennsieveId: 'package:1ff02559-b9c7-41bd-bae6-d9d2b116b7d3'
  },
  {
    datasetId: 148,
    type: 'plot',
    title: '21_0329b',
    pennsieveId: 'package:ec21fb67-037b-4dc0-be56-de2ecef1a0a5'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub10 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:10d905a5-9cd1-4dc8-af79-8bd9c9551be6'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub10 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:8ee78065-1b60-4c4b-8da9-7d62ea9f5395'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub10 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:b17ecc40-3745-4ba9-8bed-0f389781f3de'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub11 Sam1 Preesure Preconditioning',
    pennsieveId: 'package:9f08a52a-736a-4825-a232-6e096d56b8b6'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub11 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:bb850a45-9a0a-4a10-90a9-e5cf5d8ac168'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub11 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:2ce44214-34cb-4d9d-be56-6b2f9732ba29'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub12 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:3d5f470c-371d-41c9-a2f8-c2c748d58d18'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub12 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:ba746a4f-1ed8-4504-8142-066f0818ebc7'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub12 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:ee3d4ec0-667e-4cdf-858b-835a216dfe6c'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub5 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:b1469896-1a35-4014-997e-05e3577f84ca'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub5 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:87bfe5ce-3d89-4dd3-9df0-083499f7a204'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub5 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:89b58f84-e788-4ed5-81f6-6ac60f12c687'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub6 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:1f8f1582-da35-4f56-8544-2e2a86f92f92'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub6 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:571593a0-1377-4e93-99b8-f53dd40b52a4'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub6 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:b50d51a4-f2ce-4d42-877c-1213bf878f2c'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub7 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:76c5a955-7604-4ff4-9b71-c50fb288384a'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub7 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:f5deff5a-16cf-42cb-a668-4375c016d443'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub8 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:fce1d052-5068-4de5-ba7b-8908bcf1a228'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub8 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:d33fe7df-8770-4dc8-bff3-7b490866f374'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:e2b05ff5-36d3-49c5-bcb3-310bcc030c7f'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9 Sam1 Strech Preconditioning',
    pennsieveId: 'package:9fb092b6-8daa-4e86-8ad2-4358173581b2'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:36da4fd2-2035-44d3-820a-f92974f6a282'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9170 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:9873902d-cf0f-4a1a-bcd6-769f31a1f041'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9170 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:0d6966ed-2ad0-4916-a55b-ce567b80dfa7'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9170 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:d298b82f-a80f-4a76-a4f2-5eae92ee682a'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9238 Sam1 Pressure Preconditioning',
    pennsieveId: 'package:6edaee3d-e4bb-4557-9ee6-56e8be6d35be'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9238 Sam1 Stretch Preconditioning',
    pennsieveId: 'package:3bcf64da-bdf5-4cb1-b8be-3767bbb7141c'
  },
  {
    datasetId: 142,
    type: 'plot',
    title: 'Sub9238 Sam1 Stretch Pressure Twist',
    pennsieveId: 'package:d67aa547-d7a7-4734-8083-a0cb3bd97b70'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180809_G5',
    pennsieveId: 'package:0de9ac31-9f4d-48af-8b4a-7b8e38bf7ee9'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180813_G5',
    pennsieveId: 'package:d7e3d21a-2290-405b-a6f2-bbef20595d9a'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180821_G5',
    pennsieveId: 'package:bce0c156-00e8-4586-a578-78380e806189'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180827_G5',
    pennsieveId: 'package:224c669d-2be3-484d-afc4-00504e7b42ff'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180828_G2',
    pennsieveId: 'package:d2182a1f-1d16-4bff-b83b-fa06a9db9b4d'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180905_G1',
    pennsieveId: 'package:392e4256-1f5d-4c3a-9f29-5602c7d51f82'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180906_G3',
    pennsieveId: 'package:876f8bf5-b0e0-4ce4-8a51-35b6ae127142'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180911_G5',
    pennsieveId: 'package:23de167c-6a27-4fee-9373-bf70d72861db'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20180912_G5',
    pennsieveId: 'package:f051e0a4-7183-4daf-87a5-0e8206273681'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181009_G5',
    pennsieveId: 'package:6e090115-646f-4263-8c8d-5130f20f89e9'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181018_G1',
    pennsieveId: 'package:85a5e8f3-8458-4a5d-903e-1409338333e7'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181018_G3',
    pennsieveId: 'package:3e2212fa-9982-4ba0-8f4f-bcc0eb1850b3'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181029_G4',
    pennsieveId: 'package:1d728d4d-1a51-45c4-a419-4aa625683a47'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190212_G1',
    pennsieveId: 'package:50af1be4-4f81-4228-813f-8d2e8b6da430'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190214_G1',
    pennsieveId: 'package:2a39814e-97c7-4d64-bbf3-aa7a97055c50'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190220_G3',
    pennsieveId: 'package:814ff884-dedb-4c22-805d-b0e2fb43a77a'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190220_G5',
    pennsieveId: 'package:e5fdb91c-e9aa-4397-b632-f4d7a3a1cc80'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190617_G1',
    pennsieveId: 'package:b06dfc78-4e09-420c-8431-f81101b58d8a'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190618_G1',
    pennsieveId: 'package:8bab5053-8925-41a1-b78c-70d336458250'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190618_G3',
    pennsieveId: 'package:b7381a2b-cde0-483a-952f-0b9269242b02'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190619_G1',
    pennsieveId: 'package:19db1ffc-5f71-40eb-9881-40655ca31cee'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190624_G1',
    pennsieveId: 'package:02a4df82-b0b9-40e6-a41c-05dbb8d7a5d1'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190626_2_G1',
    pennsieveId: 'package:de9942c4-2789-46e6-88a8-6ed9c60b7df1'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190626_G1',
    pennsieveId: 'package:c93419a8-3fc9-4acd-9bba-ed597a44c4de'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190701_2_G3',
    pennsieveId: 'package:d521071b-bab5-4643-b9c3-76e40ea5a621'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190701_G2',
    pennsieveId: 'package:bbef6e4b-ef7a-4491-934d-249ed21cdfca'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190806_G1',
    pennsieveId: 'package:88bbbc97-9bda-4d04-96aa-b4569cda4af6'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190905_G2',
    pennsieveId: 'package:91648efd-8aa8-41ec-bac9-01cea452ccaa'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181010_G1',
    pennsieveId: 'package:3e514c69-0368-4c8b-b6f4-1bd7e5611fe2'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20181127_G3',
    pennsieveId: 'package:598170e8-414b-40f4-99e8-08cf0b54b49c'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190226_G2',
    pennsieveId: 'package:648bea83-be18-4ada-9e7b-c80b0b3af329'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190228_G4',
    pennsieveId: 'package:03e257bd-adbc-4de8-a9ae-05ad77c564f8'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190306_G1',
    pennsieveId: 'package:2cd902fb-bf35-40ee-9a46-ab4879b3ab31'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190306_G2',
    pennsieveId: 'package:6a0283f9-0dd4-4690-a46d-c9cd7a95e2b2'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190306_G3',
    pennsieveId: 'package:d55d41c9-9e86-4cb3-912e-e646fcf6a882'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190312_G1',
    pennsieveId: 'package:86656ef9-d6c4-4207-b27c-65821820e203'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190312_G3',
    pennsieveId: 'package:d271783e-0dca-4988-b514-ca29a1d114f3'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190312_G4',
    pennsieveId: 'package:68fa1138-fcce-440a-9759-d2fdeb464abc'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190320_G1',
    pennsieveId: 'package:d4ff0303-025e-40b2-8211-63ebc610c29c'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190326_G2',
    pennsieveId: 'package:d609f383-a0f0-4ffd-87f8-f545e9796087'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190326_G3',
    pennsieveId: 'package:63af01a0-b4ae-4166-b9d0-f534dbef37d6'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190408_G1',
    pennsieveId: 'package:d7eaa3bf-6381-454a-9f23-7d100f764805'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190806_G2',
    pennsieveId: 'package:e8fa1ae0-3864-4841-83dc-eefbe018a9ff'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190812_G1',
    pennsieveId: 'package:436925ef-16c6-4d67-81e4-b6eb2fc26a25'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190826_G1',
    pennsieveId: 'package:e537e3cc-1adb-4a92-9baa-8128ff356e86'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190828_G1',
    pennsieveId: 'package:898571db-fb0f-42c1-bd8d-699e213dab16'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190828_G2',
    pennsieveId: 'package:eb336031-2417-4912-9ece-d34df15449d1'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190904_G1',
    pennsieveId: 'package:cc2f84c3-da9c-4302-8f10-777803e10602'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190916_2_G1',
    pennsieveId: 'package:54005d0a-43c3-4c68-a31d-d0e216440ac4'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190912_G1',
    pennsieveId: 'package:b915fadb-9553-40e6-98e3-ce6d9ca98c5e'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190912_G2',
    pennsieveId: 'package:6e7829fd-6c73-49e6-bf84-47820516ebee'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190913_G1',
    pennsieveId: 'package:95e8a7f7-3934-4a27-ae8a-b403f6e6bbf7'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190913_G2',
    pennsieveId: 'package:10cf9d00-3446-4212-8dd2-9d29696eca6e'
  },
  {
    datasetId: 124,
    type: 'plot',
    title: 'ISP_20190916_G1',
    pennsieveId: 'package:e06defa6-2cf0-477d-973d-afee6fda77c9'
  },
  {
    datasetId: 153,
    type: 'plot',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    title: 'Rectal temperature change',
    pennsieveId: 'package:93869d71-fc32-43b3-8952-2a9d5920f235',
    thumbnailId: 'package:9f2726bc-71c8-4c62-b74a-b43ec2034d7b'
  },
  {
    datasetId: 153,
    type: 'plot',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    title: 'Rectal temperature data',
    pennsieveId: 'package:9cc575d8-287c-4384-89e0-514ea46182d0',
    thumbnailId: 'package:39d522d7-3383-4033-aed7-53519aef345e'
  },
  {
    datasetId: 153,
    type: 'plot',
    title: 'iBAT temperature change',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:a49f708c-341d-4db0-80e2-d12970b671f9',
    thumbnailId: 'package:816dc01f-fefd-436d-b465-21471682598b'
  },
  {
    datasetId: 153,
    type: 'plot',
    title: 'iBAT temperature data',
    metadata: {"version": "1.2.0", "type": "plot", "attrs": {"style": "heatmap"}},
    pennsieveId: 'package:b0ea3d0b-2649-422c-afe8-2ebccd432c69',
    thumbnailId: 'package:bc8484a8-d74c-48c1-8da4-6fffa559e3fd'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 10Hz Stimulation, Afferent fibres',
    pennsieveId: 'package:361648a2-2e9c-496e-aca8-3b04c4b668bf'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 10Hz Stimulation, Afferent and Efferent fibres',
    pennsieveId: 'package:363e6489-d3f5-49ca-87a7-1646265d1582'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 30Hz Stimulation, Afferent fibres',
    pennsieveId: 'package:4c176c6a-43a1-4ecf-b443-26730212b64a'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'L1 30Hz Stimulation, Afferent and Efferent fibres',
    pennsieveId: 'package:487cd760-3bb4-434f-b94d-1a934fcd118c'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 10Hz Stimulation, Afferent Fibres',
    pennsieveId: 'package:5c12696c-f0b3-478a-abc3-218675765285'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 10Hz Stimulation, Afferent and Efferent fibres',
    pennsieveId: ''
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 30Hz Stimulation, Afferent fibres',
    pennsieveId: 'package:b145c58b-d444-4022-a4a3-c30ff5184b41'
  },
  {
    datasetId: 149,
    type: 'plot',
    title: 'T12 30Hz Stimulation, Afferent and Efferent fibres',
    pennsieveId: 'package:4479e1e1-263f-4ab1-b5d8-a61d4358e13a'
  }
]
