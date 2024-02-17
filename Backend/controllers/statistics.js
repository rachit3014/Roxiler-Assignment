const Transaction = require("../models/transaction");

 // Controller for Statistics

module.exports.Statistics = async function (req, res) {
  const totalsaleamount = await Transaction.aggregate([
    {
      $match: {
        $expr: {
          $and: [
            {
              $eq: [
                { $month: { $toDate: "$dateOfSale" } },
                parseInt(req.query.month),
              ],
            },
            { $eq: ["$sold", true] },
          ],
        },
      },
    },
    {
      $group: {
        _id: null,
        totalamount: { $sum: { $toDecimal: "$price" } },  // sum of total amount sale
      },
    },
  ]);
  const totalnumberofsolditems = await Transaction.countDocuments({
    $expr: {
      $and: [
        {
          $eq: [
            { $month: { $toDate: "$dateOfSale" } },
            parseInt(req.query.month),
          ],
        },
        { $eq: ["$sold", true] }, //  getting the data of total number of  sold item
      ],
    },
  });
  const totalNumberOfNotSoldItems = await Transaction.countDocuments({
    $expr: {
      $and: [
        {
          $eq: [
            { $month: { $toDate: "$dateOfSale" } },
            parseInt(req.query.month),
          ],
        },
        { $eq: ["$sold", false] }, //  getting the data of total number of not sold item
      ],
    },
  });
  return res.status(200).json({
    totalsaleamount:
      totalsaleamount.length > 0
        ? totalsaleamount[0].totalamount
        : 0,
    totalnumberofsolditems,
    totalNumberOfNotSoldItems,
  });
};
