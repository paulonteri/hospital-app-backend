var bCrypt = require("bcrypt-nodejs");
var passport = require("passport");
const { User } = require("../../models/index");

// function to be called while there is a new sign/signup
// We are using passport local signin/signup strategies for our app
module.exports = function (passport, auth) {
  var Auth = auth;

  var LocalStrategy = require("passport-local").Strategy;

  // LOCAL SIGNUP
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        console.log("Signup for - ", email);
        var generateHash = function (password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        Auth.findOne({
          where: {
            email: email,
          },
        })
          .then(function (user) {
            //console.log(user);
            if (user) {
              return done(null, false, {
                message: "That email is already taken",
              });
            } else {
              var userPassword = generateHash(password);

              var data = {
                email: email,
                password: userPassword,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                phone: req.body.phone_number.replace(/07/i, "+2547"),
                national_id: req.body.national_id,
              };
              console.log(data);

              Auth.create(data)
                .then(function (newUser, created) {
                  if (!newUser) {
                    return done(null, false);
                  }
                  if (newUser) {
                    return done(null, newUser);
                  }
                })
                .catch(function (err) {
                  console.log("Error:", err);
                  return done(null, false, {
                    message: "Something went wrong with your Sign up",
                  });
                });
            }
          })
          .catch(function (err) {
            console.log("Error:", err);
            return done(null, false, {
              message: "Something went wrong with your Sign up",
            });
          });
      }
    )
  );

  // LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },

      function (req, email, password, done) {
        var Auth = auth;

        var isValidPassword = function (userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };
        console.log("logged to", email);
        Auth.findOne({
          where: {
            email: email,
          },
        })
          .then(function (user) {
            console.log(user);
            if (!user) {
              return done(null, false, {
                message: "Email does not exist",
              });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: "Incorrect password.",
              });
            }

            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function (err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin",
            });
          });
      }
    )
  );

  //serialize
  passport.serializeUser(function (auth, done) {
    done(null, auth.id);
  });

  // deserialize user
  passport.deserializeUser(function (id, done) {
    Auth.findOne({
      where: {
        id: id,
      },
    })
      .then(function (user) {
        if (user) {
          done(null, user.get());
        } else {
          done(user.errors, null);
        }
      })
      .catch((err) => {
        done(user.errors, null);
      });
  });
};
