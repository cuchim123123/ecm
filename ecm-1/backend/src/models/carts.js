const { Schema, models } = require ("mongoose");

const  cartItemSchema = new Schema(
    {
        product: { type: Schema.Types.ObjectId, ref: "products", unique: true, },
        variant: { type: String, default: null },
        quantity: { type: Number, default: 1, min: 1 },
        price: { type: Number, require: true },
        selected: { type: Boolean, require: true },
    }, {_id: false} //each item in cart's array
);

const cartSchema = new Schema(
    {
        
    }
)
