const express = require('express')
const router = express.Router();
const Game = require('./game.model')
const {postAGame, getAllGames, getSingleGame, UpdateGame, deleteAGame} = require('./game.controller');

// post a game 
router.post("/create-game", postAGame)

// get game
router.get("/",getAllGames )

// single game
router.get("/:id",getSingleGame )

// update a gameEndpoint
router.put("/edit/:id", UpdateGame)

// delete a game
router.delete("/:id", deleteAGame)



module.exports = router;
