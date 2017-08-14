const express = require("express");
const mongoose = require("mongoose");

const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");

require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 3000; //process.env.PORT represents an environment variable to later be determined by Heroku, otherwise use 3000 while in development
app.listen(PORT, () => {
  console.log(`Listening on 3000`);
});
