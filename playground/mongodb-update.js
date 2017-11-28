
//const MongoClient = require('mongodb').MongoClient; //original
//object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5a1c88052cd2ba4a8b9dd7c9')
    //     }, {
    //         $set: {
    //             compeleted: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     })
   
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a1c10a9fbfdc13d08aec0a6')
    }, {
        $set: {
            name: 'Tim'
        }
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
        
    //close the connection
   // db.close();
});