
//const MongoClient = require('mongodb').MongoClient; //original
//object destructuring
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //  console.log(result);
    // });

    //  db.collection('Users').deleteMany({
    //     name: 'Mike Lincoln'
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5a1c10a9fbfdc13d08aec0a6')}).then((result) => {
    //     console.log(result);
    // });

    //close the connection
   // db.close();
});