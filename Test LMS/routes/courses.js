var express = require('express');
var router = express.Router();
// app.use('/courses', coursesRouter);


// Include Employee Model
const Class = require('../models/Course');


//router address localhost:3000/courses
//descriptions: Course Index Page
//comments: 
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		res.render('courses/course_index', { classes });
	});
});

//router address localhost:3000/courses/featurecourse
//descriptions: Feature Course Page
//comments: 
router.get('/featurecourse', function(req, res, next) {
		res.render('courses/1featurecourse');
});

//router address localhost:3000/courses/commoncourse
//descriptions: Common Course Page
//comments: 
router.get('/commoncourse', function(req, res, next) {
    res.render('courses/2commoncourse');
});

//router address localhost:3000/courses/fronthostcourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/fronthostcourse', function(req, res, next) {
    res.render('courses/3fronthostcourse');
});

//router address localhost:3000/courses/servercourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/servercourse', function(req, res, next) {
    res.render('courses/4servercourse');
});

//router address localhost:3000/courses/sushibarrollercourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/sushibarrollercourse', function(req, res, next) {
    res.render('courses/5sushibarrollercourse');
});

//router address localhost:3000/courses/kitchenchefcourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/kitchenchefcourse', function(req, res, next) {
    res.render('courses/6kitchenchefcourse');
});

//router address localhost:3000/courses/managercourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/managercourse', function(req, res, next) {
    res.render('courses/7managercourse');
});

//router address localhost:3000/courses/details
//descriptions: Course Index Page
//comments: 
router.get('/details', (req, res, next)=> {
    var data = [
        { id: 1, name: "bob" },
        { id: 2, name: "john" },
        { id: 3, name: "jake" },
    ];
    res.render('courses/details', {data});
});

//router address localhost:3000/courses/lesson
//descriptions: Course Index Page
//comments: 
router.get('/lesson', (req, res, next)=> {
    res.render('courses/lesson');
});

//router address localhost:3000/courses/lessons
//descriptions: Course Index Page
//comments: 
router.get('/lessons', (req, res, next)=> {
    res.render('courses/lessons');
});


module.exports = router;
