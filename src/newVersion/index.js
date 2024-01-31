const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const keypress = require('keypress');
const { log } = require('console');

// Configuring readline and keypress
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

// Reading configuration
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));
let { start, stop } = config;
log(`start: ${start} stop: ${stop}`);
const url = 'https://rotter.net/forum/scoops1'; // Replace with the actual URL of the website
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to save the current position
function saveCurrentPosition(current) {
  fs.writeFileSync('config.json', JSON.stringify({ ...config, start: current }, null, 2));
}



function logFailedRequest(current, url) {
  const logEntry = `${current}, ${url}\n`;
  fs.appendFileSync(path.join(__dirname, 'failed-requests.csv'), logEntry, 'utf-8');
}
axios.interceptors.response.use(response => {
    //  console.log('Response:', response);
      return response;
    }, error => {
    //    console.log('Error:', error);
      return Promise.reject(error);
    });
// Function to make requests with rate limiting
async function makeRequests(start, stop) {
  let current = start;
  const rateLimit = 1; // Max requests per interval
  const interval = 3000; // Interval in milliseconds
 

  function streamToBuffer(stream) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      stream.on('data', chunk => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  }

  const intervalId = setInterval(async () => {
    for (let i = 0; i < rateLimit; i++) {
        log(current , stop,current > stop)
      if (current > stop) {
        clearInterval(intervalId);
       // printErrorFile(); // And also here
        console.log('Completed all requests.');
        return;
      }

      let fullUrl =`${url}/${current}.shtml`
      try {
        log(fullUrl , current)

       
        const writer = fs.createWriteStream(path.join(__dirname, 'outputFile'));
        const htmlBuffer = await streamToBuffer(response.data);
        processHTML(htmlBuffer);
     
        
        
    } catch (error) {
        console.error('Error in request:', error.message);
        logFailedRequest(current, fullUrl);
    }finally{
        current++;

      }

    }
  }, interval);

  function processHTML(htmlBuffer) {
    const html = htmlBuffer.toString();
    const $ = cheerio.load(html);
    // Now you can use Cheerio to parse and manipulate the HTML
    const bodyContent = $('body').html();
    console.log(bodyContent.length);
  }

  process.stdin.on('keypress', (ch, key) => {
    if (key && key.name === 's') {
      clearInterval(intervalId);
    //   saveCurrentPosition(current);
      console.log(`Stopped at position ${current}. Configuration saved.`);
      printErrorFile(); // And also here
      process.exit(0);
    }
  });
}


function printErrorFile() {
    try {
      const errorLog = fs.readFileSync(path.join(__dirname, 'failed-requests.csv'), 'utf-8');
      console.log("Error Log:");
      console.log(errorLog);
    } catch (error) {
      console.error('Error reading the error file:', error.message);
    }
  }
  

// Start the process
makeRequests(start, stop);
