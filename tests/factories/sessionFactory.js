const Buffer = require('safe-buffer').Buffer;
const Keygrip = require('keygrip');
const keys = require('../../config/keys');
  const keygrip = new Keygrip([keys.cookieKey]);

module.exports = user => {
//module.exports = id => {

  const sessionObject = {
    passport: {
      //user: id
      user: user._id.toString()
    }
  };

  const session = Buffer.from(JSON.stringify(sessionObject)).toString('base64');
  const sig = keygrip.sign('session=' + session);

  return { session, sig };
}