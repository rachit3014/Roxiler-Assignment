const mongoose = require("mongoose");
const transactionScherma = new mongoose.Schema({
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  title: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sold: {
    type: Boolean,
    // required: true,

    default: false,
  },
  dateOfSale: {
    type: String,
    required: true,
  },
});
const Transaction = mongoose.model("Transaction", transactionScherma);
module.exports = Transaction;
