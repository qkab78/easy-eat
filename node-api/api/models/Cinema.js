const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    name:{type:String, required:true},
    icon:{type:String, required:true},
    rating:{type:Number, required:true},
    place_id:{type:String, required:true},
    vicinity:{type:String, required:true},
    photos:[{
        height:Number,
        width:Number,
        html_attributions:String
    }],
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "Cinema", 'cinemas' sera le nom de notre "table"
var Cinema = module.exports = mongoose.model('Cinema', schema, 'cinemas');