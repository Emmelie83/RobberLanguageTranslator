import React from "react";
import Navbar from "../Navbar";

const Hero: React.FC = () => (
	<div id="home" className="">
		<Navbar />
		<div
			className="bg-cover bg-left h-[640px] flex flex-col justify-center items-center bg-[url('../../public/hero.png')]"
			></div>
	</div>
);

export default Hero;
