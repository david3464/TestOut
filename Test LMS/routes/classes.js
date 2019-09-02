var express = require('express');
var router = express.Router();
// app.use('/classes', classesRouter);


// Include Employee Model
const Class = require('../models/Classes');


//router address localhost:3000/courses
//descriptions: Course Index Page
//comments: 
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		res.render('index', { classes });
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
    res.render('classes/details', {data});
});

//router address localhost:3000/courses/lesson
//descriptions: Course Index Page
//comments: 
router.get('/lesson', (req, res, next)=> {
    res.render('classes/lesson');
});

//router address localhost:3000/courses/lessons
//descriptions: Course Index Page
//comments: 
router.get('/lessons', (req, res, next)=> {
    res.render('classes/lessons');
});


module.exports = router;
