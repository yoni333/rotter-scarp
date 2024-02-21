const fs = require('fs');
const path = require('path');
class saveToFiles {


    constructor() {

    }


    saveToFiles(simpleArray, nestedJSON, nestedYAML, targetUrl) {

        console.log("saveToFiles ", targetUrl);
        // Save results to files (optional)
        const outputDir = path.join(__dirname, '..', '..', 'output');

        fs.mkdir(outputDir, { recursive: true }, (err) => {
            if (err) throw err;
        });
        fs.writeFileSync(outputDir + "/" + 'comments_simple_array.json', simpleArray);
        //how to write athe aboe 2 lines in 1 line  



        fs.writeFileSync('comments_nested_json.json', nestedJSON);
        fs.writeFileSync('comments_nested_yaml.yaml', nestedYAML);

    }
}

module.exports = saveToFiles;