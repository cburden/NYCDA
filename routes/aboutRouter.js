var router = require('express').Router();


router.get('/', function(req, res){
	res.render('aboutus');
})

router.get('/advantage', function(req, res){
	res.render('about/advantages');
})


module.exports = router;