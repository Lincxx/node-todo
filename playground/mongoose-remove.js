const {ObjectID} = require('mongodb');
const {mongoose}  = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) this will remove everthing
// Todo.remove({}).then((result)=> {
//     console.log(result);
// });

//Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5a3151a5c112b23834ca058f'}).then((todo)=> {
    console.log(todo);
});

//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5a3151a5c112b23834ca058f').then((todo)=> {
    console.log(todo);
});


