import express from "express";

import dotenv from "dotenv";
dotenv.config();
const app = express () ;



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

