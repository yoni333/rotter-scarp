var iconv = require('iconv-lite');
const https = require('https')
const $ = require('cheerio');
const SaveData = require('./save-data')

module.exports = class RotterPageScarp {
    constructor(pageHtml, targetUrl) {

    }

    extract(){
        const $ = cheerio.load(pageHtml);
        let htmlCherrio = getDataElement($, pageHtml);

        // Remove all <script> tags and their content
        $('script').remove();

        // Find the first <div dir="RTL"> element
        const divWithRTL = $('div[dir="RTL"]').first();
        // log(divWithRTL.html().slice(0,30))
        // Find the first <center> element inside the <div dir="RTL">

        const post = divWithRTL.children('center').first().children('font').first().children('table').eq(2);
        const comments = divWithRTL.children('font').first().children('center').first().children('table').eq(0);

        const postData = scarpPostMeta($, post, targetUrl)
        // log(postData)
        try {
            post.html().slice(0, 30)
            // log(post.html().slice(0,30))
            // log(post.text().split('').reverse().join(''))
            // log(comments.html().slice(0,1000))
            // log(comments.text().split('').reverse().join(''))
        } catch (error) {
            log('error in targetUrl ', targetUrl)
            throw(error)
        }
    }


    extractPostNumberFromUrl(str) {
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

    scarpPostMeta(cheer, decodedBody, url) {
        const title = cheer('h1.text16b', decodedBody).text();
        const writer = cheer('a>b', decodedBody).first().text();
        const postData = { index: extractPostNumberFromUrl(url), title, writer, url };
        return postData;
    }

    getDataElement(cheer, html) {

        let noHeader = cheer('body', html).eq(1)

        return noHeader
    }

} //end class

