const mongoose = require('mongoose');

const { Schema } = mongoose;

const afterCareSchema = new Schema({
        title: [String],
        box_1: [String],
        box_2: [String],
        box_3: [String],
        box_4: [String],
        box_5: [String],
        box_6: [String],
        discussions: [String],
},
{collection: 'aftercare'}
);

const AfterCareModel = mongoose.model('AfterCare', afterCareSchema);

module.exports = AfterCareModel;


