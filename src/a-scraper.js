const rp = require('request-promise');
const $ = require('cheerio');

const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';



rp(url)
  .then(function (html) {
    //success!
    // console.log(html);
    const baseUrl = 'https://en.wikipedia.org'
    const data = $('td > b > a', html)
    console.log(data.length);
    // console.log($('td > b > a', html));
    const wikiUrl = [];
    const presidentsData = [];

    data.map((index, element) => {
      // console.log(element.attribs.href);
      wikiUrl.push(baseUrl + element.attribs.href)
      // parsePresidentPage(baseUrl+element.attribs.href)
    })

    console.log('wikiUrl', wikiUrl)
    return wikiUrl

  }).then(wikiUrl => {
    console.log('wikiUrl', wikiUrl)
    console.log('start parsing')

   return Promise.all(
      wikiUrl.map(url => parsePresidentPage(url))
    ).catch(e=>console.log)
  })

  .then(presidents => {
    console.log('presidents', presidents);

  })
  .catch(function (err) {
    //handle error
  });


function parsePresidentPage(url) {
  // console.log(url);

  return rp(url)
    .then(html => {
      return {
        name: $('.firstHeading', html).text(),
        birthday: $('.bday', html).text(),
      };
    })
    .then(res => {
      // console.log(res);
      return res
    })
    .catch(e => {

    });
}
