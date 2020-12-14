const express = require("express");
const route = express.Router();
const { addSlot,getSlot,unparkSlot ,getSlotInfo} = require("../handlers/slot");

route.post("/addSlot", addSlot);
route.post("/getSlot", getSlot);
route.put("/unparkSlot", unparkSlot);
route.get("/slotinfo", getSlotInfo);
module.exports = route;