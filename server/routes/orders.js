const express = require('express');
const orders = express.Router();
const  {makeOrder, getOrders} = require ('../controllers/orders');
const {obtainAccessToken, mpesaExpressInt, confirmation} = require('../middleware/mpesa');


//route to get the auth token
orders.get('/get-auth-token',obtainAccessToken);

//lipa na mpesa online 
orders.post('/makeorder',obtainAccessToken, mpesaExpressInt, makeOrder);

//callback url
orders.post('/mpesa/confirmation',confirmation)

orders.get('/get/all',getOrders)


module.exports = {orders};