const local_signup = require('./passport/local_signup');
const local_login = require('./passport/local_login');

module.exports = function(app, passport) {
    console.log('config/passport 호출!');
}