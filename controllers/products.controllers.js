const Product=require('../models/products');

// to retrive all items from db
const getProducts=async(requestAnimationFrame,res) =>{
    try{
        const product= await Product.find({});
        res.status(200).json(product);

    }   catch(error){
        res.status(500).json({message:error.message})
    }
}

// retriveing only the items required(user specific)
const getProduct= async(req,res)=>{
     try{
            const {id} = req.params;
            const product=await Product.findById(id).select('-_id');
            res.status(200).json({
                name:product.name,
                quantity:product.quantity,
                price:product.price
            });
    
        }   catch(error){
            res.status(500).json({message:error.message})   
        }
}

// post all items
const createProducts=async(req,res)=>{
    try{
        const product= await Product.create(req.body);
        res.status(200).json(product);
    }   catch(error){
        res.status(500).json({message:error.message})
    }
}

// updating the items in the db
const updateProduct=async(req,res)=>{
    try{
        const {id} = req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);

        if(!product){  
            return res.status(404).json({message:"product not found"});
        }

        const updateProduct=await Product.findById(id);
        res.status(200).json(updateProduct);

    }   catch(error){
        res.status(500).json({message:error.message})
    }
}

// delete item form db
const deleteProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product =await Product.findByIdAndDelete(id);

        if(!product){  
            return res.status(404).json({message:"product not found"});
        }
        res.status(200).json({message:"product deleted successfully!"});

    }   catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={
    getProducts,
    getProduct,
    createProducts,
    updateProduct,
    deleteProduct
}