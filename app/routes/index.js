const statusRoutes = require('./status_routes');

module.exports = function(app, db) {
	statusRoutes(app, db);
}
