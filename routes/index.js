var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Render index');
  res.send('');
});

module.exports = router;
