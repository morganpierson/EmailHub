const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");

const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

let PORT = process.env.PORT || 8080; //process.env.PORT represents an environment variable to later be determined by Heroku, otherwise use 3000 while in development
app.listen(PORT);
