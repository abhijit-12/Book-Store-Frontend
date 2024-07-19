import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Bookssection = ({ data }) => {
  // console.log(data);
  const [Data, SetData] = useState([]);
  
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/books/allbooks")
        .then((res) => SetData(res.data.books));
    };
    fetch();
  }, []);

  const deleteItem = async (id) => {
    console.log("deleting item", id);
    await axios
      .delete(`http://localhost:1000/api/books/delbooks/${id}`)
      .then((res) => {
        console.log(res.data);
        SetData(Data.filter((data) => data.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting item", error);
      });
    alert("Book deleted successfully Refresh the page");
  };
  return (
    <div className=" container-fluid d-flex justify-content-around align-items-center flex-wrap">
      {data &&
        data.map((item, index) => {
          return (
            <>
              <div className="card">
                <img className="card-img-top" src={item.image} alt="/" />
                <div className="card-body">
                  <h5 className="card-title">{item.bookname}</h5>
                  <p className="card-text">{item.desc.slice(0, 20)}....</p>
                  <p>Author: {item.author}</p>
                  <p style={{ fontFamily: "fantasy" }}>RS: {item.price}</p>
                  <Link  to={`/updbooks/${item._id}`} className="btn1">
                    update
                  </Link>
                  <button onClick={() => deleteItem(item._id)} className="btn2">
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      ;
    </div>
  );
};

export default Bookssection;
