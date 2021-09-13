// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//fields for Note are configured here
var memeSchema = new Schema({
  //configure meme schema here
});

//attach schema to model
var Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
