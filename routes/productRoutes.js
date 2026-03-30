const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createProduct,
  getProducts,
  deleteProduct,   // ✅ added
  updateProduct    // ✅ added (for edit)
} = require("../controllers/productController");

// storage config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// routes
router.post("/add-product", upload.single("image"), createProduct);
router.get("/products", getProducts);
router.delete("/delete-product/:id", deleteProduct);
router.put("/update-product/:id", upload.single("image"), updateProduct);

module.exports = router;