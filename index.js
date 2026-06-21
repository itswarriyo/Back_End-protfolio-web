let express = require("express");
require("dotenv").config();
let app = express();
let cors = require("cors");
let mongoose = require("mongoose");

const dns = require("dns");

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

const enqueryroute = require("./App/Router/protfolio.router");
app.use(express.json())
app.use(cors({
    origin: "*"
})); 
 
app.use("/api/enquery", enqueryroute)



// mongoose.connect(process.env.DBURL).then(() => {
//     console.log("Mongoose Connected Succesfully.")
//     app.listen(process.env.PORT || 3000, () => {
//         console.log("Your server start is running now.", 'On Port', process.env.PORT)
//     })
// }).catch((err) => {
//     console.log({ status: 0, Message: "Server Error !", Error: err })

// })

const connect = async () => {
  try {
    await mongoose.connect(process.env.DBURL);

    console.log("MongoDB connected successfully 🚀");

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running on port", process.env.PORT || 3000);
      console.log("Mongo Host:", mongoose.connection.host);
    });

  } catch (err) {
    console.log({
      status: 0,
      Message: "Server Error !",
      Error: err.message
    });

  }
};

connect();