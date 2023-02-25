import React from "react";
import Star from "../images/star.jpg";
import Lady from "../images/lady.png";

const Card = () => {
  return (
    <div className="w-[176px] text-xs">
      <img src={Lady} alt="/" className="w-full rounded-[9px]" />
      <div className="flex items-center">
        <img src={Star} alt="/" className="h-[14px]" />
        <span>5.0</span>
        <span>(6) .</span>
        <span>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span>From $136</span> / person</p>
    </div>
  );
};

export default Card;
