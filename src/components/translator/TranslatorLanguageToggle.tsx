import React from "react";
import { ArrowLeftRight } from "lucide-react";
import SwedenFlag from "../../assets/img/sweden-flag.svg";
import PirateFlag from "../../assets/img/pirate-flag.svg";

interface LanguageToggleProps {
	onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ onToggle }) => (
	<button
		onClick={onToggle}
		className="flex items-center gap-4 mb-4 px-4 text-red-950 py-1 rounded shadow hover:shadow-md transition-shadow cursor-pointer text-nowrap">
		<img src={SwedenFlag} alt="Swedish flag" className="w-6 h-6" />
		<ArrowLeftRight className="w-6 h-6 text-amber-950" strokeWidth={1} />
		<img src={PirateFlag} alt="Pirate flag" className="w-10 h-10" />
	</button>
);

export default LanguageToggle;
