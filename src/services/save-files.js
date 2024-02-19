const fs = require('fs');

class saveToFiles {


    constructor(){

    }


    saveToFiles(simpleArray, nestedJSON, nestedYAML, targetUrl) {

        console.log("saveToFiles ", targetUrl);
        // Save results to files (optional)
        fs.writeFileSync('comments_simple_array.json', simpleArray);
        fs.writeFileSync('comments_nested_json.json', nestedJSON);
        fs.writeFileSync('comments_nested_yaml.yaml', nestedYAML);

    }
}

module.exports = saveToFiles;