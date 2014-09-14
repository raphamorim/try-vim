var express  = require('express'),
	app      = express(),
	routes   = require('./routes'),
	port     = process.env.PORT || 5000;

app.use(express.static(__dirname+'/public'));

app.use('/course/:level', routes.course);

app.use('/', routes.index);

app.listen(port, function () {
	console.log('Vim Academy on port: ' + port);
});
