import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";
import news4 from "../../assets/news/news4.png";
import news5 from "../../assets/news/news5.png";

const news = [
  {
    id: 1,
    title: "GTA 6 release date has millions ready to book",
    description:
      "Given the history of significant sick day spikes during major game releases,” stated Matt Gibbs, the director of GTA Boom, “like with Rockstar's last big hit, Red Dead Redemption II, it wouldn't be surprising to see a wave of 'GTA flu' when the game launches. Employers in these high-interest states might want to prepare for an unusual increase in sick leave requests around that time.",
    image: news1,
  },
  {
    id: 2,
    title: "Assassin's Creed Shadows will use Denuvo",
    description:
      "Ubisoft seems to be obsessed with shooting itself on its foot when it comes to Assassin's Creed Shadows. First, the studio delayed the release date of the game shortly after announcing the game, leaving the fans quite disappointed in the process. The rush to announce an initial release date for a game that, in the end, wasn't really to be released may be understandable given the poor results of Star Wars Outlaws.",
    "image": news2
  },
  {
    id: 3,
    title: "Doom: The Dark Ages",
    description:
      "The Dark Ages is an upcoming first-person shooter game developed by id Software and published by Bethesda Softworks. It is intended to be the eighth main entry in the Doom franchise and the third installment of the modern series, following Doom Eternal. The game narratively serves as a prequel to Doom.we can guess when in 2025 we can expect to see it.",
      "image": news3
  },
  {
    id: 4,
    title: "Ghost Of Yōtei",
    description:
      "Ghost of Yōtei is an upcoming action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. It is a standalone sequel to the 2020 game Ghost of Tsushima. It is set to release for PlayStation 5 in 2025.As revealed in its announcement trailer, Ghost of Yotei is set in 1603; a massive 329 years after Ghost of Tsushima",
      "image": news4
  },
  {
    id: 5,
    title: "Pokémon Legends: Z-A",
    description:
      "Pokémon Legends: Z-A is an upcoming 2025 video game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. Announced in February 2024, Legends: Z-A is part of the ninth generation of Pokémon video games.Being set within a single city is quite a departure from the past .",
    "image": news5
  },
];

const News = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News</h2>

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
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
              {/* {content} */}
              <div className="py-4">
                <Link to="/">
                  <h3 className="text-lg font-medium hover:text-blue-500">
                    {item.title}
                  </h3>
                </Link>
                <div className="w-10 h-[4px] bg-primary mb-5"></div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="">
                <img src={item.image} alt="" className="w-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
