const mongoose = require("mongoose");
const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
    
    
  }
};
module.exports = dbConn;