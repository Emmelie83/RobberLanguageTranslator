import React from "react";

type Props = {
	onSubmit: () => void;
};

const SubmitButton: React.FC<Props> = ({ onSubmit }) => (
<button
	onClick={onSubmit}
	className="px-4 py-1 text-amber-950 bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
	Svara
</button >
);

export default SubmitButton;
