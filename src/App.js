import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Books from "./components/pages/Books";
import Addbooks from "./components/pages/Addbooks";
import Footer from "./components/pages/Footer";
import Update from "./components/pages/Update";


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route  path="/books" element={<Books></Books>} />
        <Route  path="/addbooks" element={<Addbooks></Addbooks>} />
        <Route  path="/updbooks/:id" element={<Update></Update>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;
