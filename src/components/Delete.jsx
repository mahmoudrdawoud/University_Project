import React from "react";

import alert from "../assets/alert-octagon (2).png";
import Image from "./Image";

const Delete = ({ setDel }) => {
  const flage = () => {
    setDel((click) => !click);
  };

  return (
    <div className="z-50 fixed bg-[#0000005c] right-0 left-0 top-0 bottom-0 w-full h-full flex justify-center items-center">
      <div className=" fixed bg-[#FFFFFF] flex flex-col justify-center items-center shadow-2xl w-fit px-28 py-14 rounded-2xl gap-7">
        <Image src={alert} alt="alert" className="w-2/5" />

        <div className="flex justify-center items-center flex-col text-xl gap-1 font-normal">
          <p className="text-[#555555]">ستقوم بحذف معرض</p>
          <p className="text-[#E62626] text-[21px]">معرض خاص بعالم الأعشاب</p>
          <p className="text-[#555555] text-base">
            هل انت متأكد من اتمام عملية الحذف
          </p>
        </div>

        <div className="flex justify-center text-center gap-3 text-sm">
          <button className="bg-[#E62626] text-[#FFFFFF] shadow-lg rounded-md px-14 py-[15px] text-center">
            نعم
          </button>
          <button
            onClick={flage}
            className="bg-[#CFCFCF] text-[#858585] shadow-lg rounded-md px-16 py-[15px] text-center"
          >
            لا
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
