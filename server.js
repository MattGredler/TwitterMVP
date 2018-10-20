// require is how we import code. NPM install does these npm install -- safe (package)
const express = require('express');
// transalator bw mongo and js
const mongoose = require('mongoose');
// heroku has env port that assings port
const PORT = process.env.PORT || 3000;
// function call site replaced by return value
const app = express();

// always include allows to receive json's
app.use(express.urlencoded({ extended: true }));
// stores on req.body
app.use(express.json());
// tell were to find public files
app.use(express.static("public"));


// 
mongoose.connect('mongodb://localhost/twitter', { useNewUrlParser: true });

// 
require('./routes/api-routes')(app);

require('./routes/html-routes')(app);

// Tells server what port to listen to
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});