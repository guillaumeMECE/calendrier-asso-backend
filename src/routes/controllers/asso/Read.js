const { AssoModel } = require('@models');
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
        const data = await AssoModel.find().exec();

        return data;

    } catch (error) {
        throw new Error('Asso can\'t be Read'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const readEvent = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);

        console.log('::200:: GET - /assos');

        res.status(200).json(data);
    } catch (error) {
        console.log('::400:: GET - /assos - ERROR:', error.message);
        res.status(400).json({ '::400:: GET - /assos - ERROR:': error.message });
    }
};
module.exports = readEvent;
