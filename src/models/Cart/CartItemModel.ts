import { Schema, Types, model } from "mongoose";

const CartItemSchema = new Schema({
    _id: { type: String, required: true },
    cart: { type: Types.ObjectId, ref: 'carts' },
    product: { type: Types.ObjectId, ref: 'products' },
    stock: { type: Types.ObjectId, ref: 'stock' },
    product_color: { type: Types.ObjectId, ref: 'product_colors' },
    product_size: { type: Types.ObjectId, ref: 'product_sizes' },
    quantity: { type: Number, required: true },
    subtotal_price: { type: Number, required: true },
    discount_amount: { type: Number, default: 0 },
    total_price: { type: Number, required: true },
});

const CartItemsModel = model("cart_items", CartItemSchema);

export default CartItemsModel;