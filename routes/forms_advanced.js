var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('forms_advanced', { title: '存款' });
});

module.exports = router;