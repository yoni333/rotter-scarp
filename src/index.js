const Rotter = require('./c-rotter')

const myArgs = process.argv.slice(2);
console.log('args',myArgs)
let startPost = myArgs[0];
let amountOfPosts = myArgs[1];

if (amountOfPosts > 200) {
  amountOfPosts = 200;
}
if (amountOfPosts < 1 || amountOfPosts === undefined) {
  amountOfPosts = 30;
}


if (startPost === undefined) {
  startPost = 633000;
}

try {

  const r = new Rotter(startPost, amountOfPosts);

  r.loopPages()

} catch (error) {
  console.log(error);

}