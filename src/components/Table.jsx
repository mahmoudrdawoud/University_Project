import star from "../assets/star (17)@2x.png";
import star1 from "../assets/stat1.png";

import up from "../assets/up.png";
import down from "../assets/down.png";
import Image from "./Image";

import img5 from "../assets/x-circle (2).png";
import img6 from "../assets/edit-3 (2).png";
import img7 from "../assets/eye (13).png";
import img8 from "../assets/handshake (1).png";
import img9 from "../assets/police-box (1).png";

import onOFf from "../assets/pngwing.com.png";
import { useState } from "react";
import Pagination from "./Pagination";

const Table = ({ changeDel }) => {
  const apiData = [
    {
      id: "01",
      Exhibition_name:
        "معرض خاص بتقييم مساق المادة التعليمية الطبية في جامعة الامام عبد الرحمن بن فيصل",
      number_of_participants: 120,
    },
    {
      id: "02",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 22,
    },
    {
      id: "03",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 777,
    },

    {
      id: "04",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 333,
    },

    {
      id: "05",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 111,
    },

    {
      id: "06",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 70,
    },

    {
      id: "07",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 90,
    },

    {
      id: "08",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 44,
    },

    {
      id: "09",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 11,
    },

    {
      id: "10",
      Exhibition_name: "معرض خاص بعالم الاعشاب",
      number_of_participants: 88,
    },
  ];
  //////////////////////////////////////////////////////////////////////////
  const [data, setData] = useState(apiData);
  const [sortAscending, setSortAscending] = useState(true);

  const sortByParticipants = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) =>
      sortAscending
        ? b.number_of_participants - a.number_of_participants
        : a.number_of_participants - b.number_of_participants
    );
    setData(sortedData);
    setSortAscending(!sortAscending);
  };
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //////////////////////////////////////////////////////////////////////////

  return (
    <>
      <table className="w-full text-center mb-10">
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <thead className="h-16">
          <tr className="bg-[#046C77] rounded-sm shadow-lg  w-full  text-white p-5">
            <th className="text-sm ">#</th>
            <th>
              <div className="flex justify-start items-center gap-3 p-5">
                <div className="flex justify-center items-center flex-col gap-1">
                  <Image src={up} alt="up" className="w-2 cursor-pointer" />
                  <Image src={down} alt="down" className="w-2 cursor-pointer" />
                </div>
                <span className="text-sm">اسم المعرض</span>
              </div>
            </th>
            <th className="text-sm ">التقييم</th>
            <th className="">
              <div className="flex justify-center items-center gap-3 ">
                <div className="flex justify-center items-center flex-col gap-1">
                  <div onClick={sortByParticipants}>
                    <Image src={up} alt="up" className="w-2 cursor-pointer " />
                  </div>
                  <div onClick={sortByParticipants}>
                    <Image
                      src={down}
                      alt="down"
                      className="w-2 cursor-pointer"
                    />
                  </div>
                </div>
                <span className="text-sm ">عدد المشاركين</span>
              </div>
            </th>
            <th className=" ">
              <div className="flex justify-center items-center gap-3 ">
                <div className="flex justify-center items-center flex-col gap-1">
                  <Image src={up} alt="up" className="w-2 cursor-pointer" />
                  <Image src={down} alt="down" className="w-2 cursor-pointer" />
                </div>
                <span className="text-sm ">عدد الاركان</span>
              </div>
            </th>
            <th className="">
              <div className="flex justify-center items-center gap-3 ">
                <div className="flex justify-center items-center flex-col gap-1">
                  <Image src={up} alt="up" className="w-2 cursor-pointer" />
                  <Image src={down} alt="down" className="w-2 cursor-pointer" />
                </div>
                <span className="text-sm ">تاريخ البدء</span>
              </div>
            </th>
            <th className="x">
              <div className="flex justify-center items-center gap-3 ">
                <div className="flex justify-center items-center flex-col gap-1">
                  <Image src={up} alt="up" className="w-2 cursor-pointer" />
                  <Image src={down} alt="down" className="w-2 cursor-pointer" />
                </div>
                <span className="text-sm ">تاريخ الانتهاء</span>
              </div>
            </th>
            <th className="text-sm ">الاجراءات</th>
            <th className="text-sm ">الحالة</th>
          </tr>
        </thead>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id} className="text-[#777777] h-[80px]">
                <td className="border-[1px] border-solid w-[50px] ">
                  {item.id}
                </td>
                <td className="text-start text-xs border-[1px] border-solid  w-1/5 py-4 px-5 font-bold">
                  {item.Exhibition_name}
                </td>
                <td className="border-[1px] border-solid">
                  <div className="flex flex-wrap  justify-center items-center gap-1">
                    <Image src={star1} alt="star" className="w-5" />
                    <Image src={star1} alt="star" className="w-5" />
                    <Image src={star} alt="star" className="w-5" />
                    <Image src={star} alt="star" className="w-5" />
                    <Image src={star} alt="star" className="w-5" />
                  </div>
                </td>
                <td className="border-[1px] border-solid">
                  {item.number_of_participants}
                </td>
                <td className="border-[1px] border-solid">24</td>

                <td className="border-[1px] border-solid">
                  <div className="flex flex-col items-center justify-center">
                    <span>17/05/2023</span>
                    <span>11:00 م</span>
                  </div>
                </td>

                <td className="border-[1px] border-solid">
                  <div className="flex flex-col items-center justify-center">
                    <span>19/05/2023</span>
                    <span>11:00 م</span>
                  </div>
                </td>
                <td className="border-[1px] border-solid">
                  <div className="flex flex-wrap  justify-center items-center gap-3">
                    <div>
                      <Image
                        src={img9}
                        alt="img9"
                        className="w-4 cursor-pointer"
                      />
                    </div>
                    <div>
                      <Image
                        src={img8}
                        alt="img8"
                        className="w-4  cursor-pointer"
                      />
                    </div>

                    <div>
                      <Image
                        src={img7}
                        alt="img7"
                        className="w-4  cursor-pointer"
                      />
                    </div>

                    <div>
                      <Image
                        src={img6}
                        alt="img6"
                        className="w-4  cursor-pointer"
                      />
                    </div>

                    <div onClick={changeDel.changeDel}>
                      <Image
                        src={img5}
                        alt="img5"
                        className="w-4  cursor-pointer"
                      />
                    </div>
                  </div>
                </td>
                <td className="border-[1px] border-solid">
                  <div className="flex justify-center items-center">
                    <Image
                      src={onOFf}
                      alt="onOFf"
                      className="w-7  cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Table;
