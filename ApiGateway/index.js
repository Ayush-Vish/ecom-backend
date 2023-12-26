import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(express.json());

const routes = {
    '/users':'http://localhost:3000/api/v1/users',
   
}
for(const route in routes){
    const target = routes[route];
    app.use(route,createProxyMiddleware({target}))
}


app.listen(8000 , ()=> {
    console.log('API GATEWAY is running on port 8000');
})








