require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const countSheepRouter = require('./Routes/recursion/countingSheep');

const app = express();

app.use(logger('combined'));

app.use(express.json());
app.use(express.text());

app.use('/sheep', countSheepRouter);

app.get((req, res, next) => {
  const dbInstance = req.app.get('db');
  dbInstance('test').select()
    .then((query) => console.log(query));
  // console.log(dbInstance);
  // res.end();
  next();
});

app.post('/', async (req, res) => {
  const dbInstance = req.app.get('db');
  const newRow = req.body;
  const postedRow = await dbInstance('test')
    .insert(newRow)
    .returning('*')
    .then((addedRow) => addedRow[0]);

  console.log(newRow);
  console.log(postedRow);
  res.status('201')
    .location(`${req.originalUrl}${postedRow.id}`)
    .send(postedRow);
});

module.exports = app;
