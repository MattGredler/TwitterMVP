const db = require('../models');

module.exports = function (app) {
  // need to know method and path. function start of callback function
    app.get('/api/tweet', function (req, res) {
      // databse then points to the javascript files in models. find built into mongoose. Id goes into curly brackets
      db.Tweet.find({})
      // gives response to get request
        .then(function (tweet) {
          res.json(tweet);
        })
        // incase of error
        .catch(function (err) {
          res.json(err);
        });
    });
    app.delete('/api/tweet/:id', function (req, res) {
      db.Tweet.findByIdAndRemove(req.params.id)
     } )
    
    const removeTweet = function(id){
      // const thisID = this.Tweet._id
      console.log("begin")
      db.Tweet.remove({"_id": ObjectId("5bc22ae6769a732858dc6131")});
  // {
      console.log("end")
    }
  

//     const deleteThis = function(){
//       Tweet.findByIdAndRemove(req.params._id,req.body, function(err,data)
// {
//     if(!err){
//         console.log("Deleted");
//     }
// })};


    // Tweet.deleteOne({ _id: '' }, function (err) {
    //   if (err) return handleError(err);
    // app.delete('/api/tweet/:tweet' , function (req , res){
    //     tweet.splice(req.params.index, 1);

    //     res.json({ success: true });

    //     .catch(function (err) {
    //       res.json(err);
    //     });
    // });

    // app.delete('/api/index/:index', function (req, res) {
    //   todoList.splice(req.params.index, 1);

    //   res.json({ success: true });
  // you need a method and a path
  
    app.post('/api/tweet', function (req, res) {
      // req.body = the body according to the schema
      db.Tweet.create(req.body)
        .then(function (tweet) {
          res.json(tweet);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
   }

//    todo(s) different than tweet???