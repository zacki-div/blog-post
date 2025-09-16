const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

//lbzakariia_db_user
//1cqEhSxGFtvryFH3

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://lbzakariia_db_user:1cqEhSxGFtvryFH3@zakaria.9rimeco.mongodb.net/?retryWrites=true&w=majority&appName=zakaria');

  app.get('/', (req, res) => {
  res.send('My Food blog App Server is running!')
})
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
