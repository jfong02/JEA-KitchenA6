Handlebars.registerHelper('equal', function(ing, bool, options) {
	if (arguments.length < 3)
		throw new Error("Handlebars Helper equal needs 2 parameters");
	for (var i = 0; i<ing.length; i++) {
		if (bool) {
			options.fn(this);
		}
		else
			options.inverse(this);
	}
});

module.exports = hbsHelpers;