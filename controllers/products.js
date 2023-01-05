const Product = require("../model/product");

const getAllProducts = async (req, res) => {
    const myData = await Product.find({}).sort({ name: 1, price: 1 });
    console.log(myData);
    res.status(200).json({ myData });
}

const getAllProductsTest = async (req, res) => {

    const { company, name, sort } = req.query;

    const queryObject = {};
    
    if (company) {
        queryObject.company = company;
        // console.log(queryObject);
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = Product.find(queryObject).sort(queryObject);

    if(sort){
        let sortFix = sort.replace("," , " ");
        console.log(sortFix);
        apiData = apiData.sort(sortFix);
    }


    const myData = await apiData;
    res.status(200).json({ myData });
}

module.exports = { getAllProducts, getAllProductsTest };