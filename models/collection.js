const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    title: {type: String, required: true},
    uploaded_by: {type: Schema.Types.ObjectId, ref: 'User'},
    // actors, reviews
    videos: [{
        type: Schema.Types.ObjectId,
        ref: 'Media'
    }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Collection', collectionSchema);