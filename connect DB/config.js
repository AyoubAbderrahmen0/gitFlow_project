//lconnect with database
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      ""
    );
    console.log("connected to data base successfully");
  } catch (error) {
    console.log("error");
  }
};

module.exports = connect;