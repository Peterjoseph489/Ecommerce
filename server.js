require('./Config/configDB')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ["GET"]
}))
app.use('/Uploads', express.static(__dirname + "/Uploads"))

const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('Welcome to my E-Commerce App, Expect to see more...!!')
})

app.listen(PORT, (req, res) => {
    console.log('Listening on PORT: ' + PORT)
})


