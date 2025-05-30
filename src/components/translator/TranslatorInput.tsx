// TranslatorInput.tsx
import React from "react";

interface TranslatorInputProps {
	inputText: string;
	onChange: (text: string) => void;
	onEnter: () => void;
	inputRef: React.RefObject<HTMLTextAreaElement | null>;
}


const TranslatorInput: React.FC<TranslatorInputProps> = ({
	inputText,
	onChange,
	onEnter,
	inputRef,
}) => {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			onEnter();
		}
	};

	return (
		<textarea
			ref={inputRef}
			value={inputText}
			onChange={(e) => onChange(e.target.value)}
			onKeyDown={handleKeyDown}
			placeholder="Skriv text som du vill översätta och tryck enter"
			className="w-[600px] h-[400px] p-3 border-2 border-[#64635D] bg-amber-50 rounded mb-10 mt-8"
		/>
	);
};

export default TranslatorInput;
