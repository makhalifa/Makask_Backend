import { Schema, Types, model } from "mongoose";

const CustomerSize = new Schema(
    {
        customer: { type: Types.ObjectId, ref: "customers" },

        height: { type: Number, required: true },
        weight: { type: Number, required: true },
        waist: { type: Number, required: true },
        chest: { type: Number, required: true },
        hips: { type: Number, required: true },

        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
    }
);

const CustomerSizeModel = model("customer_size", CustomerSize);

export default CustomerSizeModel;