var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var cors = require('cors');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var ejsLint = require('ejs-lint');

var app = express();

//DB Configuration
const db = require('./config/key').MongoURI;
//Connect to MongoDB
mongoose.connect (db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB connection is online...'))
  .catch(err => console.log('error in creating DB'+ err));

//Passport Configuration
require('./config/passport')(passport);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employees');
var coursesRouter = require('./routes/courses');

// view engine set as ejs and alternative (default layout)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//Express-Session Middleware
// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// app.use(function (req, res, next) {
//   res.locals.user = req.isAuthenticated();
//   next();
// });

// Makes the user object global in all views
// app.get('*', function(req, res, next) {
//   // put user into res.locals for easy access from templates
//   res.locals.user = req.user || null;
//   if(req.user){
//     res.locals.type = req.user.type;
//   }
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employees', employeesRouter);
app.use('/courses', coursesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
