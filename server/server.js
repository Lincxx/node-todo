const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


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

//insert data
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var newTodo = new Todo({
//    text: 'Something to do'
// });

//save to db
// newTodo.save().then((doc) => {
//     console.log(`Save todo: ${doc}`);
// }, (e) => {
//     console.log('unable to save todo');
// });

// newTodo.save().then((doc) => {
//     console.log(`Save todo: ${doc}`);
// }, (e) => {
//     console.log(`unable to save todo: ${e}`);
// })

//new user model 
//email - require, trim, string, minlength of 1

var User = mongoose.model('User', {
    email : {
        require: true, 
        trim: true, 
        type: String, 
        minlength: 1
    }
});

var newUser = new User({
    email: '    test@test.com     '
})

newUser.save().then((doc) => {
    console.log(`Save user: ${doc}`);
}, (e) => {
    console.log(`Unable to save user: ${e}`);
});