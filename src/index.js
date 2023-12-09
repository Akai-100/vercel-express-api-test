const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const mongoURL = process.env.MONGODB_URL || "";
const PORT = process.env.PORT;

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

app.get("/", (req, res) => {
  res.send("Wlecome to vercel express server");
});

app.get("/products", (req, res) => {
  res.send({
    products: [
      { id: 1, title: "product 1", price: 100 },
      { id: 2, title: "product 2", price: 200 },
      { id: 3, title: "product 3", price: 300 },
      { id: 4, title: "product 4", price: 400 },
    ],
  });
});
