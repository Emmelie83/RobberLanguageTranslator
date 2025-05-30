import React from "react";
import { Menu } from "lucide-react";
import Flag from "../assets/img/logo.svg"

const Navbar: React.FC = () => {
	return (
		<header className="sticky top-0 z-50 bg-white shadow-md">
			<nav className="max-w-8xl mx-auto pl-4 pr-12 flex items-center justify-between">
				<img src={Flag} alt="Flag" className="h-14 w-auto my-0.5" />

				{/* Desktop Links */}
				<ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
					<li>
						<a href="#home" className="hover:text-red-900">
							Hem
						</a>
					</li>
					<li>
						<a href="#rules" className="hover:text-red-900">
							Om
						</a>
					</li>
					<li>
						<a href="#translator" className="hover:text-red-900">
							Översättare
						</a>
					</li>
					<li>
						<a href="#test" className="hover:text-red-900">
							Språktest
						</a>
					</li>
					<li>
						<a href="#about" className="hover:text-red-900">
							Kontakt
						</a>
					</li>
				</ul>

				{/* Mobile Menu Icon (optional toggle functionality) */}
				<button className="md:hidden">
					<Menu className="w-6 h-6 text-gray-700" />
				</button>
			</nav>
		</header>
	);
};

export default Navbar;
