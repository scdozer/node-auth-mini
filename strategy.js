const Auth0Strategy = require('passport-auth0');
const config = require('./config');

module.exports = new Auth0Strategy({
  domain:       'scottcardoza.auth0.com',
  clientID:     'yYM6BDEJmMQRROFgy3AN6Kg3EFZhS91N',
  clientSecret: 'XFS8ezQ5I7ZQ7Y29JRlhLHGm-4KdWt6p_h3VsXb5l9kkVLWwlfbqDkgLXG76kIeq',
  callbackURL:  '/login',
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    console.log('profile', profile);
    return done(null, profile);
  }
);
