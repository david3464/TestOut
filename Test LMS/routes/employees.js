var express = require('express');
var router = express.Router();
Employee = require('../models/Employee');
// app.use('/employees', employeesRouter);

//router address localhost:3000/employees/:id
//descriptions: Employee Dashboard
//comments: 
// router.get('/:id', (req, res, next)=> {
//     res.render('employees/dashboard');
// });
  
router.get('/:username', async (req, res)=> {
	Employee.getEmployeeByUsername(req.params.username, function(err, employee){
        if(err) throw err;    
        res.render('employees/dashboard', {employee: employee} );
        // res.render('employees/dashboard', {employee: employee} );
	});
});

module.exports = router;
