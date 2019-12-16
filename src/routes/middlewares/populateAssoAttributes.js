const { AssoModel } = require('@models');

const populateAssoAttributes = async (req, res, next) => {
    try {

        const asso = await AssoModel.findById(req.body.asso.id).exec();
        req.body.asso.tag = asso.tag;
        req.body.asso.color = asso.color;
        console.log('asso attributes populate');
        next();

    } catch (error) {
        console.log('::MIDDLEWARE:: populateAssoAttributes - ERROR:', error.message);
        res.status(400).json({ '::MIDDLEWARE:: populateAssoAttributes - ERROR:': error.message });
    }
};
module.exports = populateAssoAttributes;
