const express = require('express');
const {
  sheepCounter,
  powerCalculator,
  reverseString,
  triangularNumber,
  splitString,
  fibonacci,
} = require('../functions/recursiveFunctions');

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

recursionRouter
  .route('/triangularNumber/:nth')
  .all((req, res) => {
    const { nth } = req.params;
    res.send(`${triangularNumber(nth)}\n`);
  });

recursionRouter
  .route('/split')
  .all((req, res) => {
    const { string, separator } = req.query;
    const splitedString = splitString(string, separator);
    console.log(splitedString);
    res.send(`${splitedString.join(' ')}\n`);
  });

recursionRouter
  .route('/fibonacci/:steps')
  .all((req, res) => {
    const { steps } = req.params;
    res.send(`${fibonacci(steps)}\n`);
  });
module.exports = recursionRouter;
