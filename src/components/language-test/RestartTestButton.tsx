import React from "react";

type Props = {
	onRestart: () => void;
};

const RestartTestButton: React.FC<Props> = ({ onRestart }) => (
  <button
    onClick={onRestart}
    className="px-4 py-1 text-amber-950 bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
    Börja om
  </button>
);

export default RestartTestButton;
