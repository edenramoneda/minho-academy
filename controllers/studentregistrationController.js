const express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
    res.render('index/registration',{
      FormTitle : "Student Registration"
    });
  });
 
module.exports = router; 