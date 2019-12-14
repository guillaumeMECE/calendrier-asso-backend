const { formatChecker } = require('@core');
const { EventModel } = require('@models');

/**
 * Request structure
 * req = { body: {location:{xx,xx}, userID:string, questionID:string, } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {

    const inputs = {};

    if (req.body.title === undefined || req.body.title === null) {
        throw new Error('title undefined/null');
    }
    inputs.title = req.body.title;

    if (req.body.tag === undefined || req.body.tag === null) {
        throw new Error('tag undefined/null');
    }
    inputs.tag = req.body.tag;

    if (req.body.color === undefined || req.body.color === null) {
        throw new Error('color undefined/null');
    }
    inputs.color = req.body.color;

    if (req.body.text === undefined || req.body.text === null) {
        throw new Error('text undefined/null');
    }
    inputs.text = req.body.text;

    if (req.body.date === undefined || req.body.date === null) {
        throw new Error('date undefined/null');
    }
    inputs.date = req.body.date;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (param) => {
    const inputs = param;

    inputs.CREATED_AT = Date();
    inputs.UPDATED_AT = inputs.CREATED_AT;

    console.log('inputs: ', inputs);

    try {
        const result = await EventModel.create(inputs);

        return result;
    } catch (error) {
        throw new Error('Sensor can\'t be create'.concat(' > ', error.message));
    }

};

/**
 * LOGIC :
 */
const createEvent = async (req, res) => {
    try {

        const inputs = await secure(req);

        const data = await process(inputs);

        console.log('::200:: POST - /events');
        res.status(200).json(data);

    } catch (error) {
        // console.log('ERROR MESSAGE :', error.message);
        // console.log('ERROR :', error);
        console.log('::400:: POST - /events - ERROR:', error.message);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = createEvent;
