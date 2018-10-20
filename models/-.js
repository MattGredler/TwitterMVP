const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
  task: {
    type: String,
    required: "You must include a task"
  },
  complete: {
    type: Boolean,
    default: false
  }
});


var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;