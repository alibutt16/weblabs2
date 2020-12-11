const mongoose = require("mongoose");

const URI =
  "mongodb+srv://ali:1234@cluster0.evf1p.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;
