import React from "react";
import Image from "./Image";

import bell from "../assets/bell (5)@2x.png";
import lang from "../assets/Image 1.png";
import personal from "../assets/360_F_316726850_Kp5gHry52XIA0Cedl7b2K1remR1hJ8NU.png";
import arrow from "../assets/arrow-down (6)@2x.png";

const NavPopup = () => {
  return (
    <div className="p-[5px] lg:hidden justify-center items-center gap-[10px] flex shadow-md bg-[#aee3db]">
      <Image src={bell} alt="bell" className="w-4 cursor-pointer" />
      <Image src={lang} alt="lang" className="w-9 cursor-pointer" />
      <Image src={personal} alt="personal" className="w-12" />
      <div className="leading-4">
        <h4 className="text-[13px] text-[#7A7A7A]">أهلا بك</h4>
        <span className="text-[#1DB2BB]">أحمد محمد</span>
      </div>
      <Image src={arrow} alt="arrow" className="w-3 cursor-pointer" />
    </div>
  );
};

export default NavPopup;
