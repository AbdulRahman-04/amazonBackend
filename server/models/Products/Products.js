import mongoose from "mongoose"

let productSchema = new mongoose.Schema({
    productId: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    productDes: {
        type: String
    },
    price: {
        type: String
    },

})

let productModel = mongoose.model("product", productSchema, "Products")

export default productModel