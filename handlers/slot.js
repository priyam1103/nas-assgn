const Slot = require("../model/slots");


exports.addSlot = async function (req, res) {
    try {
        const { slotNo } = req.body;
        const slot = await Slot.findOne({ slotNo: slotNo });
        if (slot) {
            res.status(400).json({ message: "Slot already exists" });
        } else {
            const new_slot = new Slot({
                slotNo: slotNo,
                slotStatus:false
            })
            new_slot.save();
            res.status(200).json({message:"Slot Created"})
        }
    } catch (err) {
        res.status(400).json({message:"Error occured"})
        
    }
}

exports.getSlot = async function (req, res) {
    try {
        const { carNo } = req.body;
        if (carNo) {
            const slots = await Slot.find();
            var empty_slot;
            for (var i = 0; i < slots.length; i++) {
                if (!slots[i].slotStatus) {
                    empty_slot = slots[i];
                    break;
                }
            }
            if (empty_slot) {
                empty_slot.carNo = carNo;
                empty_slot.slotStatus = true;
               
                await empty_slot.save();
                res.status(200).json({ message: `Your slot number for car ${carNo} is ${empty_slot.slotNo}` })
            }
            else {
                res.status(400).json({ message: "Opps all slots are occupied" })
            }
        } else {
            res.status(400).json({ message: "Please enter the car number" })   
        }
       
    } catch (err) {
        res.status(400).json({message:"Error occured"})
    }
}
exports.unparkSlot = async function (req, res) {
    try {
        const { slotNo } = req.body;
        if (slotNo) {
            const slot = await Slot.findOne({ slotNo: slotNo });
            if (slot) {
                if (slot.slotStatus) {
                    slot.carNo = null;
                    slot.slotStatus = false;
                    slot.save();
                    
                    res.status(200).json({ message: `Slot is free to use for other users` })
                } else {
                    res.status(200).json({ message: `Slot is already free ` })
                }
            } else {
                res.status(400).json({ message: "Please enter valid slot number" });     
            }
            
        } else {
            res.status(400).json({ message: "Please enter valid slot number" });
        }
    } catch (err) {
        res.status(400).json({message:"Error occured"})
    }
}

exports.getSlotInfo = async function (req, res) {
    try {
        const { slotNo, carNo } = req.body;
        if (slotNo || carNo) {
            var slot = slotNo ? await Slot.findOne({ slotNo: slotNo }) : await Slot.findOne({ carNo: carNo });
            if (slot) {
                const data = {
                    "Slot_Number": slot.slotNo,
                    "Car_Number":slot.carNo
                }
                res.status(200).json(data)
            } else {
                res.status(400).json({ message: "Please enter valid slot number or  car number" })   
            }
          
        } else {
            res.status(400).json({ message: "Please enter either the slot number or the car number" })   
        }
    } catch (err) {
        res.status(400).json({ message: "Error occured" });
    }
}