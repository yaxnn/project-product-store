import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgurl";
const GameCard = ({game}) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
      <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <a href="/">
            <img
              src={`${getImgUrl(game.coverImage)}`}
              alt=""
              className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </a>
        </div>

        <div>
          <a href="/">
          <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {game.title}
            </h3>
          </a>
          <p className="text-gray-600 mb-5">Game Description</p>
          <p className="font-medium mb-5">
            $80 <span className="line-through font-normal ml-2">$100</span>
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
