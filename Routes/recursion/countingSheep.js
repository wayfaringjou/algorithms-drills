const express = require('express');

const countSheepRouter = express.Router();

const sheepCounter = (sheep) => {
  // Base Case
  if (sheep === 0) {
    return 'All sheep jumped over the fence\n';
  }
  // Recursive Case
  return `${sheep}: Another sheep jumps over the fence\n${sheepCounter(sheep - 1)}`;
};

countSheepRouter
  .route('/:sheepSent')
  .all(async (req, res) => {
    const { sheepSent } = req.params;
    const dbInstance = req.app.get('db');
    const addSheep = await dbInstance('sheeps')
      .update('sheepsjumped', dbInstance.raw(`sheepsJumped + ${sheepSent}`))
      .returning('sheepsjumped')
      .then((modRow) => modRow[0]);

    res.send(`${sheepCounter(sheepSent)}\n${addSheep} total sheep have jumped the fence.\n`);
  });

module.exports = countSheepRouter;
