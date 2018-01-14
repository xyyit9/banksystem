var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('select', { title: '查询所有账户' });
});

module.exports = router;