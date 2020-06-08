const rp = require('request-promise');
var iconv = require('iconv-lite');
const https = require('https')
const $ = require('cheerio');
fs = require('fs');
const puppeteer = require('puppeteer');

console.log("encode support 1255", iconv.encodingExists("windows-1255"));
console.log("encode support utf8", iconv.encodingExists("utf-8"));


const baseUrl = 'https://rotter.net/forum/scoops1/';
const extension = ".shtml";
const newestScoop = 633283;
const oldestScoop = newestScoop - 10;
const pageUrl = baseUrl + newestScoop + extension
console.log('page', pageUrl)


// puppeteer
//   .launch()
//   .then(function(browser) {
//     return browser.newPage();
//   })
//   .then(function(page) {
//     return page.goto(pageUrl).then(function() {
//       return page.content();
//     });
//   })
//   .then(function(html) {
//     // console.log(html);
//     data = {
//       title: $('h1.text16b', html).text().split("").reverse().join("")
//     }
//     //  titles.push(data);
//     console.log('data', data)

//     return data;
//   })
//   .catch(function(err) {
//     //handle error
//   });



async function bufferFetch(url) {
  https.get(url, function (res) {
    var chunks = [];
    res.on('data', function (chunk) {
      console.log('chunk...');

      chunks.push(chunk);
    });
    res.on('end', function () {
      console.log();

      var decodedBody = iconv.decode(Buffer.concat(chunks), 'win1255');
      const str = $('h1.text16b', decodedBody).text()

      console.log(str);
      savetext(str)
    });
  });
}
// bufferFetch(pageUrl)


function savetext(text = 'empty') {
  console.log(text);


  fs.writeFile('./src/helloworld.txt', text, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('savetext > helloworld.txt');
  });
}

rp(pageUrl).then(html => {
  // console.log(html);
  data = {
    title: $('h1 > .text16b', html).text().split("")
  }
  titles.push(data);

  console.log('data', data)

  return data;
}).catch(e => console.log)

// titles =[];
// for (let i = newestScoop; i > oldestScoop; i--) {
//   scarpSinglePage(baseUrl+i).then(res=>{
//     console.log('titles',titles)
//     console.log('res',res)
//   })
// } 


function scarpSinglePage(url) {
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

// rp(url)
//   .then(function (html) {
//     //success!
//     // console.log(html);
//     const baseUrl = 'https://en.wikipedia.org'
//     const data = $('td > b > a', html)
//     console.log(data.length);
//     // console.log($('td > b > a', html));
//     const wikiUrl = [];
//     const presidentsData = [];

//     data.map((index, element) => {
//       // console.log(element.attribs.href);
//       wikiUrl.push(baseUrl + element.attribs.href)
//       // parsePresidentPage(baseUrl+element.attribs.href)
//     })

//     console.log('wikiUrl', wikiUrl)
//     return wikiUrl

//   }).then(wikiUrl => {
//     console.log('wikiUrl', wikiUrl)
//     console.log('start parsing')

//    return Promise.all(
//       wikiUrl.map(url => parsePresidentPage(url))
//     ).catch(e=>console.log)
//   })

//   .then(presidents => {
//     console.log('presidents', presidents);

//   })
//   .catch(function (err) {
//     //handle error
//   });


// function parsePresidentPage(url) {
//   // console.log(url);

//   return rp(url)
//     .then(html => {
//       return {
//         name: $('.firstHeading', html).text(),
//         birthday: $('.bday', html).text(),
//       };
//     })
//     .then(res => {
//       // console.log(res);
//       return res
//     })
//     .catch(e => {

//     });
// }
