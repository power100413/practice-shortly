const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
res.send('시공의 폭풍은 정말 최고야')
});

module.exports = router;
