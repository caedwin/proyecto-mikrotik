const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3300;

app.use(express.static(path.join(__dirname, 'public')));

const url = "mongodb+srv://ecamacho:a7pvhxsXJaPQxgk7@cluster0.j9hi38k.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose.connect(url, {useNewUrlParser: true}).then(()=>{
    console.log("Conectado");
    app.listen(port, () =>{
        console.log("Servidor conectado puerto " + port);
    })
});

