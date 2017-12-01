//mongoose model
var User = mongoose.model('User', {
    email : {
        require: true, 
        trim: true, 
        type: String, 
        minlength: 1
    }
});