3const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// ✅ serve images
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});
// routes
const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

// server
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
