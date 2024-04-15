var iconv = require('iconv-lite');

const cheerio = require('cheerio');
const RotterCommentsScarp = require('./scarp-comments-headlines.js')
const RotterCommentsFullTextScarp = require('./scarp-comments-full-text.js')
const {extractPostNumberFromUrl} = require('./utils.js')

class RotterPageScarp {
    constructor(pageHtml, targetUrl) {
        this.extract(pageHtml, targetUrl)
    }

    extract(pageHtml, targetUrl) {
        if (pageHtml == undefined) {
            console.log('pageHtml is undefined')
            return
        }
        const $allPage = cheerio.load(pageHtml);

        // Remove all <script> tags and their content
        $allPage('head').remove();
        $allPage('script').remove();
        $allPage('iframe').remove();
        const $body = $allPage('body');
        // Find the first <div dir="RTL"> element
        const $divWithRTL = $body.find('div[dir="RTL"]');
        // Find the first <center> element inside the <div dir="RTL">
        const mainPost = $divWithRTL.children('center').first().children('font').first().children('table').eq(2);
        if (mainPost.html().slice(1, 8) !== "<tbody>") { throw new Error("RotterPageScarp:mainPost_fail") }
        const commentsHeadersTable = $divWithRTL.children('font').first().children('center').first().children('table').eq(0);
        const commentsFullTextTables = $divWithRTL.children('font').first().children('center').first().children('#comments_wrap').eq(0);

        const postData = this.scarpPostMeta($allPage, mainPost, targetUrl)
        if (postData.title === "") { throw new Error("RotterPageScarp:postData_fail") }
        const commentsHeadersData = new RotterCommentsScarp(commentsHeadersTable.html(), targetUrl)
        // const commentsFullTextData = new RotterCommentsFullTextScarp(commentsFullTextTables, targetUrl)
        // log(postData)
        try {
            mainPost.html().slice(0, 30)
            // log(post.html().slice(0,30))
            // log(post.text().split('').reverse().join(''))
            // log(comments.html().slice(0,1000))
            // log(comments.text().split('').reverse().join(''))
        } catch (error) {
            console.log('error in targetUrl ', targetUrl)
           
            throw (error)
        }
    }


 

    scarpPostMeta(cheer, decodedBody, url) {
        const title = cheer('h1.text16b', decodedBody).text();
        const writer = cheer('a>b', decodedBody).first().text();
        const postData = { index: extractPostNumberFromUrl(url), title, writer, url };
        return postData;
    }

  

} //end class


module.exports = RotterPageScarp;