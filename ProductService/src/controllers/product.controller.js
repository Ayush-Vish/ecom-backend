import productModel from "../../../Shared/models/product.model.js";

import Apierror from "../../../Shared/utils/ApiError.util.js";


const getAllProducts = async ( req, res , next ) =>  {
    try {
        
    } catch (error) {
        return next(new Apierror(400 , error.message))
    }
}

const addProduct = async ( req ,res , next ) => { 
    try {
        const {title , description , price , category , condition , images , seller , buyer , status } = req.body 
        if(!title || !description || !price || !category || !condition || !images  || !status ){
            return next(new Apierror(400 , "All fields are required"))
        } 
        const product  = await productModel.find()
        
    } catch (error) {
        return next(new Apierror(400 , error.message))
    }
}
 
const getProductById = async ( req, res , next ) =>  {
    try {
        
    } catch (error) {
        return next(new Apierror(400 , error.message))
    }
}

export {
    getAllProducts,
    addProduct, 
    getProductById
}