var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cancel', { title: '储蓄账户销户' });
});

module.exports = router;