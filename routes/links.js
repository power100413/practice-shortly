const express = require('express');
const router = express.Router();
const controller = require('../controllers/links');

/* GET links listing. */
router.get('/', controller.get);

router.post('/', controller.post);

router.get('/:id', controller.idGet);

module.exports = router;
