const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    product_id:{
        type:String,
        unique:true
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:Array,
        default:`https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`

    },
    descrition:String,
    sizes:Array,
    color:Array,
    content:String,
    price:{
        type:String,
        requried:true
    }

})
module.exports = mongoose.model('product',productSchema);