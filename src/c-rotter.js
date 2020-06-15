var iconv = require('iconv-lite');
const https = require('https')
const $ = require('cheerio');
const SaveData = require('./save-data')

module.exports =  class Rotter {

  baseUrl = 'https://rotter.net/forum/scoops1/';
  extension = ".shtml";
  startPost = 633283;
  amountOfPosts=10
  // rotterData = [];
  endPost;
  pageUrl;
  requestCounter;
  saveData

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
    console.log(SaveData);

    this.saveData = new SaveData()

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

  
  decodeWin1255(chunks) {
    return iconv.decode(Buffer.concat(chunks), 'win1255');
  }

    bufferFetch(url = this.pageUrl) {
    // console.log('bufferFetch', url)
    https.get(url, (res) => {
      var chunks = [];
      res.on('data', (chunk) => {
        console.log('chunk...');

        chunks.push(chunk);
      });
      res.on('end', () => {

        var decodedBody = this.decodeWin1255(chunks)
        
        const postData = this.scarpSinglePage(decodedBody,url)
        // this.rotterData.push(postData);
        
       this.saveData.saveText(JSON.stringify(postData));
        this.saveData.saveDB(postData)
        console.log(--this.requestCounter);
        

      });
    });
  }

  loopPages(){
   this.saveData.clearFile();
    for (let i = this.endPost; i<=this.startPost;i++){

      const   pageUrl = this.baseUrl + i + this.extension
      const delay = (this.startPost-i)*2 *1000
      console.log('delay:'+ delay/1000 + ' secondes')
      // we do it to because the rotter server accept only 1 request from ip per 2 seconds
      setTimeout(this.bufferFetch.bind(this,pageUrl) , delay)
      
    }
  }

} //end class

