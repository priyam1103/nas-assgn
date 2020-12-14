require('dotenv').config();
const express = require("express");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT; 
const { connectDb } = require("./services/db");
app.use(cors());
connectDb();
require("./services/routes")(app);
require("./services/createslot")(process.env.SLOTS)


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})
