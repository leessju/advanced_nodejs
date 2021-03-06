const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');


const app = express();
const auth = require('./routes/authRoutes');
const blog = require('./routes/blogRoutes');

require('./services/passport');
require('./services/cache');

mongoose
  .connect(keys.mongoURI, {useNewUrlParser: true})
  .then(() => {
    console.log('Mongodb connected!!!!!!!!');

    app.use(bodyParser.json());
    app.use(
      cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    auth(app);
    blog(app);
  })
  .catch(err => {
    console.log(err);
  });

if (['production', 'ci'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

// app.use('/', (req, res) => {
//   console.log('hi');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});