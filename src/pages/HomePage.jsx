import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Delete from "./../components/Delete";

const HomePage = () => {
  const [del, setDel] = useState(false);

  const changeDel = () => {
    setDel((click) => !click);
  };
  return (
    <div className="">
      <NavBar />
      <Header changeDel={changeDel} />
      {del && <Delete setDel={setDel} />}
      <Footer />
    </div>
  );
};

export default HomePage;
