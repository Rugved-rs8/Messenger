const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title : {type : String, required : true},
  content : {type : String, required : true}
},
{
  collection : "posts"
}
);

module.exports = mongoose.model('Post', postSchema);
