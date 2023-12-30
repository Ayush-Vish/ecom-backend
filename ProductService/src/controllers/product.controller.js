import Apierror from "../utils/ApiError.util"

export const getAllProducts = async ( req, res , next ) =>  {
    try {
        
    } catch (error) {
        return next(new Apierror(400 , error.message))
    }
}

export const addProduct = async ( req ,res , next ) => { 
    try {
        const {title , description , price , category , condition , images , seller , buyer , status } = req.body 
        if(!title || !description || !price || !category || !condition || !images  || !status ){
            return next(new Apierror(400 , "All fields are required"))
        } 
        
        
    } catch (error) {
        return next(new Apierror(400 , error.message))
    }
}
 

export  {
    getAllProducts
}