const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRouter = require('./routes/productRoute');

const app = express();

const mongoURL = process.env.MONGODB_URL || "";
const PORT = process.env.PORT || 3003;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  connectDB();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Wlecome to vercel express server");
});

app.use("/products", productRouter);
