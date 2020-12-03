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
				var users = results[0]['users'];
				users.push(req.body['user']);
				var data = {
					users: users
				}
				
				Ping.update( {'_id' : id}, data, (err, result) => {
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
	
	app.delete('/ping', (req, res) => {
		Ping.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error": err});
			}
			else {
				var id = results[0]['_id'];
				var data = {
					users: []
				};
				
				Ping.update( {'_id' : id}, data, (err, result) => {
					if (err) {
						console.log(err);
						res.status(500).send({"error": err});
					}
					else
						res.send(result);
				});
			}
		});
	});
};
