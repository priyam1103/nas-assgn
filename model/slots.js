const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
    slotNo: {
        type:String
    },
    carNo: {
        type: String,
        default:null
    },
    slotStatus: {
        type:Boolean
    }
})

const Slot = mongoose.model("Slot", SlotSchema);
module.exports = Slot;