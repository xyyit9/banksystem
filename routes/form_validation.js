var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form_validation', { title: '储蓄管理模块' });
});

module.exports = router;