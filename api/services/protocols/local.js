var validator = require('validator');

/**
 * Local Authentication Protocol
 *
 * The most widely used way for websites to authenticate users is via a username
 * and/or email as well as a password. This module provides functions both for
 * registering entirely new users, assigning passwords to already registered
 * users and validating login requesting.
 *
 * For more information on local authentication in Passport.js, check out:
 * http://passportjs.org/guide/username-password/
 */

/**
 * Register a new user
 *
 * This method creates a new user from a specified email, username and password
 * and assign the newly created user a local Passport.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.register = function (req, res, next) {
  var username = req.param('username'),
     password = req.param('password'),
     street = req.param('street'),
     longitude = req.param('longitude'),
     city = req.param('city'),
     latitude = req.param('latitude'),
     zip = req.param('zip'),
     spacetypes = req.param('spacetypes'),
     loading = req.param('loading'),
     storage = req.param('storage'),
     alcohol = req.param('storage'),
     smoking = req.param('smoking'),
     guests = req.param('guests')

  if (!username) {
    req.flash('error', 'Error.Passport.Username.Missing');
    return next(new Error('No username was entered.'));
  }

  if (!password) {
    req.flash('error', 'Error.Passport.Password.Missing');
    return next(new Error('No password was entered.'));
  }
  if (!city) {
    req.flash('error', 'Error.Passport.City.Missing');
    return next(new Error('No city was entered.'));
  }

  User.create({
   username : username,
   password : password,
   street: street,
   longitude: longitude,
   city: city,
   latitude: latitude,
   zip: zip,
   spacetypes : spacetypes,
   loading    : loading,
   storage    : storage,
   alcohol    : alcohol,
   smoking    : smoking,
   guests      : guests

  }, function (err, user) {
    if (err) {
      if (err.code === 'E_VALIDATION') {
        if (err.invalidAttributes.username) {
          req.flash('error', 'Error.Passport.Username.Exists');
        } else {
          req.flash('error', 'Error.Passport.User.Exists');
        }
      }

      return next(err);
    }

    Passport.create({
      protocol : 'local'
    , password : password
    , user     : user.id
    }, function (err, passport) {
      if (err) {
        if (err.code === 'E_VALIDATION') {
          req.flash('error', 'Error.Passport.Password.Invalid');
        }

        return user.destroy(function (destroyErr) {
          next(destroyErr || err);
        });
      }

      next(null, user);
    });
  });
};

/**
 * Assign local Passport to user
 *
 * This function can be used to assign a local Passport to a user who doens't
 * have one already. This would be the case if the user registered using a
 * third-party service and therefore never set a password.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
// exports.connect = function (req, res, next) {
//   var user     = req.user
//     , password = req.param('password');

//   Passport.findOne({
//     protocol : 'local'
//   , user     : user.id
//   }, function (err, passport) {
//     if (err) {
//       return next(err);
//     }

//     if (!passport) {
//       Passport.create({
//         protocol : 'local'
//       , password : password
//       , user     : user.id
//       }, function (err, passport) {
//         next(err, user);
//       });
//     }
//     else {
//       next(null, user);
//     }
//   });
// };

/**
 * Validate a login request
 *
 * Looks up a user using the supplied identifier (email or username) and then
 * attempts to find a local Passport associated with the user. If a Passport is
 * found, its password is checked against the password supplied in the form.
 *
 * @param {Object}   req
 * @param {string}   identifier
 * @param {string}   password
 * @param {Function} next
 */
exports.login = function (req, identifier, password, next) {
  var isEmail = validator.isEmail(identifier)
    , query   = {};

  if (isEmail) {
    query.username = identifier;
  }
  else {
    query.username = identifier;
  }

  User.findOne(query, function (err, user) {
    if (err) {
      return next(err);
    }

    if (!user) {
      if (isEmail) {
        req.flash('error', 'Error.Passport.Username.NotFound');
      } 
      // else {
      //   req.flash('error', 'Error.Passport.Username.NotFound');
      // }

      return next(null, false);
    }

    Passport.findOne({
      protocol : 'local'
    , user     : user.id
    }, function (err, passport) {
      if (passport) {
        passport.validatePassword(password, function (err, res) {
          if (err) {
            return next(err);
          }

          if (!res) {
            req.flash('error', 'Error.Passport.Password.Wrong');
            return next(null, false);
          } else {
            return next(null, user);
          }
        });
      }
      else {
        req.flash('error', 'Error.Passport.Password.NotSet');
        return next(null, false);
      }
    });
  });
};
