/* eslint-disable global-require */

module.exports = {

    // Asso handlers
    CreateAsso: require('./asso/Create'),
    ReadOneAsso: require('./asso/ReadOne'),
    ReadAsso: require('./asso/Read'),
    // UpdateMeasure: require('./measure/Update'),
    // DeleteMeasure: require('./measure/Delete'),

    // Event handlers
    CreateEvent: require('./event/Create'),
    // ReadOneMeasure: require('./measure/ReadOne'),
    ReadEvent: require('./event/Read'),
    // UpdateMeasure: require('./measure/Update'),
    // DeleteMeasure: require('./measure/Delete'),

};
