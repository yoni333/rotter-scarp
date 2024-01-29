// const puppeteer = require('puppeteer');

// async function navigateToPage(url) {
//   // Launch a new browser instance
//   const browser = await puppeteer.launch({headless: 'new'});

//   // Open a new page
//   const page = await browser.newPage();

//   // Navigate to the specified URL
//   await page.goto(url);

//   // You can perform additional actions here, like extracting content
//   const content = await page.content();
//   console.log(content); // Outputs the HTML content of the page

//   // Close the browser
//   await browser.close();
// }

// navigateToPage('https://rotter.net/forum/scoops1/835354.shtml');
// var cheerio = require('cheerio');
// var iconv = require('iconv-lite');
// var https = require('https')

// let requestCounter = 0;
// function getDataElement(cheer,html){

//     let noHeader = cheer('div', html).eq(1)

//     return noHeader
//   }
// function scarpSinglePage(cheer,decodedBody,url) {
//     const title = cheer('h1.text16b', decodedBody).text();
//     const writer = cheer('a>b', decodedBody).first().text();
//     const postData ={index:requestCounter,title,writer ,url};
//     return postData;
//   }


//   function decodeWin1255(chunks) {
//     return iconv.decode(Buffer.concat(chunks), 'win1255');
//   }

// function bufferFetch(url ="https://rotter.net/forum/scoops1/835354.shtml") {
//     // console.log('bufferFetch', url)
//     https.get(url, (res) => {
//       var chunks = [];
//       res.on('data', (chunk) => {
//         // console.log('chunk...');

//         chunks.push(chunk);
//       });
//       res.on('end', () => {

//         let decodedBody = decodeWin1255(chunks)
//         console.log(decodedBody);
//         const $ = cheerio.load(decodedBody);
//         let htmlCherrio = getDataElement($,decodedBody)
//          console.log(htmlCherrio)

//         const postData = scarpSinglePage($,htmlCherrio,url)
//         console.log(postData);
//         // this.rotterData.push(postData);

//     //    this.saveData.saveText(JSON.stringify(postData));
//     //     this.saveData.saveDB(postData)
//     //     console.log(--this.requestCounter);


//       });
//     });
//   }

//   bufferFetch()
import { log } from 'console';
import fetch from 'node-fetch';

async function runme(targetUrl) {




  const response  = await fetch(targetUrl)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const buffer =await response.arrayBuffer();
  let decodedContent = "";

  try {
    // Trying to decode using TextDecoder (limited encoding support)
    const decoder = new TextDecoder('windows-1255');
    decodedContent = decoder.decode(buffer);
  } catch (e) {
    console.error('Decoding error:', e);
    return;
  }
 
  

  const responseLocal = await fetch("http://localhost:3000", {
    method: 'POST', // Specify the method
    mode: 'cors',
    headers: {
    //  "Content-Type":" text/html; charset=utf-8"// Specify the content type
     "Content-Type":"application/json"// Specify the content type
    },
    body:JSON.stringify({tetxtData:decodedContent,targetUrl}) // Convert the JavaScript object to a JSON string
  });

  if (!responseLocal.ok) {
    throw new Error(`HTTP error! Status: ${responseLocal.status}`);
  }

  //console.log(html); // Log the HTML content of the page
  // Process the HTML content as needed
}
 

function loopposts(start){

  for (let index = start; index <start+10; index++) {
    runme("https://rotter.net/forum/scoops1/"+index+".shtml")
  }
    
}

loopposts(700000)