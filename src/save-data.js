fs = require('fs');
var os = require("os");
var Posts =require("./model")


module.exports = class SaveData {

  saveToFile
  file = './src/data/rotter.json'

  constructor( saveToFile = true){
    this.saveToFile=saveToFile;
  }
  clearFile(){
    fs.writeFile(this.file, '', 'utf8', function (err) {
      if (err) return console.log(err);
    });
  }
  saveText(text = 'empty') {
    fs.appendFile(this.file, text +os.EOL, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  }

  async saveDB(postData){
    
    //TODO add try catch block
    const dbResult = await Posts.PostsCollection.insertOne(postData);
    console.log('end insert post' ,postData.index);

  }


}