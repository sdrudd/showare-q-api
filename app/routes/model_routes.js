const ModelModel = require('../models/Model');

module.exports = function(app, db) {
	const Model = db.model('Model', ModelModel.modelSchema, 'models');

	app.post('/models', (req, res) => {
		var model = new Model(req.body); 
		model.save((err) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(model);
		});
	});

	app.get('/models/:id', (req, res) => {
		Model.findById(req.params.id, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results);
		});
	});

	app.get('/models', (req, res) => {
		Model.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results[0]);
		});
	
	});

	app.put('/models/:id', (req, res) => {
		Model.update( {'_id' : req.params.id}, req.body, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(result);
		});
	});

	app.delete('/models/:id', (req, res) => {
		Model.remove( {'_id' : req.params.id}, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(result);
		});
	});
};
