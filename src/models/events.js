
const { Schema, model } = require('mongoose');

const name = 'events';

const attributes = {
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    asso: {
        tag: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
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

const EventSchema = new Schema(attributes, options);

const EventModel = model(name, EventSchema);

module.exports = EventModel;
