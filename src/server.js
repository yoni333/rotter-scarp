const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var cheerio = require('cheerio');
const { log } = require('console');


const RotterPageScarp  = require('./services/page-scarp.js')
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.text({ limit: '10mb', type: '*/*' }));
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



function logFailedRequest(current, url) {
    try{

        const logEntry = `${current}, ${url}\n`;
        fs.appendFileSync(path.join(__dirname, 'failed-requests.csv'), logEntry, 'utf-8');
    }catch(e){
        log(e.message)
    }
  }

// POST route handler
app.post('/', (req, res) => {
    console.log('POST request body:', req.body.targetUrl);
    let pageHtml = req.body.pageHtml
    const targetUrl = req.body.targetUrl
    // console.log(req.body)
   try {
    
       new RotterPageScarp(pageHtml,targetUrl)
     
     
   } catch (error) {
        console.log(error);
   }
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

