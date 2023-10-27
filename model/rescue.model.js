const mongoose = require('mongoose');

const { Schema } = mongoose;

const rescueSchema = new Schema({
        title: [String],
        box_1: [String],
        box_2: [String],
        box_3: [String],
        box_4: [String],
        box_5: [String],
        box_6: [String],
},
{collection: 'rescue'}
);

const RescueModel = mongoose.model('Rescue', rescueSchema);

module.exports = RescueModel;


