const playwright = require("playwright");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { viewportHeight, viewportWidth, browsers, options } = config;

const routes = {
  pathScreenshots_v446: "screenshots_v446/",
  pathScreenshots_v342: "screenshots_v342/",
};
const pruebas = {
  CrearPost: 5,
  CrearTag: 2,
  DeleteTag: 1,
  EditarPost: 5,
  EditarTag: 1,
  EliminarPost: 5,
};
let resultInfo = {};
let datetime = new Date().toISOString().replace(/:/g,".");
async function executeTest() {
  if (!fs.existsSync("./results/")) {
    fs.mkdirSync("./results/", { recursive: true });
  }
  for (const prueba in pruebas) {
    for (let id = 1; id <= pruebas[prueba]; id++) {
      const data = await compareImages(
        fs.readFileSync(`${routes.pathScreenshots_v342}${prueba}-${id}.png`),
        fs.readFileSync(`${routes.pathScreenshots_v446}${prueba}-${id}.png`),
        options
      );

      resultInfo = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      };

      fs.writeFileSync(
        `./results/compare-${prueba}-${id}.png`,
        data.getBuffer()
      );
    }
  }
  fs.writeFileSync(`./results/report.html`, createReport(datetime, resultInfo));
  fs.copyFileSync("./index.css", `./results/index.css`);

  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  //   return resultInfo;
}
(async () => console.log(await executeTest()))();

function browser(info){
    res = ''
    for (const prueba in pruebas) {
        for (let id = 1; id <= pruebas[prueba]; id++) {
        
    res += `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Test: ${prueba} - ${id}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../screenshots_v446/${prueba}-${id}.png" id="refImage" label="Reference"
        title="${prueba}-${id}">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../screenshots_v342/${prueba}-${id}.png" id="testImage" label="Test"
        title="${prueba}-${id}">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="compare-${prueba}-${id}.png" id="diffImage" label="Diff">
      </div>
    </div>
    </div>
    `
        }
    }
    return res
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for Ghost v3.42 & v4.46</h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${browser(resInfo)}
            </div>
        </body>
    </html>`
}
