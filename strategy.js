const Auth0Strategy = require('passport-auth0');
const config = require('./config');

module.exports = new Auth0Strategy({
  domain:       config.domain,
  clientID:     config.clientId,
  clientSecret: config.clientSecret,
  callbackURL:  '/login',
  scope: 'openid email profile'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    console.log('profile', profile);
    return done(null, profile);
  }
);
