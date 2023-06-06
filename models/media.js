const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mediaSchema = new Schema({
    name: {type: String, required:true},
    url: {type:String, required:true},
    uploaded_by: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Media', mediaSchema);