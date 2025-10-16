const admin = require("firebase-admin");
const path = require("path");

const keyPath = path.resolve(process.env.FIREBASE_KEY_FILE);

admin.initializeApp({
    credential: admin.credential.cert(require(keyPath)), //verify server
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET, //save file
});

const bucket = admin.storage().bucket();
module.exports = {admin, bucket};