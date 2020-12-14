const rateLimit = require("express-rate-limit");
module.exports = rateLimit({
    windowMs:  10000,
    max: 10,
    message:"More than 10 requests in 10s is not allowed"
  });
