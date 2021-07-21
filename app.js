const express = require('express');
const app = express();
const Data = require("./controller");

const port = 5000;

app.set('view engine', 'ejs');

app.get('/', async function (req, res) {
  const datas = await new Data().getDatas();
  res.render('index.ejs', { datas })
})

app.get('/:category', async function (req, res) {
  const datas = await new Data().getDatasByCategory(req.params.category.toUpperCase());
  res.render('index.ejs', { datas })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})