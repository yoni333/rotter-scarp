const cheerio = require('cheerio');

const yaml = require('js-yaml');
const  { getIndentation, convertToNestedJson } = require('./utils.js');
const SaveToFiles = require ('./save-files.js');
const { log } = require('console');
const {EOL} = require('os');


 class RotterCommentsScarp {
  $;
  comments = undefined;
  simpleArray = undefined;
  nestedJSON = undefined;
  nestedYAML = undefined;

  constructor(htmlTable,targetUrl) {
    if (htmlTable == undefined) {
      console.log('htmlTable headlines is undefined')
      throw new Error('RotterCommentsScarp:htmlTable_undefined')
    }
    this.$ = cheerio.load(htmlTable, {
      xmlMode: true // Treats the loaded content as XML, which prevents adding extra tags
    });
   
    this.comments = this.readTableRows(this.$);
    if (this.comments.length === 0){
      throw new Error('RotterCommentsScarp:fail_comments')

    }
    this.simpleArray = this.convertRowsDataToArray(this.comments);
    if (this.simpleArray.length === 0) {
      throw new Error('RotterCommentsScarp:fail_simpleArray')

    }
    this.nestedJSON = convertToNestedJson(this.simpleArray);
    // Convert comments to nested YAML
    this.nestedYAML = yaml.dump(this.nestedJSON);
    this.saveToFiles(this.simpleArray, this.nestedJSON, this.nestedYAML,targetUrl);
    // this.printScreen();
  }


  readTableRows($) {
    const comments = []
    // Iterate through table rows
    $('tr').each((index, row) => {
      // console.log('row',row);

      var englishAndDigits = /^[A-Za-z0-9 ]*$/;
      var english = /^[A-Za-z]*$/;
      const columns = $(row).find('td');
      const indentation = getIndentation($(columns[0]).text()); // Indentation is in td 0
      const indexValue = $(columns[3]).text(); // Index is in td 1
      const date = $(columns[2]).text();
      const author = englishAndDigits.test($(columns[1]).text()) === true ? $(columns[1]).text() : $(columns[1]).text().split('').reverse().join('');
      // console.log($(columns[0]).children('font').eq(0).children('a').eq(0).children('font').eq(0).text().split('').reverse().join(''));
      const content = $(columns[0]).children('a').eq(0).children('font').eq(0).children('font').eq(0).text().split('').reverse().join(''); // Content is in td 4
      const links = []; //TODO extrat link to external source
      comments.push({ indexValue, date, author, content, indentation, links });
    });

    return comments
  }

  convertRowsDataToArray(comments) {
    // console.log('comments',comments);
    const simpleArray = comments.map(({ indexValue, date, author, content, indentation }) => ({
      indexValue,
      date,
      author,
      content,
      indentation,
    }))
    // console.log(simpleArray);
    simpleArray.shift()
    return simpleArray;
  }

  saveToFiles(simpleArray, nestedJSON, nestedYAML,targetUrl) {
    let saveToFiles = new SaveToFiles()
    // this.printScreen()
    try {
      
    
    saveToFiles.saveToFiles(
    
      JSON.stringify(simpleArray, null, 2), 
      JSON.stringify(nestedJSON, null, 2), 
      nestedYAML.toString(),
       targetUrl)
      } catch (error) {
        
      }
  }
  printScreen() {
    // Print the results (you can also save them to files)
    console.log('Simple Array:');
    console.log(this.simpleArray);

    console.log('\nNested JSON:');
    console.log(this.nestedJSON);

    console.log('\nNested YAML:');
    console.log(this.nestedYAML);

  }




}


module.exports = RotterCommentsScarp;