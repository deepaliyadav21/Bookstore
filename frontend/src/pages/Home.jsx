import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	const image = require("../images/girl.jpg")
  return (
    <div className="Home-Page bg-dark text-white container-fluid">
      <div className = "row container">
	<div className="col-lg-6 d-flex justify-content-center  align-items-lg-start flex-column"
	style={{height: "91.5vh"}}
	>
	 <h2 style = {{fontSize:"90px"}}>BOOK STORE</h2>
	 <h3 style = {{fontSize:"50px"}}>FOR YOU</h3>
	 <p className="mb-0"style = {{color:"silver"}}>Checkout The Books From Here.</p>
	 <Link to="/books" className="viewBook my-3">View Books</Link>
    </div>
    <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
    style={{height: "91.5vh"}}
    >
	<img className="img-fluid homeImg" src={image} alt="/" />
 </div>
</div>
</div>
 );
};

export default Home;
