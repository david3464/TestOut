var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var passport = require('passport');
var { ensureAuthenticated } = require('../config/auth');
// app.use('/users', usersRouter);

// Include User Model
const User = require('../models/User');
// Include Employee Model
const Employee = require('../models/Employee');

//router address localhost:3000/users
//descriptions: System Home Page
//comments: 
router.get('/', (req, res, next)=> {
  res.render('users/user_index');
});

//router address localhost:3000/users/login
//descriptions: Login Information 
//comments: verify username and compare hash password 
router.get('/login',  (req, res, next)=> {
  res.render('users/login');
});

//router address localhost:3000/users/register
//descriptions: Register Page
//comments: Render Register Form
router.get('/register', (req, res, next)=> {
  res.render('users/register');
});

//router address localhost:3000/users/register
//descriptions: Register Handle
//comments: Get User Info and Store Into Datebase
router.post('/register', (req, res, next)=> {
  const {branch, role, type, username, first_name, last_name, address, post_code, city, email, mobile, password, password2} = req.body;
  let errors = [];
  //Check Required Field
  if (!username) {errors.push({ msg: 'Please enter Username! This is Mandatory' });}
  if (!first_name) {errors.push({ msg: 'Please enter Your First Name' });}
  if (!last_name) {errors.push({ msg: 'Please enter Your Last Name' });}
  if (!password || !password2) {errors.push({ msg: 'Please enter all password fields' });}
  //Match Password
  if (password != password2) {errors.push({ msg: 'Passwords do not match' });}
  //Restric Password and Username Length
  if (username.length < 6) {errors.push({ msg: 'Username must be at least 6 characters' });}
  if (password.length < 6) {errors.push({ msg: 'Password must be at least 6 characters' });}
  if (errors.length > 0) {
    res.render('users/register', {errors,branch,role,type,username,first_name,last_name,address,post_code, city,email,mobile, });
  } else {
    //Validation Passed
    User.findOne({username: username})
      .then(user =>{
        if(user) {
          errors.push({ msg: 'This username is already been taken !' });
          res.render('users/register', {errors,branch,role,type,username,first_name,last_name,address,post_code, city,email,mobile});
        }
        if(!user){
          const newUser = new User ({username, type, branch, password});
          if(type === 'employee') {
            const newEmployee = new Employee ({username, first_name, last_name, role, address, post_code, city, email, mobile, branch});  
            User.saveEmployee(newUser, newEmployee, function(err, user){});
            req.flash('success_msg', 'You are now registered and can login in')
            res.redirect('/users/login')
          }
          // if(type === 'manager') {
          //   //Hash Passwords
          //   bcrypt.genSalt(10, (err, salt) => {
          //     bcrypt.hash (newUser.password, salt,(err, hash)=> {
          //       if(err) throw err;
          //       //Set Password to Hashed Password
          //       newUser.password = hash;
          //       //Save User 
          //       newUser.save()
          //         .then(user =>{
          //           req.flash('success_msg', 'You are now registered and can login in')
          //           res.redirect('/users/login')
          //         })
          //         .catch(err => console.log(err))
          //     });
          //   });
          // } 
        }
      })
      .catch(err => console.log(err));
  }
  // console.log(req.body)
  // res.send('Hello');
});

//router address localhost:3000/users/login
//descriptions: Login Handle
//comments: Verify User Info and Compare Password
router.post('/login', (req, res, next) => {
    passport.authenticate('local',{ 
    successRedirect:'/users/dashboard',
    failureRedirect:'/users',
    failureFlash:true
  })(req, res, next);
});

//router address localhost:3000/users/dashaboard
//descriptions: User Profile Page
//comments: For test purpose only
router.get('/dashboard', ensureAuthenticated, function(req, res, next){
  res.render('users/dashboard',{ 
    // name : req.user.username,
    // type: req.user.type,
    user: req.user
  });
});


//router address localhost:- a button to login for user
//descriptions: Logout Handle
//comments: Go back to Home Pages
router.get('/logout', (req,res)=> {
  req.logout();
  req.flash('success_msg','You are logged out!');
  res.redirect('/users')
});


module.exports = router;
