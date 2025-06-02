import React from "react";
import classNames from "classnames";

type ButtonProps = {
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	className = "",
	type = "button",
	disabled = false,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={classNames(
				"px-4 py-2 rounded shadow hover:shadow-md transition-shadow cursor-pointer",
				"text-amber-950 border bg-[#f3c569]",
				disabled && "opacity-50 cursor-not-allowed",
				className
			)}>
			{children}
		</button>
	);
};

export default Button;
