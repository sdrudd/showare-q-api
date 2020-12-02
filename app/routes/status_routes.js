const StatusModel = require('../models/Status');

module.exports = function(app, db) {
	const Status = db.model('Status', StatusModel.modelSchema, 'status');

	app.get('/status', (req, res) => {
		Status.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results[0]);
		});
	
	});

	app.put('/status', (req, res) => {
		Status.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error": err});
			}
			else {
				var id = results[0]['_id'];
				
				Status.update( {'_id' : id}, req.body, (err, result) => {
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
