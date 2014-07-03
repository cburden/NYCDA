var router = require('express').Router();

var aboutRouter = require('./aboutRouter');

router.use('/about', aboutRouter);

router.get('/', function(req, res){
	res.render('index', {title: 'sft.edu'});
})

module.exports = router;