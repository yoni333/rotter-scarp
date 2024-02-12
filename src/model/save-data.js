fs = require('fs');
var os = require("os");
var Posts =require("./model")
var URL = require("url");
var PATH = require("path");

module.exports = class SaveData {

  saveToFile
  file = './src/data/rotter.json'

  constructor( saveToFile = true){
    this.saveToFile=saveToFile;
  }
  clearFile(file = this.file){
    fs.writeFile(file, '', 'utf8', function (err) {
      if (err) return console.log(err);
    });
  }
  saveText(text = 'empty' ,file = this.file) {
    fs.appendFile(file, text +os.EOL, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  }
  fullPage(text= 'empty' ,url){
    var parsed = URL.parse(url);
    const fileName = PATH.basename(parsed.pathname);
    

    const filePath = './src/data/'+ fileName 
    this.clearFile( filePath);
    this.saveText(text,filePath)
  }

  async saveDB(postData){
    
    //TODO add try catch block
    const dbResult = await Posts.PostsCollection.insertOne(postData);
    console.log('end insert post' ,postData.index);

  }


}