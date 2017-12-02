//libs
var express = require('express');
var bodyParser = require('body-parser');

//local libs
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//MIDDLEWARE
app.use(bodyParser.json());

//ROUTES
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    //Save todo
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos:todos})
    }, (e)=> {
        res.status(400).send(e);
    });
});


//SERVER
app.listen(3000, () =>{
    console.log('Server is running');
});


//non es6
module.exports = {app:app};


