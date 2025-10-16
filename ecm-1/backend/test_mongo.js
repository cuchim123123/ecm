const connectDB = require("./src/config/db");

(async () => {
  await connectDB();
})();
