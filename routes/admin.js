var express = require('express');
var router = express.Router();

/* Gets admin page */
router.get('/', function(req, res, next) {
  const names = ['Sumod', 'Zuhaila', 'Amrutha', 'Safvan']
  res.render('admin', {names});
});

module.exports = router;
