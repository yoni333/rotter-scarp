const mongoose = require('mongoose');
const uri = "mongodb+srv://yoni333:qaz123wsx@cluster0-zth12.gcp.mongodb.net/tweets?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('conncted');

});
const PostsCollection = db.collection('posts');

const postSchema = new mongoose.Schema({

  index: Number,
  str: String,
  writer: String,
  url: String
});


const Posts = mongoose.model('Posts', postSchema);
module.exports = {
  Posts:this.Posts,
  PostsCollection:PostsCollection

}