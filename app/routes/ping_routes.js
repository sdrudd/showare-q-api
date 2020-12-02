const PingModel = require('../models/Ping');

module.exports = function(app, db) {
	const Ping = db.model('Ping', PingModel.modelSchema, 'ping');

	app.get('/ping', (req, res) => {
		Ping.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results[0]);
		});
	
	});

	app.put('/ping', (req, res) => {
		Ping.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error": err});
			}
			else {
				var id = results[0]['_id'];
				
				Ping.update( {'_id' : id}, req.body, (err, result) => {
					if (err) {
						console.log(err);
						res.status(500).send( {"error" : err} );
					}
					else
						res.send(result);
				});
			}
		});
	});
};
