import React from "react";
import hero_img from "../images/airbnb_clone_hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero_img} className="hero--img" alt="Cool stuff to do"></img>
      <h1 className="hero--title">Online Experiences</h1>
      <h4 className="hero--desc">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h4>
    </div>
  );
}
