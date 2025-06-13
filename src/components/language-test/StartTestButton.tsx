import React from "react";

type Props = {
	onStart: () => void;
};

const StartTestButton: React.FC<Props> = ({ onStart }) => (
	<button
		className="mb-6 px-4 py-1 text-amber-950 bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer"
		onClick={onStart}>
		Starta testet
	</button>
);

export default StartTestButton;
