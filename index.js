const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

const PORT = process.env.PORT || 3000; //process.env.PORT represents an environment variable to later be determined by Heroku, otherwise use 3000 while in development
app.listen(PORT, () => {
  console.log(`Listening on 3000`);
});
