const mongoose = require("mongoose");

function connectDb() {
    return mongoose.connect("mongodb://localhost:27017/nas", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = { connectDb };