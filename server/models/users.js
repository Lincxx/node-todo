var mongoose = require('mongoose')
//mongoose model
var User = mongoose.model('User', {
    email : {
        require: true, 
        trim: true, 
        type: String, 
        minlength: 1
    }
});
//Non es6 module.exports = {User: User}
module.exports = {User}