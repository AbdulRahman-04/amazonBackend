import express from "express"
import orderModel from "../../models/Orders/Orders.js"
const router = express.Router()


router.get("/getall", (req, res)=>{
    try {

        res.status(200).json({msg: `all orders are here🥰`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


router.get("/getone/:id", (req, res)=>{
    try {

        res.status(200).json({msg: `one order is here⚡`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


router.put("/edit/:id", (req, res)=>{
    try {
       
        res.status(200).json({msg: `one order is edited🙌`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


router.delete("/deleteone/:id", (req, res)=>{
    try {
        
        res.status(200).json({msg: `one order is deleted⏳`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteall", (req, res)=>{
    try {

        res.status(200).json({msg: `all orders are deleted`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


export default router
