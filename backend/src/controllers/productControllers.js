const product = require("../models/product");
const Product= require("../models/product");

const getProducts=async(req,res)=>{
    try{
        const products=await Product.find();
        res.json(products);
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

const getProduct=async(req,res)=>{
    try{
        const product=await Product.findbyId(req.params.id)
        if(!product)  return res.json({message:"Product not found"})

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const createProduct=async(req,res)=>{
    try{
        const product=new Product(req.body)
        await product.save()
        res.status(201).json(product)
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}

const deleteProduct=async(req,res)=>{
    try{
       await Product.findByIdAndDelete(req.params.id);
       res.json({message:"Product deleted"})
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}

module.exports={getProducts,getProduct,createProduct,deleteProduct}