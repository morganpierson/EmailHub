const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 3000; //process.env.PORT represents an environment variable to later be determined by Heroku, otherwise use 3000 while in development
app.listen(PORT, () => {
  console.log(`Listening on 3000`);
});
