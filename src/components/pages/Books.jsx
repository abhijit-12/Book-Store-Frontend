import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Bookssection from "./Bookssection";

const Books = () => {
  const [Data, SetData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://book-store-backend-dcs4.onrender.com/api/books/allbooks")
        .then((res) => SetData(res.data.books));
    };
    fetch();
  },[]);

  return (
    <div>
      <div
        className="container-fluid"
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("https://wallpapercave.com/wp/wp2297952.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 className="text-center text-white ">BOOKS SECTION</h4>
        {Data ? <Bookssection data={Data}/> : (
          <div className="text-white text-center">Loading...</div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Books;
