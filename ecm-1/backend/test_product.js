const mongoose = require("mongoose");
const Product = require("./src/models/products");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

async function testProduct() {
    try {
        const newProduct = new Product({
            name: "Đất sét PlayDoh",
            description: "Đồ chơi nâng cao mỹ thuật của bé",
            price: 550000,
            category: "Đồ chơi nhập khẩu",
            brand: "PlayDoh",
            images: ["https://.../playdoh.jpg"],
            stock: 200,
            rating: 5,
            isActive: true,
        });

        const newProductVariant = new Product({
            name: "Xe điều khiển biến hình",
            description: "Xe có thể biến hình thành robot, điều khiển từ xa, 3 chế độ ánh sáng.",
            category: "Đồ chơi xe",
            brand: "Hasbro",
            price: 450000,  
            tags: ["robot", "xe", "điều khiển"],
            images: [
                "https://firebasestorage.googleapis.com/v0/b/toyshop.appspot.com/o/car-red.jpg",
                "https://firebasestorage.googleapis.com/v0/b/toyshop.appspot.com/o/car-blue.jpg"
            ],
            variants: [
                { name: "Màu Đỏ", stock: 10 },
                { name: "Màu Xanh", stock: 8 },
                { name: "Màu Vàng", stock: 5 },
            ],
            totalSold: 120,
            weight: 800,
            rating: 4.8,
            isActive: true
        });

        const saveProduct = await newProduct.save();
            console.log("Product saved successfully");
            console.log(saveProduct);

        const savedProductVariant = await newProductVariant.save();
            console.log("Product saved successfully:");
            console.log(savedProductVariant);
        } catch (err) {
            console.error("Error creating product:", err);
        } finally {
            mongoose.connection.close();
        }
    };

testProduct();