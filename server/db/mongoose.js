const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp");
mongoose.connect('mongodb://lincxx:ADIdas1212@ds137826.mlab.com:37826/todo');

module.exports = {
    //es6 if prop and value are the same name just need the name
    mongoose
}