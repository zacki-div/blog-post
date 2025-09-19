const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//lbzakariia_db_user
//1cqEhSxGFtvryFH3

app.use(express.json());
app.use(cors());



async function main() {
  await mongoose.connect('mongodb+srv://lbzakariia_db_user:1cqEhSxGFtvryFH3@zakaria.9rimeco.mongodb.net/zakaria?retryWrites=true&w=majority&appName=zakaria');

  app.get('/', (req, res) => {
  res.send('My Food blog App Server is running!')
})
}

main().then(() => console.log("mongodb connected secceffuly!")).catch(err => console.log(err));

//routes
const ItemRoutes = require("./src/routes/itemRoute");

app.use('/api', ItemRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
