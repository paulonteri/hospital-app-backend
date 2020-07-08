module.exports = function (app, passport) {
  app.get("/auth/", function (req, res) {
    res.render("signin_signup");
  });

  app.get("/auth/logout", function (req, res) {
    console.log("Log Out Route Hit");
    req.session.destroy(function (err) {
      if (err) console.log(err);
      res.redirect("/auth/");
    });
  });

  // Register
  app.post(
    "/auth/signup",
    passport.authenticate("local-signup", { failWithError: true }),
    function (req, res, next) {
      console.log(req.user);
      return res.json({ id: req.user.id });
    },
    function (err, req, res, next) {
      return res.json(err);
    }
  );

  // Login
  app.post(
    "/auth/signin",
    passport.authenticate("local-signin", { failWithError: true }),
    function (req, res, next) {
      console.log(req.user);
      return res.json({
        id: req.user.id,
        email: req.user.email,
        firstName: req.user.first_name,
        lastName: req.user.last_name,
      });
    },
    function (err, req, res, next) {
      return res.json(err);
    }
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/signin");
  }
};
