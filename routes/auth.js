module.exports = function (app, passport) {
  app.get("/", function (req, res) {
    res.render("signin_signup");
  });

  app.get("/logout", function (req, res) {
    console.log("Log Out Route Hit");
    req.session.destroy(function (err) {
      if (err) console.log(err);
      res.redirect("/");
    });
  });

  app.post("/signup/newuser", passport.authenticate("local-signup"), function (
    req,
    res
  ) {
    console.log("//////////////////////");
    console.log(req.user);
    res.send(200);
  });

  app.post("/signin/user", passport.authenticate("local-signin"), function (
    req,
    res
  ) {
    console.log(req.user);
    res.send(200);
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }
};
