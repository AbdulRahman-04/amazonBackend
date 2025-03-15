import mongoose from "mongoose";


let userSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: false
    },
    userName: {
        type: String,
        require: true
    },
    userEmail:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    address: [{type: String}],
    role: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        require: true
    },
    updatedAt: {
        type: Date,
    }
})


