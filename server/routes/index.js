var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/upload', function(req, res) {
  res.status(200).json({
    message:"succes",
  });
});

module.exports = router;
