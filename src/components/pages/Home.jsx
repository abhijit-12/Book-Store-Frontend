import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items -center"
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage:
            'url("https://4kwallpapers.com/images/wallpapers/teen-girl-reading-3840x2160-12755.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row container">
          <div
            className="col-1g-6 d-flex justify-content-center align-items-start flex-column"
            style={{ height: "91.5vh" }}
          >
            <h2 className="animate-charcter" style={{ fontSize: "70px" }}>BIKI BOOK STORE</h2>
            <h3 className='text-animation2' style={{fontSize:"50px"}}>FOR YOU</h3>
            <p className=" mb-10" style={{color:"silver"}}>checkout all from here..</p>
            <Link style={{textDecoration:"none", color:"white"}} to="/books" className="viewBooks">Show Books</Link>
          </div>
          <div
            className="col-1g-6 d-flex justify-content-center align-items-end flex-column"
            style={{ height: "91.5vh" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
