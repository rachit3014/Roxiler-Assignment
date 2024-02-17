const Transaction = require("../models/transaction");

 // Controller for pagination and search

module.exports.searchitem = async function (req, res) {
  try {
    const keyword = req.query.keyword;

   

    const transaction = await Transaction.find({
      // searching the data through keyword
      $and: [
        {
          $expr: { $eq: [{ $month: { $toDate: "$dateOfSale" } }, parseInt(req.query.month)] },
        },
        {
          $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
            { price: { $regex: keyword, $options: "i" } },
          ],
        },
      ], 
    
    })
      .skip((parseInt(req.query.page) - 1) * 10) // pagination
      .limit(10)
  

    return res.status(200).json({
      transaction,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};
