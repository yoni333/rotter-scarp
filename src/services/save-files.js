const fs = require('fs');
const path = require('path');
const { extractPostNumberFromUrl } = require('./utils.js')
class saveToFiles {


    constructor() {

    }


    saveToFiles(simpleArray, nestedJSON, nestedYAML, targetUrl, output = 'output') {

        console.log("saveToFiles ", targetUrl);
        // Save results to files (optional)
        const outputDir = path.join(__dirname, '..', '..', output);

        fs.mkdir(outputDir, { recursive: true }, (err) => {
            if (err) throw err;
        });
      //  fs.writeFileSync(path.join(outputDir, extractPostNumberFromUrl(targetUrl) + '_comments_simple_array.json'), simpleArray);
        fs.writeFileSync(path.join(outputDir, extractPostNumberFromUrl(targetUrl) + '_comments_nested_json.json'), nestedJSON);
       // fs.writeFileSync(path.join(outputDir, extractPostNumberFromUrl(targetUrl) + '_comments_nested_yaml.yaml'), nestedYAML);

    }
}

module.exports = saveToFiles;