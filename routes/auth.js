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

  app.post("/auth/signup", passport.authenticate("local-signup"), function (
    req,
    res
  ) {
    console.log("/auth//////////////////////");
    console.log(req.user);
    res.send(200);
  });

  app.post("/auth/signin", passport.authenticate("local-signin"), function (
    req,
    res
  ) {
    console.log(req.user);
    res.send(200);
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/signin");
  }
};
