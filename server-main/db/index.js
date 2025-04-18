const mongoose = require("mongoose");
const dbUrl = require("./url");

const connectionDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("mongodb baglantisi kuruldu");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectionDb };
