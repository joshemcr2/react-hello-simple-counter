import React from "react";



const Home = ({counter}) => {
	let primero = Math.floor(counter/1)%10
	let segundo = Math.floor(counter/10)%10
	let tercero = Math.floor(counter/100)%10
	let cuarto = Math.floor(counter/1000)%10
	let quinto = Math.floor(counter/10000)%10
	let sexto = Math.floor(counter/100000)%10
	

	return (
		<div className="justify-content-center d-flex bg-dark">
			<div className="card bg-dark text-white me-2 text-center justify-content-center" style={{width: "7rem", fontSize: "80px"}}>
			<i className="fa-regular fa-clock"></i>
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "80px"}}>
				{sexto}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "80px"}}>
				{quinto}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "80px"}}>
				{cuarto}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "80px"}}>
				{tercero}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "80px"}}>
				{segundo}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "80px"}}>
				{primero}
			</div>
		</div>
	);
};

export default Home;