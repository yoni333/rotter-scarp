class saveToFiles {


    constructor(){

    }


    saveToFiles(simpleArray, nestedJSON, nestedYAML, targetUrl) {
        console.log("saveToFiles ", targetUrl);
        // Save results to files (optional)
        fs.writeFileSync('comments_simple_array.json', JSON.stringify(simpleArray, null, 2));
        fs.writeFileSync('comments_nested_json.json', JSON.stringify(nestedJSON, null, 2));
        fs.writeFileSync('comments_nested_yaml.yaml', nestedYAML);

    }
}

module.exports = saveToFiles;