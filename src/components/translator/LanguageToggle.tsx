import React from "react";
import { ArrowLeftRight } from "lucide-react";

const LanguageToggle: React.FC = () => (
	<button className="flex items-center gap-4 mb-4 px-6 text-red-950 py-3 rounded shadow hover:shadow-md transition-shadow cursor-pointer text-nowrap">
		<img src="/sweden.svg" alt="Swedish flag" className="w-6 h-6" />
		<ArrowLeftRight className="w-6 h-6 text-amber-950" strokeWidth={1} />
		<img src="/pirate-flag.svg" alt="Pirate flag" className="w-8 h-8" />
	</button>
);

export default LanguageToggle;
