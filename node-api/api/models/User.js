const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    lastname:{type:String, required:true},
    firstname:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    admin:{type:Boolean, required:true},
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "User", 'users' sera le nom de notre "table"
var User = module.exports = mongoose.model('User', schema, 'users');