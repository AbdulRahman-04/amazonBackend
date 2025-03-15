import express from "express"
import productModel from "../../models/Products/Products.js"

const router = express.Router()


router.get("/getall", (req, res)=>{
    try {

        res.status(200).json({msg: `all product are here🥰`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


router.get("/getone/:id", (req, res)=>{
    try {

        res.status(200).json({msg: `one product is here⚡`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


router.put("/edit/:id", (req, res)=>{
    try {
       
        res.status(200).json({msg: `one product is edited🙌`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


router.delete("/deleteone/:id", (req, res)=>{
    try {
        
        res.status(200).json({msg: `one product is deleted⏳`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteall", (req, res)=>{
    try {

        res.status(200).json({msg: `all products are deleted`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})


export default router
