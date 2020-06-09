var iconv = require('iconv-lite');
const https = require('https')
const $ = require('cheerio');
fs = require('fs');
var os = require("os");
var Posts =require("./model")
module.exports =  class Rotter {

  file = './src/rotter.json'
  baseUrl = 'https://rotter.net/forum/scoops1/';
  extension = ".shtml";
  startPost = 633283;
  amountOfPosts=10
  rotterData = [];
  endPost;
  pageUrl;
  requestCounter;

  constructor(newestScoop,amountOfPages) {

    this.initVars(newestScoop,amountOfPages);
    
    console.log('newestScoop:',this.startPost)
    console.log('amountOfPages:',this.amountOfPosts)
    console.log('oldestScoop:',this.endPost)
    console.log("encode support 1255", iconv.encodingExists("windows-1255"));
    console.log("encode support utf8", iconv.encodingExists("utf-8"));
    console.log('first page', this.pageUrl)
   
  }

  initVars(newestScoop = undefined , amountOfPages = undefined){
    this.startPost = newestScoop || this.startPost;
    this.amountOfPosts = amountOfPages || this.amountOfPosts;
    this.endPost = this.startPost - this.amountOfPosts;
    this.pageUrl = this.baseUrl + this.startPost + this.extension
    this.requestCounter=this.amountOfPosts
  
  }
  scarpSinglePage(decodedBody,url) {
    const title = $('h1.text16b', decodedBody).text();
    const writer = $('a>b', decodedBody).first().text();
    const postData ={index:this.requestCounter,title,writer ,url};
    return postData;
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
    
    const dbResult = await Posts.PostsCollection.insertOne(postData);
    console.log('end insert post' ,postData.index);

  }

  decodeWin1255(chunks) {
    return iconv.decode(Buffer.concat(chunks), 'win1255');
  }

    bufferFetch(url = this.pageUrl) {
    // console.log('bufferFetch', url)
    https.get(url, (res) => {
      var chunks = [];
      res.on('data', (chunk) => {
        // console.log('chunk...');

        chunks.push(chunk);
      });
      res.on('end', () => {

        var decodedBody = this.decodeWin1255(chunks)
        
        const postData = this.scarpSinglePage(decodedBody,url)
        this.rotterData.push(postData);
        
        this.saveText(JSON.stringify(postData));
        this.saveDB(postData)
        console.log(--this.requestCounter);
        

      });
    });
  }

  loopPages(){
    this.clearFile();
    for (let i = this.endPost; i<=this.startPost;i++){

      const   pageUrl = this.baseUrl + i + this.extension
      const delay = (this.startPost-i)*2 *1000
      console.log('delay:'+ delay/1000 + ' secondes')
      // we do it to because the rotter server accept only 1 request from ip per 2 seconds
      setTimeout(this.bufferFetch.bind(this,pageUrl) , delay)
      
    }
  }

} //end class

