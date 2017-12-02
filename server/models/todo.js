var mongoose = require('mongoose')
//mongoose model
var Todo = mongoose.model('Todo', {
    text: {
        type: String, 
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//Non es6 module.exports = {Todo: Todo}
module.exports = {Todo}