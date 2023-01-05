const Product = require("../model/product");

const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    console.log(myData);
    res.status(200).json({ myData });
}

const getAllProductsTest = async (req, res) => {

    const { company, name, sort, select } = req.query;

    const queryObject = {};

    if (company) {
        queryObject.company = company;
        // console.log(queryObject);
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = Product.find(queryObject).sort(queryObject);

    if (sort) {
        // let sortFix = sort.replace("," , " ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        // let selectFix = select.replace("," , " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip);

    const myData = await apiData;
    res.status(200).json({ myData });
}

module.exports = { getAllProducts, getAllProductsTest };