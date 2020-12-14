const Slot = require("../model/slots");

module.exports = async function (slots) {
    const slots_ = await Slot.find();
    
    if (!(slots_.length === parseInt(slots))) {
        
        for (var i = parseInt(slots_.length)+1; i < parseInt(slots)+1; i++){
            console.log(i)
            const slot = new Slot({
                slotNo: `${i}A`,
                slotStatus:false
            })
            await slot.save();
        }
    }
}
