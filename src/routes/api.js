
const { Router } = require('express');

const router = Router();

/**
 * Controllers imports
 */

// ASSO IMPORT
const { CreateAsso } = require('@controllers');


// EVENT IMPORT
const { CreateEvent, ReadEvent } = require('@controllers');

/**
 * MIDDLEWARES
 */


/**
 * Routes
 */

// Asso
router.post('/assos', CreateAsso);
// router.get('/events', ReadEvent);

// Event
router.post('/events', CreateEvent);
router.get('/events', ReadEvent);

module.exports = router;
