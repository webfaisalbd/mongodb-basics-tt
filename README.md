
- npm init -y

- npm i express

- include in package.json:
"start": "node index.js"
 - npm start


- npm i nodemon
"start": "nodemon index.js"
 - npm start

---


- single code for connecting node/express server and mongodb/mongoose.
- And send data to the mongodb from server
 ```javascript
const mongoose = require("mongoose");
const ProductJson = require("./products.json");

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
            values: ["apple", "samsung", "nokia", "oppo", "realme", "xiaomi"],
            message: `{values} is not supported`
        }
    }
})



const start = async () => {
    const uri = "mongodb+srv://<userName>:<userPassword>@cluster0.1fwlxex.mongodb.net/<databaseName>?retryWrites=true&w=majority";

    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const Product = await mongoose.model("products", productSchema);
    await Product.create(ProductJson);
    console.log("data added to the mongodb");

}

start();
 ```

- products.json
 ```javascript
[
    {
        "name": "iphone",
        "price": 154,
        "rating": 4.6,
        "featured": true,
        "company": "apple"
    },
    {
        "name": "samsung m33",
        "price": 104,
        "rating": 4.7,
        "featured": true,
        "company": "samsung"
    }
]
 ```

 ---
 ---


 