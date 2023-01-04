const Product = require("../model/product");

const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    console.log(myData);
    res.status(200).json({ myData });
}

const getAllProductsTest = async (req, res) => {
    
    const {company, name} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
        // console.log(queryObject);
    }

    if(name){
        queryObject.name = { $regex: name, $options: "i" };
    }


    const myData = await Product.find(queryObject)
    res.status(200).json({ myData });
}

module.exports = { getAllProducts, getAllProductsTest };