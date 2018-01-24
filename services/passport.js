const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

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
			console.log('access token', accessToken);
			console.log('refresh token', refreshToken);
			console.log('profile', profile)
			console.log('name:',profile.name.familyName)
		}
	)
); 

