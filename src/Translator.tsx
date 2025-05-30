import React, { useState, useRef } from "react";
import { translateRovarspraket } from "./utils/letterArrays";
import TranslatorInput from "./components/translator/TranslatorInput";
import TranslatorOutput from "./components/translator/TranslatorOutput";
import LanguageToggle from "./components/translator/LanguageToggle";
import ClearButton from "./components/translator/ClearButton";

const Translator: React.FC = () => {
	const [inputText, setInputText] = useState("");
	const [translatedText, setTranslatedText] = useState("");
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const handleTranslate = () => {
		const result = translateRovarspraket(inputText);
		setTranslatedText(result);
	};

	const handleClear = () => {
		setInputText("");
		setTranslatedText("");
		inputRef.current?.focus();
	};

	return (
		<section className="flex flex-col items-center justify-center px-4 py-8">
			<h2 className="mb-8">Översätt till rövarspråket</h2>

			<LanguageToggle />

			<div className="flex justify-center gap-8 flex-wrap">
				<TranslatorInput
					inputText={inputText}
					onChange={setInputText}
					onEnter={handleTranslate}
					inputRef={inputRef}
				/>
				<TranslatorOutput translatedText={translatedText} />
			</div>

			<ClearButton onClick={handleClear} />
		</section>
	);
};

export default Translator;
