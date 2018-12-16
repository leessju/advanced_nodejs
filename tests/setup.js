const mongoose = require('mongoose');
const keys = require('../config/keys');

jest.setTimeout(60000);

mongoose
  .connect(keys.mongoURI, {useNewUrlParser: true})
  .then(() => {
    console.log('Mongodb connected!!!!!!!!');
  })
  .catch(err => {
    console.log(err);
  });
