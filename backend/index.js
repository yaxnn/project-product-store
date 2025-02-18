const express = require('express');
const app = express();
const cors = require("cors");


const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

require('dotenv').config()

// middleware

app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
}))


// routes
const gameRoutes = require('./src/games/game.route');
const { createAOrder } = require('./src/orders/order.controller');
app.use("/api/games", gameRoutes)
app.use("/api/orders", createAOrder)



async function main() {
    await mongoose.connect(process.env.DB_URL);
  
    app.use('/',(req,res) => {
        res.send("Game store server is running")
    })
  }

main().then(() => console.log("Mongodb connect successfully")).catch(err => console.log(err)); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

