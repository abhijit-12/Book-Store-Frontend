import React from "react";
import { useState } from "react";
import axios from "axios";


const Addbooks = () => {
  
  const [Data, setData] = useState({
    bookname: "",
    desc: "",
    author: "",
    image: "",
    price: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setData({...Data, [name]: value });
  };
  const submitbook= async (res) => {
    await axios.post("http://localhost:1000/api/books/add", Data).then((res)=>console.log(res));
    setData({
      bookname: "",
      desc: "",
      author: "",
      image: "",
      price: "",
    });
    alert("Book added successfully");
  };
  return (
    <div className="">
      <div
        className="bg-dark container-fluid"
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("https://wallpapercave.com/wp/wp2297952.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="form-group container">
          <label className="text-white mt-5" for="formGroupExampleInput">
            Add Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="book name"
            name="bookname"
            value={Data.bookname}
            onChange={change}
          />
        </div>

        <div className="form-group container">
          <label className="text-white mt-4" for="formGroupExampleInput2">
            Add Description
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="description"
            name="desc"
            value={Data.desc}
            onChange={change}
          />
        </div>

        <div className="form-group container">
          <label className="text-white mt-4" for="formGroupExampleInput2">
            Enter Author
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="author name"
            name="author"
            value={Data.author}
            onChange={change}
          />
        </div>

        <div className="form-group container">
          <label className="text-white mt-4" for="formGroupExampleInput2">
            Add Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="img url"
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>

        <div className="form-group container">
          <label className="text-white mt-4" for="formGroupExampleInput2">
            Enter Price
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="price"
            name="price"
            value={Data.price}
            onChange={change}
          />
          <button onClick={()=>{submitbook()}} type="button" class="btn btn-outline-warning mt-4">
            Add Book
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Addbooks;
