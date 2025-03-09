const express = require('express');
const app = express();
const cors = require("cors");


const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

require('dotenv').config()

// middleware

app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173',"https://gamevault-frontend-ten.vercel.app"],
  credentials:true
}))


// routes
const gameRoutes = require('./src/games/game.route');
const orderRoutes = require('./src/orders/order.route')
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/games", gameRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)


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

