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
	var colors = ['blue', 'red', 'green', 'purple'].sort(function() {
  		return .3 - Math.random();
	});

	res.render('home.ejs', {
		first:  colors[0],
		second: colors[1],
		third:  colors[2],
		fourth: colors[3],
	});
};
