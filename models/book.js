const { mongoose } = require("mongoose");
const { Schema } = mongoose

const restaurantSchema = new Schema({
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

module.exports = mongoose.model('Restaurant', restaurantSchema);
