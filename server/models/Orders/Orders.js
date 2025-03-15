import mongoose from "mongoose"

let orderSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    orderedItems : [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number
            },
            price: {
                type: String
            }
        }
    ],
    totalPrice: {
        type: String,
        require: true
    }
})

let orderModel = mongoose.model("orders", orderSchema, "Orders");

export default orderModel