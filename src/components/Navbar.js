import React from "react";
import Fill from "../../src/images/fill.png";

const Navbar = () => {
  return (
    <div className="bg-[#F55A5A] w-full flex items-center justify-center gap-4 text-white py-4 font-medium text-[14.4608px] leading-[18px] tracking-[-0.075em]">
      <img src={Fill} alt="/" />
      <p>my travel journal.</p>
    </div>
  );
};

export default Navbar;
