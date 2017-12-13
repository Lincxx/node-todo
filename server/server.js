//libs
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

//local libs
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos:todos})
    }, (e)=> {
        res.status(400).send(e);
    });
});

//GET /todos/:id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id

    if(!ObjectID.isValid(id)){
       return res.status(404).send();
    };
   
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        //res.send({todo:todo}); //these are the same
        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });
   
});


//SERVER
app.listen(port, () =>{
    console.log(`Started up at port ${port}`);
});


//non es6
module.exports = {app:app};


