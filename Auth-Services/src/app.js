import express from "express"; 
import dotenv from "dotenv";
import session from "express-session";

import cors from "cors";

import userRoute from "./Routes/user.routes.js";
import passport from "passport";
import morgan from "morgan";
import bodyParser from "body-parser";
import connectToDb from "./config/mongo.config.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import ApiResponse from "./utils/ApiError.util.js";
dotenv.config() ;   
const app = express();    
connectToDb() ; 



app.use(express.json()) ;
app.use(morgan("dev")) ;
app.use(session ({secret : process.env.SESSION_SECRET , resave : true , saveUninitialized : true   }  ))
app.use(passport.initialize()) ;
app.use(passport.session()) ;
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true 
}));


app.use(bodyParser.json()) ;



app.use("/user" , userRoute);

// app.use("/api/v1/socket/" , socketRoutes);



app.use(errorMiddleware); 


app.use("*" , (req ,res , next ) => {
    return new ApiResponse(res , 404 , "Not Found" , null )
})




export default app; 