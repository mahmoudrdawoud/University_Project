import React from "react";
import home from "../assets/home (11)@2x.png";
import Image from "./Image";
import img1 from "../assets/filter (5)@2x.png";
import img2 from "../assets/file-pdf@2x.png";
import img3 from "../assets/file-XLS@2x.png";
import img4 from "../assets/plus (3)@2x.png";
import Table from "./Table";

const Header = (props) => {
  return (
    <>
      <div className="lg:mx-16 lg:my-16 my-10 p-2 lg:p-0">
        <div className="flex justify-start items-center gap-3 pb-14">
          <Image src={home} alt="home" className="w-4" />
          <span className="text-[#7A7A7A]">/</span>
          <h4 className="text-[#24B3B9]">المعارض</h4>
        </div>
        <div className="bg-white shadow-2xl lg:p-10 p-1">
          <div className=" flex justify-between items-center pb-10">
            <div className="text-[#046C77] lg:text-[25px]  font-normal">
              قائمة المعارض
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                src={img1}
                alt=""
                className="border-2 border-solid border-[#24B3B9] lg:p-2 p-1 lg:w-10  w-6 rounded-md cursor-pointer"
              />
              <Image
                src={img4}
                alt=""
                className="bg-[#046C77]  lg:p-3 lg:w-[38px] p-2 w-6 rounded-md cursor-pointer"
              />
              <Image
                src={img2}
                alt=""
                className=" bg-[#B91414] p-2 lg:w-[35px]  w-6 rounded-md cursor-pointer"
              />
              <Image
                src={img3}
                alt=""
                className="bg-[#138D5F] p-2 lg:w-[35px]  w-6 rounded-md cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full overflow-x-scroll sm:overflow-hidden">
            <Table changeDel={props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
