let express = require("express");
require("dotenv").config();
let cors = require("cors");
let mongoose = require("mongoose");

let app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const enqueryroute = require("./App/Router/protfolio.router");
app.use("/api/enquery", enqueryroute);

// MongoDB cache (VERY IMPORTANT for Vercel)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  await mongoose.connect(process.env.DBURL);
  isConnected = true;

  console.log("MongoDB connected 🚀");
};

// middleware for DB connection

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ error: "DB Connection Failed" });
  }
});

// export app ONLY (NO app.listen)
module.exports = app;
