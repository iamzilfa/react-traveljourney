import React from "react";
import One from "../src/images/one.png"

const Newcard = () => {
  return (
    <div className="flex">
      <img src={One} alt="/" className="w-full" />
      <div>
        <div>
          <img src="../" alt="/" />
          <span>JAPAN</span>
          <span>View on Google Maps</span>
        </div>
        <h1>Mount Fuji</h1>
        <div>
          <p>12 Jan, 2021 - 24 Jan, 2021</p>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newcard;
