const getAllProducts = async (req, res) => {
    res.status(200).json({
        msg: "Hello I am products."
    });
}

const getAllProductsTest = async (req, res) => {
    res.status(200).json({
        msg: "Hello I am test products."
    });
}

module.exports = { getAllProducts, getAllProductsTest };