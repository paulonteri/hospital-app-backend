const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

const db = require("./config/database");
const port = 3000;
const app = express();

// Database connection
db.authenticate()
  .then(() =>
    console.log(
      "A connection to the database has been established successfully."
    )
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

// For passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(bodyParser.json());
app.listen(port, () =>
  console.log(`Hospital Backend listening at http://localhost:${port}`)
);

// ROUTES
app.get("/", (req, res) => res.send("Hi There!"));
// API routes
app.use("/api", require("./routes/api"));
