const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "Restaurant", 'restaurants' sera le nom de notre "table"
var Restaurant = module.exports = mongoose.model('Restaurant', schema, 'restaurants');