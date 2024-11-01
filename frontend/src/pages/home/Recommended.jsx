import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GameCard from "../game/GameCard";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const Recommended = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await fetch("games.json");
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.log("Err in settin games", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);
  return <div className="py-16">
    <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>;
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
      games.length > 0 && games.map((game, index) => (
        <SwiperSlide key={index}>
          <GameCard game={game} />
        </SwiperSlide>
      ))
    }
    
  </Swiper>
  </div>
};

export default Recommended;
