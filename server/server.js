const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


//mongoose model
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

//insert data
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

var newTodo = new Todo({
    text: 'Finish this course',
    completed: true, 
    completedAt: 12
});

//save to db
// newTodo.save().then((doc) => {
//     console.log(`Save todo: ${doc}`);
// }, (e) => {
//     console.log('unable to save todo');
// });

newTodo.save().then((doc) => {
    console.log(`Save todo: ${doc}`);
}, (e) => {
    console.log('unalbe to save todo');
})