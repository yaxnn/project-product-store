import React, { useEffect, useState } from "react";
import GameCard from "../game/GameCard";


const categories = [
  "choose a genre",
  "Action",
  "Adventure",
  "Sports & Racing",
  "Strategy",
];
const TopSellers = () => {
  const [games, setGames] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("choose a genre");

  const fetchGames = async () =>{

    try {

      const response = await fetch("games.json")
      const data = await response.json()
      setGames(data)
      
    } catch (error) {

      console.log("Err in settin games",error)
      
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  const filterGames = selectedCategory === "choose a genre" ? games: games.filter(game => game.category === selectedCategory)
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Seller</h2>
      {/* {category filtering} */}
      <div className="mb-8 flex items-center">
        <select 
        onChange={(e) => setselectedCategory(e.target.value)}
        name="category" id="category" className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {
            filterGames.map((game, index) => (
                    <GameCard key={index} game={game}/>
            ))
      }
    </div>
  );
};

export default TopSellers;
