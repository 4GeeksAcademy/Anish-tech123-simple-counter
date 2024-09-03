import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ counter }) => {
	return (
		<div className="container-fluid">
		<div className ="text-center d-flex justify-content-center bg-black text-white ">
<h1 className = "me-3" style={{fontSize:"100px"}}><i className="fa-regular fa-clock"></i></h1>
			<h1 className = "me-3" style={{fontSize:"100px"}}>{Math.floor(counter / 100000) % 10}</h1>
			<h1 className = "me-3" style={{fontSize:"100px"}}>{Math.floor(counter / 10000) % 10}</h1>
			<h1 className = "me-3" style={{fontSize:"100px"}}>{Math.floor(counter / 1000) % 10}</h1>
			<h1 className = "me-3" style={{fontSize:"100px"}}>{Math.floor(counter / 100) % 10}</h1>
			<h1 className = "me-3" style={{fontSize:"100px"}}>{Math.floor(counter / 10) % 10}</h1>
			<h1 className = "me-3" style={{fontSize:"100px"}}>{Math.floor(counter / 1) % 10}</h1>
		</div> 
		</div>
	);
};

export default Home;
