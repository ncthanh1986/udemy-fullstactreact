const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users'); //required otherwise error, no model defined. !

// ./: look at the current directory
// ../: go up one level

//console.developers.google.com jamesdoam@gmail.com
//clientID - public token, to identify our application to google server, ok to share publicly 
//clientSecret - private token, 

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		}, 
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id}) //look through the User collection, look for the first one with googleId = profile.id		
				.then(existingUser => {
					if (existingUser){
						// we already have a record with the same googleId, do something
					} else {
						// we don't have any record with the same googleId yet, let's create one. 
						new User({googleId: profile.id}).save();
					}
				})
			
		}
	)
); 

