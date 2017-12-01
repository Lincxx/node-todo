var {mongoose} = require ('./db/mongoose');




//insert data
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var newTodo = new Todo({
//    text: 'Something to do',
//    completed: true,
//    completedAt: 132
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



var newUser = new User({
    email: '    test@test.com     '
})

newUser.save().then((doc) => {
    console.log(`Save user: ${doc}`);
}, (e) => {
    console.log(`Unable to save user: ${e}`);
});