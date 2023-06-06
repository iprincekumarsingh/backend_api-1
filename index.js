const app = require("./app");
const dbConn = require("./config/dbConn");

// importing dotenv
require("dotenv").config();



require("./config/dbConn");

dbConn();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
