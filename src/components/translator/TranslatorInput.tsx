import { useState, useEffect } from "react";
import type { TranslatorInputProps } from "./TranslatorSection";

export default function TranslatorInput({
	inputText,
	onChange,
	onEnter,
	inputRef,
	resetPlaceholderTrigger,
}: TranslatorInputProps) {
	const [showPlaceholder, setShowPlaceholder] = useState(true);

	useEffect(() => {
		setShowPlaceholder(true);
	}, [resetPlaceholderTrigger]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			onEnter();
		}
	}

	return (
		<textarea
			ref={inputRef}
			value={inputText}
			onChange={(e) => onChange(e.target.value)}
			onKeyDown={handleKeyDown}
			onFocus={() => setShowPlaceholder(false)}
			onBlur={() => {
				if (inputText === "") setShowPlaceholder(true);
			}}
			placeholder={
				showPlaceholder && inputText === ""
					? "Skriv text som du vill översätta och tryck enter"
					: ""
			}
			className="w-full min-h-50 lg:w-[600px] lg:h-[400px] p-3 bg-[#FFF7E6] shadow-md shadow-gray-300 rounded mb-1 lg:mb-10 mt-8 focus:outline-none"
		/>
	);
}
