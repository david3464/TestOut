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
	},3);
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
