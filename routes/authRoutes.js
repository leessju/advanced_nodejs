const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/blogs');
    }
  );

  // app.get('/auth/google',
  //   passport.authenticate('google', { scope:
  //     [ 'https://www.googleapis.com/auth/plus.login',
  //       'https://www.googleapis.com/auth/plus.profile.emails.read', 'profile', 'email' ] }
  // ));

  // app.get( '/auth/google/callback',
  //   passport.authenticate( 'google', {
  //     successRedirect: '/auth/google/success',
  //     failureRedirect: '/auth/google/failure'
  // }));

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
