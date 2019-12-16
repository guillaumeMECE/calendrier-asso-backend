const { formatChecker } = require('@core');
const { AssoModel } = require('@models');

/**
 * Request structure
 * req = { body: {location:{xx,xx}, userID:string, questionID:string, } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {

    const inputs = { asso: {} };

    if (req.body.name === undefined || req.body.name === null) {
        throw new Error('name undefined/null');
    }
    inputs.name = req.body.name;

    if (req.body.tag === undefined || req.body.tag === null) {
        throw new Error('tag undefined/null');
    }
    inputs.tag = req.body.tag;

    if (req.body.color === undefined || req.body.color === null) {
        throw new Error('color undefined/null');
    }
    inputs.color = req.body.color;

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
        const result = await AssoModel.create(inputs);

        return result;
    } catch (error) {
        throw new Error('Asso can\'t be create'.concat(' > ', error.message));
    }

};

/**
 * LOGIC :
 */
const createAsso = async (req, res) => {
    try {

        const inputs = await secure(req);

        const data = await process(inputs);

        console.log('::200:: POST - /assos');
        res.status(200).json(data);

    } catch (error) {
        // console.log('ERROR MESSAGE :', error.message);
        // console.log('ERROR :', error);
        console.log('::400:: POST - /assos - ERROR:', error.message);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = createAsso;
