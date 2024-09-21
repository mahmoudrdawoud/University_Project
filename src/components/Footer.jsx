import React from "react";
import Image from "./Image";

import visa from "../assets/visa (1)@2x.png";
import mastro from "../assets/Group 98@2x.png";
import facebook from "../assets/Path 162@2x.png";
import instagram from "../assets/Subtraction 2@2x.png";
import twitter from "../assets/Path 163@2x.png";
import youtube from "../assets/Path 167@2x.png";

const Footer = () => {
  return (
    <div>
      <div className="lg:pr-[80px] pr-3 pb-[70px] pt-[40px] flex-col lg:flex-row bg-[#2E3E5F] text-white flex justify-start items-start gap-[13px] xl:gap-[80px]">
        <div className="flex flex-col gap-[40px]">
          <h2 className="text-[#24B3B9] font-normal text-[28px]">عن طب اكس</h2>
          <p className="w-full lg:w-[535px]">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
          </p>
        </div>
        <div className="flex flex-col gap-[40px]">
          <h2 className="text-[#24B3B9] font-normal text-[28px]">
            الوصول السريع
          </h2>
          <div className="flex justify-between items-start gap-x-[60px] xl:gap-x-[100px]">
            <ul className="list-disc pr-4">
              <li>من نحن</li>
              <li>تواصل معنا</li>
              <li>المدربين المحترفين</li>
              <li>الدورات التدريبية</li>
            </ul>

            <ul className="list-disc my-auto mx-0 ">
              <li>انضم الينا</li>
              <li>الشركاء</li>
              <li>الأسئلة الشائعة</li>
              <li>تذاكر الدعم</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-[15px]">
          <h2 className="text-[#24B3B9] font-normal text-[28px]">
            نقبل الدفع عبر
          </h2>
          <div className="gap-4 flex justify-start items-center ">
            <Image
              src={mastro}
              alt="mastro"
              className="w-[35px] cursor-pointer"
            />
            <Image src={visa} alt="visa" className="w-[35px] cursor-pointer" />
          </div>
          <h3 className="text-[#24B3B9]  text-2xl">تابعنا على</h3>
          <div className="flex justify-start items-center gap-3">
            <Image
              src={facebook}
              alt="facebook"
              className="w-[7px] cursor-pointer"
            />
            <Image
              src={twitter}
              alt="twitter"
              className="w-[12px] cursor-pointer"
            />
            <Image
              src={instagram}
              alt="instagram"
              className="w-[12px] cursor-pointer"
            />
            <Image
              src={youtube}
              alt="youtube"
              className="w-[12px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#243351] text-white p-5 text-center shadow-lg">
        جميع الحقوق محفوظة لموقع طب اكس 2023
      </div>
    </div>
  );
};

export default Footer;
