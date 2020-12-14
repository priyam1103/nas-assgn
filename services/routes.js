const express = require("express");
const limiter = require("../middleware/limiter")
module.exports = function (app) {
    app.use(express.json());
    app.use("/api/slot", limiter,require("../routes/slot"));
}