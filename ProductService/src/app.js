import express from "express";

import dotenv from "dotenv";

import productRoutes from "./routes/product.route.js" 
const app =  express();
dotenv.config(); 

app.use( "/product" ,   productRoutes);






export default app;