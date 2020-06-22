const $ = require('cheerio');
const fs = require('fs');
const os = require("os");

const Tree = {
  a: {
    b: {
      e:
      {
        g: 'end g',
        h: 'end h'
      },

    },
    c: {
      d: {
        f: 'end f'
      }
      , k: 'end k'
    }

  }
};
let safeCounter = 0
data = []
function createTree(tree, arr) {


  const keys = Object.keys(tree)
  keys.forEach(key => {

    if (typeof tree[key] === 'object') {
      createTree(tree[key], arr)
    } else {

      arr.push(tree[key])
    }

    safeCounter++;
    if (safeCounter > 15) {
      process.exit();
    }

  });
}
createTree(Tree, data);
console.log(safeCounter);
console.log(data);


let safeCounterHTML = 0
let safeCounterHtmlMax = 10000
dataHTML = {}
function createTreeHTML(html, obj) {


  // console.log();
  // const keys = Object.keys(tree)
  html.split("").forEach((char, index) => {

    // console.log(html[index],char);
    if (html[index] === '<') {
      obj[index] = { tag: html[index + 1] + html[index + 2] + html[index + 3] + html[index + 4] };
      // console.log(obj)
      createTreeHTML(html[index + 1], obj[index])
    } else {

      // obj[index]=index;
    }

    safeCounterHTML++;
    if (safeCounterHTML > safeCounterHtmlMax) {
      console.log(obj)

      process.exit();
    }

  });
}

function removeUnwantedProps(value) {
  // value.parent = {}
  // value.prev = {}
  // value.next = {}
  // value.options = {}
  // value.prevObject = {}
  // // value.attribs ={}
  // value.namespace = ''
  // value['x-attribsNamespace'] = ''
  // value['x-attribsPrefix'] = ''

  delete value.parent;
  delete value.prev;
  delete value.next;
  delete value.options;
  delete value.prevObject;
  // value.attribs ={}
  delete value.namespace;
  delete value['x-attribsNamespace'];
  delete value['x-attribsPrefix'];

  return value
}
fs.readFile('./src/data/1.shtml', {}, (err, data) => {
  if (err) {
    console.log(err)
  }
  let html = data.toString()

  // createTreeHTML(html, dataHTML);
  console.log('safeCounterHTML:', safeCounterHTML);
  console.log('dataHTML:', dataHTML);

  let selected = $('div[dir="RTL"]', html).find('center').find('font').find('table')
  selected.each((index, element) => {

    if (index !== 2) { return }
    // console.log($(element))
    let children = element.children
    console.log('***************************************************');
    console.log('new element children length', children.length);
    // console.log('***************************************************',);
    // console.log('***************************************************',);
    children.forEach((value, index) => {
      let childrenOnly = value.children;
      value = removeUnwantedProps(value)
      let text = value.data !== undefined ? value.data.split("").reverse().join("") : ''
      console.log('** value text=>', text, 'name=>', value.name);
      // console.log('*****************************');
      // console.log(' childrenOnly ', childrenOnly);
      if (childrenOnly===undefined){return}
      childrenOnly.forEach((value, index) => {

        let selectResponse = $('font>a>b', value)
          // selectResponse = removeUnwantedProps(selectResponse);
        console.log('************* tablr ->', value);
        // console.log('************* selectResponse ->', selectResponse);

      })


    });

  })

  // console.log(selected);
  // console.log($('font>a>b', html).eq(0));



})
