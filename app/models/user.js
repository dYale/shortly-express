var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
	tableName: 'users',
  //hasTimestamps: true,
  //defaults: {
  //  visits: 0
  //},
  // clicks: function() { // ?
  //   return this.hasMany(Click);
  // },
  initialize: function(){ // need a callback function
    this.on('creating', function(model, attrs, options){
      var hashPsw = bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash('thu!1538', salt, function(err, hash){
          if(err) {console.log('salting password error:' + err);}

          //put hash in DB
        })
      })
      // shasum.update(model.get('user'));
      // model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }




});

module.exports = User;