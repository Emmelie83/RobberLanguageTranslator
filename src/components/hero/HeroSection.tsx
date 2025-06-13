import React from "react";
import Navbar from "../Navbar";
import HeroImageMobile from "../../assets/img/hero-mobile.png";
import HeroImageDesktop from "../../assets/img/hero-desktop.png";

const Hero: React.FC = () => (
	<div id="home">
		<Navbar />

		{/* Mobile Background */}
		<div
			className="lg:hidden flex flex-col justify-center items-center bg-cover bg-center h-[500px] "
			style={{ backgroundImage: `url(${HeroImageMobile})` }}></div>

		{/* Desktop Background */}
		<div
			className="hidden lg:flex bg-cover bg-center h-[700px] flex-col justify-center items-center"
			style={{ backgroundImage: `url(${HeroImageDesktop})` }}></div>
	</div>
);

export default Hero;
