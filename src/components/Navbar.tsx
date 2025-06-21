import { Menu } from "lucide-react";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 bg-white shadow-md">
			<nav className="max-w-8xl mx-auto px-2 lg:pl-8 lg:pr-12 flex items-center justify-between">
				<h1 className="text-amber-950 py-1">Rövarspråket</h1>

				{/* Desktop Links */}
				<ul className="hidden md:flex space-x-6 gap-8 text-gray-700 font-medium">
					<li>
						<a href="#home" className="hover:text-amber-950">
							Hem
						</a>
					</li>
					<li>
						<a href="#rules" className="hover:text-amber-950">
							Om
						</a>
					</li>
					<li>
						<a href="#translator" className="hover:text-amber-950">
							Översättare
						</a>
					</li>
					<li>
						<a href="#test" className="hover:text-amber-950">
							Språktest
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-amber-950">
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
}
