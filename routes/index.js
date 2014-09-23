var ejs = require('ejs'),
	levels = require('./../levels');

exports.course = function(req, res){
	var lvl = (Math.round(req.params.level) - 1);

	res.render('level.ejs', {
		title: levels[lvl].title,
		data: levels[lvl].data
	});
};

exports.index = function(req, res){
	res.render('home.ejs');
};
