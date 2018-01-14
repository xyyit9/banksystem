var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var nav = require('./routes/nav');
var tables_datatables=require('./routes/tables_datatables');
var forms_advanced=require('./routes/forms_advanced');
var form_validation=require('./routes/form_validation');
var form_validation2=require('./routes/form_validation2');
var modify_password=require('./routes/modify_password');
var register=require('./routes/register');
var select=require('./routes/select');
var cancel=require('./routes/cancel');
var app = express();
//转发代理
var proxy = require('express-http-proxy');
var apiProxy = proxy("localhost:8080",{
  proxyReqPathResolver:function(req){
    return require('url').parse(req.originalUrl).path;
  }
})
app.use('/user/login',apiProxy);
app.use('/saving/accountList',apiProxy);
app.use('/saving/addDeposit',apiProxy);
app.use('/saving/addAccount',apiProxy);
app.use('/saving/accountList',apiProxy);
app.use('/saving/recruitment',apiProxy);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/home',home);
app.use('/nav',nav);
app.use('/form_validation',form_validation);
app.use('/form_validation2',form_validation2);
app.use('/tables_datatables',tables_datatables);
app.use('/forms_advanced',forms_advanced);
app.use('/modify_password',modify_password);
app.use('/register',register);
app.use('/select',select);
app.use('/cancel',cancel);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
