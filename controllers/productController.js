const Product = require("../models/Product");


// ===============================
// ✅ CREATE PRODUCT
// ===============================
exports.createProduct = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { name, price, category, stock, code, description } = req.body; // ✅ ADD

    const image = req.file ? req.file.filename : null;

    const product = new Product({
      name,
      price: Number(price),
      category,
      stock: stock ? Number(stock) : 0,
      code,          // ✅ ADD
      description,   // ✅ ADD
      image,
    });

    await product.save();

    console.log("SAVED PRODUCT:", product);

    res.status(201).json(product);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ===============================
// ✅ GET ALL PRODUCTS
// ===============================
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    console.log("FETCHED PRODUCTS:", products);

    res.json(products);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


// ===============================
// ✅ DELETE PRODUCT
// ===============================
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.log("DELETE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


// ===============================
// ✅ UPDATE PRODUCT
// ===============================
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, category, stock, code, description } = req.body; // ✅ ADD

    const updateData = {
      name,
      price: Number(price),
      category,
      code,          // ✅ ADD
      description,
      stock: stock ? Number(stock) : 0,
    };

    // ✅ if new image uploaded
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    console.log("UPDATED PRODUCT:", updatedProduct);

    res.json(updatedProduct);
  } catch (err) {
    console.log("UPDATE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};