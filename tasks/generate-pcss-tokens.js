const fs = require("fs");

function generateTokensForJSON(fileName, jsonData) {
  let output = `/** DO NOT MODIFY! This file has been auto-generated from task:generate-pcss-tokens.\nFor changing, consolidate dist/json/${fileName}.js and rerun the task. */\n\n`;

  Object.keys(jsonData).forEach((key) => {
    output += "$" + key + ": " + jsonData[key] + ";\n";
  });

  output += "\n";

  console.log(output);

  fs.writeFileSync(__dirname + `/../dist/pcss/${fileName}.pcss`, output);
}

generateTokensForJSON("colors", require("../dist/json/colors.json"));
generateTokensForJSON("metrics", require("../dist/json/metrics.json"));
generateTokensForJSON("typography", require("../dist/json/typography.json"));
generateTokensForJSON("animations", require("../dist/json/animations.json"));
