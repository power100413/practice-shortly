const express = require('express');
const router = express.Router();
const controller = require('../controllers/links');

/* GET links listing. */
router.get('/', function (req, res, next) {
  controller.get(req, res)
  .then(res=>JSON.stringify(res))
  .then(json=>{
    const data = JSON.parse(json);
    // console.log("here", data);
    res.json(data)
  })
});

router.post('/', function(req, res, next){
  controller.post(req, res)
  .then(res=>JSON.stringify(res))
  .then(json=>{
    const data = JSON.parse(json);
    // console.log("here", data);
    res.json(data)
  })
})

module.exports = router;
