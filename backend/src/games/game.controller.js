const Game = require("./game.model");

const postAGame = async (req,res) => {
    try {
        const newGame = await Game({...req.body});
        await newGame.save();
        res.status(200).send({message: "Game Posted Successfully", game: newGame})
    } catch (error) {
        console.error("Error Creating Game",error);
        res.status(400).send({message: "Failed To Create Game"})
    }
}

// get all games

const getAllGames = async (req,res) => {
    try {
        const games = await Game.find().sort({ createdAt: -1})
        res.status(200).send(games)

    } catch (error) {
        console.error("Error Fetching Games",error);
        res.status(400).send({message: "Failed To Fetch Games"})
    }

}

// get single game
const getSingleGame = async (req,res) =>{
    try {
        const {id} = req.params;
        const game = await Game.findById(id);
        if (!game) {
            res.status(404).send({message: "Game Not Found!"})
        }
        res.status(200).send(game)

    } catch (error) {
        console.error("Error Fetching Game",error);
        res.status(400).send({message: "Failed To Fetch Game"})
    }
}

// update Game data

const UpdateGame = async(req,res) => {
    try {
        const {id} = req.params;
        const updatedGame = await Game.findByIdAndUpdate(id, req.body, {new:true});
        if (!updatedGame) {
            res.status(404).send({message: "Game Is Not Found!"})
        }
        res.status(200).send({
            message: "Book Updated Successfully",
            book: updatedGame
        })
    } catch (error) {
        console.error("Error Updating Game",error);
        res.status(500).send({message: "Failed To Update Game"})
    }
}


// delete a book

const deleteAGame = async(req,res) => {

    try {
        const {id} = req.params;
    } catch (error) {
        console.error("Error Deleting a Game",error);
        res.status(500).send({message: "Failed To Delete A Game"})
    }
}








module.exports = {
    postAGame,
    getAllGames,
    getSingleGame,
    UpdateGame,
    deleteAGame
}
