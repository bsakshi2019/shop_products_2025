const express = require('express');
const mongoose = require('mongoose');
const productRoute=require('./routes/products.route');
const dotenv = require('dotenv');

dotenv.config()


// a middlewear to convert the json -> so that it will show the products content
const app = express()
app.use(express.json());

// make routes
app.use('/api/products',productRoute);

app.listen(3000,() => {
    console.log('server is running on port 3000');
});

app.get('/',(req,res) => {
    res.send('node response is sent');
});

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log('connected to mongodb done');
    })
    .catch((err) => {
        console.log('connection failed',err);
    });