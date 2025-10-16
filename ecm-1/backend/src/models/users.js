const mongoose = require ("mongoose");

const AddressSchema = new mongoose.Schema({
    city: { type: String },
    ward: { type: String },
    street: { type: String },
    receiverName: { type: String },
    receiverPhone: { type: String },
    receiverEmail: { type: String }
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String },
    password: {type: String},
    phone: {type: String},
    role: {
        type : String,
        enum: ['admin', 'customer'],
        default: 'customer'
    },
    verified: { type: Boolean, default: false},
    isBanned: { type: Boolean, default: false},
    addresses: [AddressSchema]
}, {timestamps: true});

module.exports = mongoose.model("users", UserSchema);

