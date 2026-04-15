const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({

    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                default:1
            }
        }
    ],
    totalPrice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','processing','delivered'],
        default:'pending'
    },
    customerName:{
        type:String,
        required:true
    },
    customerEmail:{
        type:String,
        required:true
    }

},{timestamps:true});
module.exports=mongoose.model('Order',orderSchema);