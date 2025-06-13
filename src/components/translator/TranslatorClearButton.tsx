import React from "react";

const ClearButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<button
		onClick={onClick}
		className="mb-6 px-4 py-1 text-amber-950 bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
		Rensa
	</button>
);

export default ClearButton;
