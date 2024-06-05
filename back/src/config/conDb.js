const mongoose = require("mongoose");
require("dotenv").config()


const conDb = async () => {
    await mongoose.connect(process.env.MONGO_URI);
};



module.exports = conDb;