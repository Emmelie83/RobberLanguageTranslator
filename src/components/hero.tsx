import React from 'react'
import HeaderImage from '../assets/img/ship6.png'
import Navbar from './navbar';

const Hero: React.FC = () => (
  <div className="">
    <Navbar />
		<div
			className="bg-cover bg-center h-[610px] flex flex-col justify-center items-center"
			style={{ backgroundImage: `url(${HeaderImage})` }}>
      <h1 className="text-8xl text-center text-amber-950 text-shadow-lg">
				Rövarspråket
			</h1>
		</div>
	</div>
);

export default Hero;
