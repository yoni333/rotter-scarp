var iconv = require('iconv-lite');
const https = require('https')
const $ = require('cheerio');
fs = require('fs');
var os = require("os");


class Rotter {


  baseUrl = 'https://rotter.net/forum/scoops1/';
  extension = ".shtml";
  newestScoop = 633283;
  amountOfPages=100
  oldestScoop = this.newestScoop - this.amountOfPages;
  pageUrl = this.baseUrl + this.newestScoop + this.extension
  requestCounter=this.amountOfPages
  rotterData = [];

  constructor() {

    console.log("encode support 1255", iconv.encodingExists("windows-1255"));
    console.log("encode support utf8", iconv.encodingExists("utf-8"));

    console.log('page', this.pageUrl)

  }
  scarpSinglePage(url) {
    return rp(url).then(html => {
      console.log(html);
      data = {
        title: $('.text16b', html).text()
      }
      titles.push(data);
      console.log('data', data)

      return data;
    }).catch(e => console.log)
  }

  savetext(text = 'empty') {
    // console.log(text);


    fs.appendFile('./src/helloworld.txt', text +os.EOL, 'utf8', function (err) {
      if (err) return console.log(err);
      // console.log('savetext > helloworld.txt');
    });
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
        // console.log();

        var decodedBody = this.decodeWin1255(chunks)
        const title = $('h1.text16b', decodedBody).text()

        // console.log(title);
        this.rotterData.push({str: title ,url});
        // console.log('rotterData',this.rotterData)
        
        this.savetext(JSON.stringify({str: title ,index:this.requestCounter,url}))
        console.log(--this.requestCounter);
        // this.requestCounter--;
        // if (this.requestCounter===0){
        //   this.savetext( JSON.stringify(this.rotterData) )
        // }

      });
    });
  }

  loopPages(){

    for (let i = this.oldestScoop; i<=this.newestScoop;i++){
      const   pageUrl = this.baseUrl + i + this.extension
      const delay = (this.newestScoop-i)*2 *1000
      console.log('delay:'+ delay)
      setTimeout(this.bufferFetch.bind(this,pageUrl) , delay)
      
    }

    // console.log('rotterData',this.rotterData)
    
  }

} //end class


const r = new Rotter();
// r.bufferFetch();

r.loopPages()