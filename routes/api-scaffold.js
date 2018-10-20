const db = require('../models');

module.exports = function (app) {
  app.get('/api/todo', function (req, res) {
    db.Todo.find({})
      .then(function (todos) {
        res.json(todos);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/todo', function (req, res) {
    db.Todo.create(req.body)
      .then(function (todos) {
        res.json(todos);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
 }