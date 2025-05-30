import React from 'react'
import HeaderImage from '../assets/img/ship6.png'
import Navbar from './navbar';

const Hero: React.FC = () => (
  <div className="">
    <Navbar />
		<div
			className="bg-cover bg-center h-[640px] flex flex-col justify-center items-center"
			style={{ backgroundImage: `url(${HeaderImage})` }}>
      
		</div>
	</div>
);

export default Hero;
