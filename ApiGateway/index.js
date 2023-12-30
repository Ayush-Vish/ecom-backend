import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/' , (req , res , next ) => {
    res.send('API GATEWAY')
})

const routes = {
    '/user':'http://localhost:3000',
    '/product' : 'http://localhost:3001',
   
}
for(const route in routes){
    const target = routes[route];
    app.use(route,createProxyMiddleware({target}))
}


app.listen(8000 , ()=> {
    console.log('API GATEWAY is running on port 8000');
})








