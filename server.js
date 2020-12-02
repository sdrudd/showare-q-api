const express		= require('express');
const cors  		= require('cors');
const mongoose		= require('mongoose');
const bodyParser	= require('body-parser');
const db		= require('./config/db');

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());

var database = mongoose.createConnection(db.url);

require('./app/routes')(app, database);

app.listen(port, () => {
	console.log('Listening on ' + port);
});
