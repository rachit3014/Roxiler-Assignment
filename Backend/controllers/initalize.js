const Transaction = require("../models/transaction");
const axios = require("axios");

// Controller for initalizeDatabase

module.exports.initalizeDatabase = async function (req, res) {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    //empty data from database
    await Transaction.deleteMany();

    const data = await Transaction.create(response.data); // insert data

    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};
