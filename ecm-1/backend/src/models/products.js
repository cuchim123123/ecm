const mongoose = require("mongoose");

const variantSchema = mongoose.Schema({
    name: String,
    stock: Number,
})

const productSchema = mongoose.Schema({
    name: String,
    images: [String],
    category: String,
    brand: String,
    description: String,
    variants: [variantSchema],
    price: Number,
    stock: Number,
    tags: [String],
    totalSold: { type: Number, default: 0 },
    weight: { type: Number, default: 0 }, //grams
    rating: { type: Number, default: 0, min: 0, max: 5 },
    isActive: { type: Boolean, default: true }
}, { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);