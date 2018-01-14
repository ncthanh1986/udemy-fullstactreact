const express = require('express');

//create first express application
const app = express();
//app is an object

//a route handler
app.get('/greeting', (req,res) =>{ //this is a Javascript arrow function
	res.send({hi:'there'});
})

//tell heroku what version of node and npm to use by adding "engines" to the package.json file

const PORT = process.env.PORT || 5000 //look at the underlying environment and see if they have declared a port for us to use. 
app.listen(PORT); //this is express telling node to listen to port 5000.
