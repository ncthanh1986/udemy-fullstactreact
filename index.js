const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./models/User'); //=call this first to avoid error
require('./services/passport');



mongoose.connect(keys.mongoURI);


//create first express application
const app = express();
//app is an object

require('./routes/authRoutes')(app);
//require('./routes/authRoutes') returns a function, we then immediately recall that function with the 'app' object.


//tell heroku what version of node and npm to use by adding "engines" to the package.json file

const PORT = process.env.PORT || 5000 //look at the underlying environment and see if they have declared a port for us to use. 
app.listen(PORT); //this is express telling node to listen to port 5000.
