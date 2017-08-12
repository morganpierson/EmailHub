const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

const PORT = process.env.PORT || 3000; //process.env.PORT represents an environment variable to later be determined by Heroku, otherwise use 3000 while in development
app.listen(PORT, () => {
  console.log(`Listening on 3000`);
});
