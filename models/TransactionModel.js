const mongoose = require('mongoose');

let schema = mongoose.schema({
  description: String,
  value: Number,
  category: String,
  year: Number,
  month: Number,
  day: Number,
  yearMonth: String,
  yearMonthDay: String,
  type: String,
});

const TransactionModel = mongoose.model('transactions', schema);

module.exports = TransactionModel;
