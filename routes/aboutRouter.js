var router = require('express').Router();

var facultyData = require('../data/faculty.json');



router.get('/faculty', function(req, res){
	res.render('about/faculty',{faculty: facultyData});
})

router.get('/degree-granting', function(req, res){
	res.render('about/degree-granting');
})

router.get('/accreditation', function(req, res){
	res.render('about/accreditation');
})

router.get('/advantage', function(req, res){
	res.render('about/advantages');
})

router.get('/mission', function(req, res){
	res.render('about/mission');
})

router.get('/', function(req, res){	
	res.redirect('about/advantage');
})



module.exports = router;