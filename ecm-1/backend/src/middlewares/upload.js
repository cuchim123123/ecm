const multer = require("multer");
const storage = multer.memoryStorage(); //lưu file tạm trong buffer để đẩy lên Firebase
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")){
        cb(null, true); // không có lỗi, file valid
    }
    else{
        cb(new Error("Only images files are allowed!"), false);
    }
};

module.exports = multer({storage, fileFilter, limits: {fileSize: 50 * 1024 * 1024}});