import express from 'express';

const app = express();

app.use(express.json());

app.listen(3005 , ()=> {
    console.log('Auth-Services is running on port 3000');
})








