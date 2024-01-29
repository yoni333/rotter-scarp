const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var cheerio = require('cheerio');
const { log } = require('console');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.text({ limit: '10mb', type: '*/*' }));
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function extractNumber(str) {
    const urlString = str

    // Use a regular expression to match and extract the number
    const match = urlString.match(/\/(\d+)\.shtml$/);
    let number = 0
    if (match && match[1]) {
        // Extracted number as a string
        const extractedNumber = match[1];

        // Convert the extracted number to an integer if needed
        number = parseInt(extractedNumber, 10);

        console.log("Extracted Number:", number);
    } else {
        console.log("Number not found in the URL.");
    }

    return number

}

function scarpSinglePage(cheer, decodedBody, url) {
    const title = cheer('h1.text16b', decodedBody).text();
    const writer = cheer('a>b', decodedBody).first().text();
    const postData = { index: extractNumber(url), title, writer, url };
    return postData;
}

function getDataElement(cheer, html) {

    let noHeader = cheer('body', html).eq(1)

    return noHeader
}
// POST route handler
app.post('/', (req, res) => {
    console.log('POST request body:', req.body.targetUrl);
    let decodedBody = req.body.tetxtData
    const targetUrl = req.body.targetUrl
    const $ = cheerio.load(decodedBody);
    let htmlCherrio = getDataElement($, decodedBody);

    // Remove all <script> tags and their content
    $('script').remove();

    // Find the first <div dir="RTL"> element
    const divWithRTL = $('div[dir="RTL"]').first();
    // log(divWithRTL.html().slice(0,30))
    // Find the first <center> element inside the <div dir="RTL">
    const post = divWithRTL.children('center').first().children('font').first().children('table').eq(2);
   
    
    const postData = scarpSinglePage($, post, targetUrl)
    log(postData)
   
    log(post.html().slice(0,30))
    log(post.text().split('').reverse().join(''))
    // Get the text content of the third table
    // const tableContent = thirdTable.text();

    // console.log(tableContent);
    // console.log(postData);
    res.send('POST request received');
});

// GET route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
