// ** Dotenv Config
require("dotenv").config();

// ** Packages
const express = require('express');
const mongoose = require('mongoose');

// ** Config
const app = express()
app.use(express.json());
const uri = process.env.DB_URL;

mongoose
    .connect(uri)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

// ** Constant
const PORT = 5000;

const restaurantSchema = new mongoose.Schema({
    address: {
        type: {
            borough: {
                type: String,
                required: true,
            },
            cuisine: {
                type: String,
                required: true,
            },
        },
        required: true,
    },
    grades: [
        {
            name: {
                type: String,
                required: true,
            },
            restaurant_id: {
                type: String,
                required: true,
            },
        },
    ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

app.get('/', async (req, res) => {
    const list = await Restaurant.find()
    if (list) {
        res.status(200).json({ restaurant: list })
    }
    else { res.status(400).json({ message: 'Failed To Retrieve Blogs' }) }
})

// ** Server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})

