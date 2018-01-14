var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('tables_datatables', { title: '存款' });
});

module.exports = router;