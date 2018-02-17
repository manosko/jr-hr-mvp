var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// Schemas
/* Hit score table:
    // saves a list of recursive articles found and times they were hit
    // TODO: relational table or something to track the sources/trees?
  Hit score schema:
    page: String
    url: String
    score: Number */

// var hitsSchema = mongoose.Schema({
//   page: String,
//   url: String,
//   score: Number
// })
/*
 * Steps table:
    // saves each page that had been hit with a distance-score
    // this table will be checked before fetching an html
  Steps schema:
    page: String,
    url: String
    steps: Number
 */

 // var stepsSchema = mongoose.Schema({
 //   page: String,
 //   url: String,
 //   score: Number
 // })

 var pageSchema = mongoose.Schema({
   page: String,
   url: String,
   score: Number
 })

var Strong = mongoose.model('Strong', pageSchema)
var Far = mongoose.model('Far', pageSchema)

var beenFound = (url, callback) => {
  // urls that have already been checked
  // TODO: store the date that they've been checked,
  //        if older than x days, update it (i.e. delete it)
  //
}



module.exports.beenFound = beenFound;


/* Example
var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
*************/
