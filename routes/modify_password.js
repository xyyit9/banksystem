var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('modify_password', { title: '修改密码' });
});

module.exports = router;