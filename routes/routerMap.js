var router = require('express').Router();


router.get('/faculty', function(req, res){
	res.redirect('about/faculty');
})

router.get('/degree-granting', function(req, res){
	res.redirect('about/degree-granting');
})

router.get('/accreditation', function(req, res){
	res.redirect('about/accreditation');
})

router.get('/advantage', function(req, res){
	res.redirect('about/advantage');
})

router.get('/mission', function(req, res){
	res.redirect('about/mission');
})

router.get('/', function(req, res){	
	res.redirect('about/advantage');
})



module.exports = router;