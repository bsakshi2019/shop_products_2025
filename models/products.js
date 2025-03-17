// 1. importing mongoose
// 2. creating fun=moongoose.Schema( {obj:{fields: , }})
// 3. timestamps:true
// 4. assign mongoose.Schema to mongoose.model
// 5. module export to obj -> module.exports = Product;
// 6. export this and link importing to index.html -> const Product = require('./models/products.js');


const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter the product name"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        }
    },
    {
        timestamps: true
    }
)   

const Product = mongoose.model('Products',ProductSchema);

module.exports = Product;