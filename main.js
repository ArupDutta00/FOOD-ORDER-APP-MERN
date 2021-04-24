const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
mongoose.connect('mongodb://localhost:27017/fooddatabase', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

var FoodModel = mongoose.model('FoodModel', foodSchema);

app.post('/addcartitem', (req, res) => {
    var additem = new FoodModel({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description
    });

    additem.save().then((result) => {
        console.log('Success', result)
    }, (err) => {
        console.log(err)
    })
    res.json({ result: 'Success' })
});

app.get('/getcart', (req, res) => {
    FoodModel.find({}, (err, data) => {
        res.json(data)
    })
})

app.get('/getdata', (req, res) => {
    fs.readFile('data.json', "UTF-8", (err, data) => {
        myjson = JSON.parse(data);
        res.send(myjson);
    })
})

app.delete('/deleteitem', function (req, res) {
    FoodModel.deleteOne({ _id: req.body._id }).then((result) => {
        console.log(result);
        res.json(result);
    }, (err) => console.log(err));
})

app.delete('/alldelete', function (req, res) {

    FoodModel.deleteMany().then((result) => {
        console.log(result);
        res.json(result);
    }, (err) => console.log(err));
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})