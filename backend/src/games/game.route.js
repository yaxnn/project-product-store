const express = require('express')
const router = express.Router();
const Game = require('./game.model')
const {postAGame, getAllGames, getSingleGame} = require('./game.controller');

// post a game 
router.post("/create-game", postAGame)

// get game
router.get("/",getAllGames )

// single game
router.get("/:id",getSingleGame )



module.exports = router;
