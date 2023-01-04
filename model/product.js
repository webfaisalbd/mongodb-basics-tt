const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: ["true", "price must be provided."]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        required: [4.9, "rating must be provided."]
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "nokia", "oppo","realme","xiaomi"],
            message: `{values} is not supported`
        }
    }
})

module.exports = mongoose.model("Products", productSchema);