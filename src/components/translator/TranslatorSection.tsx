import React, { useState, useRef } from "react";
import { translateRovarspraket } from "../../utils/letterArrays";
import TranslatorInput from "./TranslatorInput";
import TranslatorOutput from "./TranslatorOutput";
import LanguageToggle from "./TranslatorLanguageToggle";
import ClearButton from "./TranslatorClearButton";
import TranslateButton from "./TranslateButton";

export interface TranslatorInputProps {
	inputText: string;
	onChange: (text: string) => void;
	onEnter: () => void;
	inputRef: React.RefObject<HTMLTextAreaElement | null>;
	resetPlaceholderTrigger?: number;
}

export default function Translator() {
	const [inputText, setInputText] = useState("");
	const [placeholderResetKey, setPlaceholderResetKey] = useState(0);
	const [translatedText, setTranslatedText] = useState("");
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [isToRovarspraket, setIsToRovarspraket] = useState(true);

	const handleTranslate = () => {
		const result = translateRovarspraket(inputText);
		setTranslatedText(result);
	};

	const handleClear = () => {
		setInputText("");
		setTranslatedText("");
		setPlaceholderResetKey((prev) => prev + 1);
	};

	return (
		<section
			id="translator"
			className="flex flex-col items-center justify-center py-8">
			<h2 className="mb-8">
				{isToRovarspraket
					? "Översätt till rövarspråket"
					: "Översätt från rövarspråket"}
			</h2>

			<LanguageToggle
				onToggle={() => setIsToRovarspraket((prev) => !prev)}
			/>

			<div className="flex flex-col w-full lg:flex-row justify-center lg:gap-8">
				<TranslatorInput
					inputText={inputText}
					onChange={setInputText}
					onEnter={handleTranslate}
					inputRef={inputRef}
					resetPlaceholderTrigger={placeholderResetKey}
				/>
				<TranslatorOutput translatedText={translatedText} />
			</div>
			{translatedText === "" ? (
				<TranslateButton onClick={handleTranslate} />
			) : (
				<ClearButton onClick={handleClear} />
			)}
		</section>
	);
}
