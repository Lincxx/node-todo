const {ObjectID} = require('mongodb');
const {mongoose}  = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a22ba4d3548247834f7d3cd';
//var id = '6a22ba4d3548247834f7d3cd'

var userId = '5a231a7d9ed0b03819e1ddc311'

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
};

if(!ObjectID.isValid(userId)){
    console.log('User ID not valid');
}

//get all back
//Todo.find()

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// //To get one and only one
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// //
// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.log(e);
// });

//User
// User.find({
//     _id: userId
// }).then((user) => {
//     console.log(user);
// })

// User.findOne({
//     _id: userId
// }).then((user) => {
//     console.log(user);
// });

User.findById(userId).then(( ) => {
    if(!user){
        return console.log('User id not found');
    }
    console.log('User by id', user);
}).catch((e) => {
    //console.log(e);
});