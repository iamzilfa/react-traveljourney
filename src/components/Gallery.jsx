import React from "react";
import Card from "./Card";
import { cardData } from "./CardData";


const Gallery = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 flex justify-end gap-4">
      <div>
        {cardData.map((e, i) => (
          <Card key={i} image={e.image} text={e.text} />
        ))}
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Gallery;
