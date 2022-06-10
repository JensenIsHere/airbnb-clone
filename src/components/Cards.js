import React from "react";
import card_img from "../images/img_zaferas.png";
import star from "../images/star.svg";

export default function Cards() {
  return (
    <div className="card">
      <div className="card--stack_grid">
        <img src={card_img} className="card--img"></img>
        <div className="card--status_box">
          <p className="card--status_text">SOLD OUT</p>
        </div>
      </div>
      <div className="card--rating_container">
        <img src={star} className="card--rating_img"></img>
        <p className="card--rating_text">
          5.0 <span>(6) · USA</span>
        </p>
      </div>
      <p className="card--event_title">Life lessons with Katie Zaferes</p>
      <p className="card--event_cost">
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
