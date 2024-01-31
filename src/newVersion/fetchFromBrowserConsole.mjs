
import { log } from 'console';
import fetch from 'node-fetch';

async function runInBrowser(targetUrl) {




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
    runInBrowser("https://rotter.net/forum/scoops1/"+index+".shtml")
  }
    
}

loopposts(700000)