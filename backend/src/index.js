const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message: 'ShopDrop API is running 🚀'})
})


const PORT=process.env.PORT
const MONGO_URI=process.env.MONGO_URI

mongoose.connect(MONGO_URI).then(()=>{
    console.log('✅ MongoDB connected');
    app.listen(PORT,()=>{
        console.log('✅ Server running on port',PORT)
    })
}).catch((e)=>{
    console.log('❌ MongoDB connection error:', e)
})

