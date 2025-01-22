// GameCard.js
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { addToCart } from "../../redux/features/cart/cartSlice";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();

  const handleAddToCart= (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-4 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center sm:items-start gap-4">
        <div className="w-full h-60 sm:h-80 rounded-lg overflow-hidden border">
          <Link to={`/games/${game._id}`}>
            <img
              src={`${getImgUrl(game.coverImage)}`}
              alt={game.title}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="text-center sm:text-left w-full">
          <Link target="_blank" to={game.link}>
            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 mb-2">
              {game.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-3">
            {game.description.length > 80
              ? `${game.description.slice(0, 80)}...`
              : game.description}
          </p>
          <p className="font-medium text-lg mb-4">
            ${game?.newPrice}{" "}
            <span className="line-through text-sm font-normal ml-2">
              ${game?.oldPrice}
            </span>
          </p>
          <button
          onClick={()=> handleAddToCart(game)}
          className="btn-primary flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
