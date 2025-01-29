const postAGame = async (req,res) => {
    try {
        const newGame = await Game({...req.body});
        await newGame.save();
        res.status(200).send({message: "Game posted successfully", game: newGame})
    } catch (error) {
        console.error("Error creating game",error);
        res.status(400).send({message: "Failed to create game"})
    }
}

module.exports = {
    postAGame
}