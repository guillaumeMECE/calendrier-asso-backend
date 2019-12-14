const { EventModel } = require('@models');
/**
 * Request structure
 * req = { body: { } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (params) => {
    try {
        const data = await EventModel.find().exec();
        data.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        return data;
    } catch (error) {
        throw new Error('Event can\'t be Read'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const readEvent = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);

        // TODO: Sort don't work
        data.sort((a, b) => {
            console.log('new Date(a.date) - new Date(b.date): ', new Date(a.date) - new Date(b.date));
            return new Date(a.date) - new Date(b.date);
        });
        console.log('::200:: GET - /events');

        res.status(200).json(data);
    } catch (error) {
        // console.log('ERROR MESSAGE :', error.message);
        // console.log('ERROR :', error);
        console.log('::400:: GET - /events - ERROR:', error.message);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = readEvent;
