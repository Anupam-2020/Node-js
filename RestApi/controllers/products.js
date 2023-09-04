const Product = require('../models/products');

exports.getAllProducts = async (req, resp, next) => {
    const myData = await Product.find();
    resp.status(200).json({myData})
}

exports.getAllProductsTesting = async (req, resp, next) => {
    // const id = req.params.id;
    const { name, company, sort, select, page, limit } = req.query;
    const queryObject = {};

    if(company) queryObject.company = company;
    
    if(name)  queryObject.name = { $regex: name, $options: "i"};

    let appData = Product.find(queryObject);

    if(sort) {
        let sortFix = sort.replace(",", " ");
        appData = appData.sort(sortFix);
    }

    if(select) {
        let selectedData = select.split(",").join(" ")
        appData = appData.select(selectedData);
    }

    if(page) {
        let pageNo = Number(page) || 1;
        let limitNo = Number(limit) || 3;

        let skip = (pageNo - 1) * limitNo;
        appData = appData.limit(limitNo).skip(skip);
    }

    // console.log(sort)

    // await Product.updateOne({name: 'iphone'},{$set: {name: 'iphone10'}});
    const myData = await appData.find()
    console.log(queryObject)
    resp.status(200).json({myData, nbHits: myData.length});
}
