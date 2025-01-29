const express = require('express')
const router = express.Router();
const Game = require('./game.model')
const {postAGame} = require('./game.controller');

// post a game 
router.post("/create-game", postAGame)


module.exports = router;
