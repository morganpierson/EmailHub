if (process.env.NODE_ENV === "production") {
  //we are in production - return prod set of keys
  const prodKeys = require("./prod");
  module.exports = prodKeys;
} else {
  //we are in development - return dev set of keys
  const devKeys = require("./dev");
  module.exports = devKeys;
}
