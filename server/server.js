//libs
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


//local libs
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
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

//DELETE ROUTE
app.delete('/todos/:id', (req, res)=>{
    //get the id 
    var id = req.params.id;

    //validate the id -> not valid return 404
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    };

    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo)=> {
      //success
        //if no doc, send 404
        if(!todo){
            return res.status(404).send();
        }
        //if doc, send 200, could user statusCode(200).send(todo)
        res.send({todo});

    }).catch((e)=>{
         //404 with empty body
         res.status(404).send();
    });
        
});

//PATCH (Update) ROUTE
app.patch('/todos/:id', (req, res)=>{
    var id = req.params.id;
    //this is limiting what the user can change
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    };

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set:body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});

//SERVER
app.listen(port, () =>{
    console.log(`Started up at port ${port}`);
});


//non es6
module.exports = {app:app};


