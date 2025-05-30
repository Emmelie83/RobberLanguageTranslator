import React from "react";

const ClearButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<button
		onClick={onClick}
		className="mb-6 px-4 py-2 text-amber-950 border bg-[#f0c87a] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
		Rensa
	</button>
);

export default ClearButton;
