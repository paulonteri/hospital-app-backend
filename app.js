const express = require("express");
const bodyParser = require("body-parser");

// Databse
db = require("./config/database");

const port = 3000;

const app = express();

db.authenticate()
  .then(() =>
    console.log(
      "A connection to the database has been established successfully."
    )
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

app.use(bodyParser.json());
app.listen(port, () =>
  console.log(`Hospital Backend listening at http://localhost:${port}`)
);

app.get("/", (req, res) => res.send("Hi There!"));

// API routes
app.use("/api", require("./routes/api"));
