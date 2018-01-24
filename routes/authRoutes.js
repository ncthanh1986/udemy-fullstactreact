const passport = require('passport');


module.exports = app => {
    //let create a route handler to handle user entering the url auth/google
    app.get(
        '/auth/google', 
        passport.authenticate('google',{
            scope:  ['profile','email']
        })
    );

    //create handler to handle the case when user is redirected back from google with the code
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'));

    //new GoogleStrategy creates a new instance of the googel passport strategy
    //'passport, I want you to be aware that there is a new strategy called GoogleStrategy'
    //client id, client secret
    //signup with google oauth api
}
