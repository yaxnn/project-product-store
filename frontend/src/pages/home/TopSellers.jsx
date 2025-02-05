import React, { useEffect, useState } from "react";
import GameCard from "../game/GameCard";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { useFetchAllGamesQuery } from "../../redux/features/games/gamesApi";

const categories = [
  "choose a genre",
  "Action",
  "Adventure",
  "Sports & Racing",
  "Strategy",
];
const TopSellers = () => {
  const [selectedCategory, setselectedCategory] = useState("choose a genre");



  const {data: games = []} = useFetchAllGamesQuery()

  

  const filterGames =
    selectedCategory === "choose a genre"
      ? games
      : games.filter((game) => game.category === selectedCategory);
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Seller</h2>
      {/* {category filtering} */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setselectedCategory(e.target.value)}
          name="category"
          id="category"
          className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
      >

        {
          filterGames.length > 0 && filterGames.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard key={index} game={game} />
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </div>
  );
};

export default TopSellers;
