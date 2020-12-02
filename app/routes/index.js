const statusRoutes = require('./status_routes');
const pingRoutes = require('./ping_routes');

module.exports = function(app, db) {
	statusRoutes(app, db);
	pingRoutes(app, db);
}
