const mongoose = require("mongoose");

// CONNECTION TO DATABASE (MONGO DB)
let connectMongoDb = async (url) => {
  return mongoose.connect(url);
};

module.exports = { connectMongoDb };
