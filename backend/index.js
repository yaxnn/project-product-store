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
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  try {
      await mongoose.connect(process.env.DB_URL);
      isConnected = true;
      console.log("MongoDB connected successfully");
  } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
  }
}

app.use(async (req, res, next) => {
    await connectDB();
    next();
});

app.get('/', (req, res) => {
  res.send("Game Vault Server is running!");
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

module.exports = app;

