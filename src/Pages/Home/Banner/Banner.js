import React from "react";
import "./Bannner.css";

const Banner = () => {
  const image =
    "https://i.ytimg.com/vi/lt2CExnMMhk/maxresdefault.jpg";
  return (
    <div
      className="hero rounded-lg"
      style={{ backgroundImage: `url("${image}")`, height: "80vh" }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">second hand phone</h1>
          <p className="mb-5">
            Used mobile phone prices in Bangladesh: Tablets and smart phones We
            sell mobile devices and accessories for top prices.
          </p>
          <button className="btn glass text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
