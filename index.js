const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://nileshdimitri911:V35GyvxEzqFLSF1N@cluster0.njafp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

// Server Listening
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
