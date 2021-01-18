const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')
const {urls} = require('../models');

/* GET links listing. */
console.log(urls)
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/*
router.get('/links', controller.messages.get);

router.get('/links/:id', controller.messages.get);

router.post('/links', controller.messages.post);
*/
module.exports = router;
