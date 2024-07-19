import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Update = ({ data }) => {
  const [Data, setData] = useState(data);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/books/allbooks")
        .then((res) => res.data.books);
    };
    fetch();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };
   console.log(Data);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.put(
  //       `http://localhost:1000/api/books/updbooks/${Data.id}`,
  //       Data
  //     );
  //     console.log("Updated item:", response.data);
  //     // Handle successful update (e.g., show a success message, update state, etc.)
  //   } catch (error) {
  //     console.error("Error updating item:", error);
  //     // Handle error (e.g., show an error message)
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:1000/api/books/updbooks/${Data.id}`,
        Data
      );
      console.log("Updated item:", response.data);
      // Handle successful update (e.g., show a success message, update state, etc.)
    } catch (error) {
      console.error("Error updating item:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div
          className="bg-dark container-fluid"
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage:
              'url("https://wallpapercave.com/wp/wp2297952.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-center text-white display-4">Update Book</h1>
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
              value={setData.bookname}
              onChange={handleChange}
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
              value={setData.desc}
              onChange={handleChange}
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
              value={setData.author}
              onChange={handleChange}
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
              value={setData.image}
              onChange={handleChange}
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
              value={setData.price}
              onChange={handleChange}
            />
            <button
              type="submit"
              class="btn btn-outline-warning mt-4"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
