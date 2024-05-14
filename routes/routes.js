const express = require('express');
const transactionRouter = express.Router();

transactionRouter.get('/', async (req, res) => {
  const { query } = req;
  try {
    if (!query.period) {
      throw new Error(
        `E necessario informar o parametro "period", cujo valor deve estar no formato yyyy-dd-mm`
      );
    }
    res.send({ length: 2, transactions: ['transaction1', 'transaction2'] });
  } catch ({ message }) {
    console.log(message);
    res.status(400).send({ error: message });
  }
});

module.exports = transactionRouter;
