const express = require('express');
const { sheepCounter, powerCalculator, reverseString } = require('../functions/recursiveFunctions');

const recursionRouter = express.Router();

recursionRouter
  .route('/sheep/:sheepSent')
  .all(async (req, res) => {
    const { sheepSent } = req.params;
    const dbInstance = req.app.get('db');
    const addSheep = await dbInstance('sheeps')
      .update('sheepsjumped', dbInstance.raw(`sheepsJumped + ${sheepSent}`))
      .returning('sheepsjumped')
      .then((modRow) => modRow[0]);

    res.send(`${sheepCounter(sheepSent)}\n${addSheep} total sheep have jumped the fence.\n`);
  });

recursionRouter
  .route('/powercalc')
  .all((req, res) => {
    const dbInstance = req.app.get('db');
    const { base, exponent } = req.query;
    res.send(`${powerCalculator(base, exponent)}\n`);
  });

recursionRouter
  .route('/reverseString/:string')
  .all((req, res) => {
    const { string } = req.params;
    res.send(`${reverseString(string)}\n`);
  });

module.exports = recursionRouter;
