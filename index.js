var path = require('path');
var express = require('express');
var app = express();

var mainRouter = require('./routes/index');

app.set('port', process.env.PORT || 8000);

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");


app.use(mainRouter);

app.use(express.static(__dirname + '/public'));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;