import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center">
      <div className="flex items-center md:justify-end w-full md:w-1/2">
        <img className="w-full md:w-3/4 lg:w-1/2" src={bannerImg} alt="Banner" />
      </div>
      
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          This week's game releases bring an exciting mix for horror and fantasy
          fans. A haunting classic returns with updated visuals and audio,
          amplifying its eerie atmosphere just in time for Halloween. For RPG
          lovers, a new fantasy title offers an enchanting world filled with
          turn-based and real-time combat, blending beautiful art with a rich
          storyline.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
      
    </div>
  );
};

export default Banner;
