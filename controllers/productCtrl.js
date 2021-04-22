const Products = require('../models/productModel')


const productCtrl = {
    getProducts: async (req,res)=>{
        const products  = await Products.find() 
        res.json(products)
    },
    createProduct:async (req,res)=>{
        const {product_id,title,image,descrition,sizes,color,content,price} = req.body
        const product = await Products.findOne({product_id:product_id})
        if(product) return res.status(400).json({msg:"The Product Is Already Exist"})
        const newProduct = new  Products({
            product_id,
            title,
            image,
            descrition,
            sizes,
            color,
            content,
            price
        })
        await newProduct.save()
        res.json({msg:"Created A Project"})
    },
    deleteProduct:async(req,res)=>{
        await Products.findByIdAndDelete(req.params.id)
        
        res.json({msg:"Delete a product"})
    },
    updateProduct:async(req,res)=>{
        const {title,image,descrition,sizes,color,content,price} = req.body
        await Products.findOneAndUpdate({_id:req.params.id},{
            title,
            image,
            descrition,
            sizes,
            color,
            content,
            price
        })    
        res.json({msg:"Update a product"})
    },
    getProduct:async(req,res)=>{
        const product  = await Products.findById(req.params.id)
        res.json(product)
    },
}
module.exports = productCtrl
