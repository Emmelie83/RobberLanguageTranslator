import React from "react";

const Footer: React.FC = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-[#2b1200] text-white text-center py-10">
			<p className="text-sm">Copyright © {year} Emmelie Johansson</p>
		</footer>
	);
};

export default Footer;
