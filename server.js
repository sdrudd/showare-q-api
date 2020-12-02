const express		= require('express');
const cors  		= require('cors');
const mongoose		= require('mongoose');
const bodyParser	= require('body-parser');
const db		= require('./config/db');

const port = process.argv[3] || 8000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

var database = mongoose.createConnection(db.url);

require('./app/routes')(app, database);

app.listen(port, () => {
	console.log('Listening on ' + port);
});
