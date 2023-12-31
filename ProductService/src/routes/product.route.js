import express from "express";
import { addProduct, getAllProducts, getProductById } from "../controllers/product.controller.js";

const router = express.Router(); 


router.route("/")
        .get(getAllProducts);
router.route("/add")
        .post(addProduct); 
router.route("/:id")
        .get(getProductById)
        // .put(updateProductById)
        // .delete(deleteProductById);
export default router;