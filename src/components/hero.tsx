import React from 'react'
import HeaderImage from '../assets/img/header.jpg'

const Hero: React.FC = () => (
	<div className="">
		<div
			className="bg-cover bg-center h-[650px] flex flex-col justify-center items-center"
			style={{ backgroundImage: `url(${HeaderImage})` }}>
			<h1 className="text-8xl text-center text-amber-400">
				Rövarspråket
			</h1>
		</div>
	</div>
);

export default Hero;
