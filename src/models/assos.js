
const { Schema, model } = require('mongoose');

const name = 'assos';

const attributes = {
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    CREATED_AT: {
        type: String,
        required: true
    },
    UPDATED_AT: {
        type: String,
        required: true
    },
};

const options = {};

const AssoSchema = new Schema(attributes, options);

const AssoModel = model(name, AssoSchema);

module.exports = AssoModel;
