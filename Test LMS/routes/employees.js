var express = require('express');
var router = express.Router();

// app.use('/employees', employeesRouter);

//router address localhost:3000/employees/dashboard
//descriptions: Employee Dashboard
//comments: 
router.get('/dashboard', (req, res, next)=> {
    res.render('employees/dashboard');
});
  


module.exports = router;
