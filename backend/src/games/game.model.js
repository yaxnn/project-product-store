const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }  

  },{
    timestamps: true
  });


  const Game = mongoose.model('Game', gameSchema);

  module.exports = Book;