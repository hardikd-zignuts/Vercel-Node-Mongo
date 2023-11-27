const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

// ** Packages
const connectDB = require('./connection/connectToMongo');
const RestaurantModel = require("./models/book");

connectDB()

// ** Constant
const PORT = 5000;

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.get("/api/hello", async (req, res) => {
    const list = await RestaurantModel.find();
    if (list) {
        res.status(200).json({ restaurant: list });
    } else {
        res.status(400).json({ message: "Failed To Retrieve Blogs" });
    }
});

// ** Server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})

