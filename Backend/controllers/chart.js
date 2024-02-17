const Transaction = require("../models/transaction");

// Controller for barchart

module.exports.barchat = async function (req, res) {
  try {
   

    const pipeline = [
      {
        $match: {
          $expr: {
            $eq: [
              { $month: { $toDate: "$dateOfSale" } },
              parseInt(req.query.month),
            ],
          },
        },
      },
      {
        $project: {
          price: 1,
          priceRange: {
            $switch: {
              branches: [
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 0] },
                      { $lte: [{ $toDecimal: "$price" }, 100] },
                    ],
                  },
                  then: "0 - 100",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 101] },
                      { $lte: [{ $toDecimal: "$price" }, 200] },
                    ],
                  },
                  then: "101 - 200",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 201] },
                      { $lte: [{ $toDecimal: "$price" }, 300] },
                    ],
                  },
                  then: "201 - 300",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 301] },
                      { $lte: [{ $toDecimal: "$price" }, 400] },
                    ],
                  },
                  then: "301 - 400",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 401] },
                      { $lte: [{ $toDecimal: "$price" }, 500] },
                    ],
                  },
                  then: "401 - 500",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 501] },
                      { $lte: [{ $toDecimal: "$price" }, 600] },
                    ],
                  },
                  then: "501 - 600",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 601] },
                      { $lte: [{ $toDecimal: "$price" }, 700] },
                    ],
                  },
                  then: "601 - 700",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 701] },
                      { $lte: [{ $toDecimal: "$price" }, 800] },
                    ],
                  },
                  then: "701 - 800",
                },
                {
                  case: {
                    $and: [
                      { $gte: [{ $toDecimal: "$price" }, 801] },
                      { $lte: [{ $toDecimal: "$price" }, 900] },
                    ],
                  },
                  then: "801 - 900",
                },
              ],
              default: "901 - Above",
            },
          },
        },
      },
      {
        $group: {
          _id: "$priceRange",
          itemCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          range: "$_id",
          itemCount: 1,
        },
      },
      {
        $sort: { range: 1 },
      },
    ];

    const result = await Transaction.aggregate(pipeline);
    
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// Controller for piechart

module.exports.piechart = async function (req, res) {
  try {
    const { month } = req.query;

    const transactions = await Transaction.find({
      $expr: { $eq: [{ $month: { $toDate: "$dateOfSale" } }, parseInt(month)] },
    });

    const categoryCount = {};
    transactions.forEach((transaction) => {
      if (categoryCount[transaction.category]) {
        categoryCount[transaction.category]++;
      } else {
        categoryCount[transaction.category] = 1;
      }
    });

    const pieChartData = Object.entries(categoryCount).map(
      ([category, count]) => ({
        category,
        count,
      })
    );
  
    res.status(200).json({ pieChartData });
  } catch (error) {
    console.log("Failed to generate Pai Chart", error);
  }
};
