import React, { useState } from "react";
import Image from "./Image";

import menu from "../assets/menu (7)@2x.png";
import logo from "../assets/Header.3ab5934c.png";
import bell from "../assets/bell (5)@2x.png";
import lang from "../assets/Image 1.png";
import personal from "../assets/360_F_316726850_Kp5gHry52XIA0Cedl7b2K1remR1hJ8NU.png";
import arrow from "../assets/arrow-down (6)@2x.png";
import NavPopup from "./NavPopup";

const NavBar = () => {
  const [state, setState] = useState(false);

  const changeState = () => {
    setState((click) => !click);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center shadow-lg	lg:px-24 py-4">
        <div className="flex lg:justify-start justify-center gap-10 items-center lg:gap-1">
          <div
            onClick={changeState}
            className="rounded-[50%] py-[11px] px-[10px] bg-[#73C2B5]"
          >
            <Image src={menu} alt="menu" className="w-4 cursor-pointer" />
          </div>
          <div className="w-[60%]">
            <Image src={logo} alt="logo" className="" />
          </div>
        </div>

        <div className=" justify-between items-center gap-[10px] hidden lg:flex">
          <Image src={bell} alt="bell" className="w-4 cursor-pointer" />
          <Image src={lang} alt="lang" className="w-9 cursor-pointer" />
          <Image src={personal} alt="personal" className="w-12" />
          <div className="leading-4">
            <h4 className="text-[13px] text-[#7A7A7A]">أهلا بك</h4>
            <span className="text-[#1DB2BB]">أحمد محمد</span>
          </div>
          <Image src={arrow} alt="arrow" className="w-3 cursor-pointer" />
        </div>
      </div>
      {state && <NavPopup />}
    </>
  );
};

export default NavBar;
