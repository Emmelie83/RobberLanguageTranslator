import React from "react";

const TranslatorOutput: React.FC<{ translatedText: string }> = ({
	translatedText,
}) => (
	<textarea
		readOnly
		className="w-[600px] h-[400px] p-3 border-2 border-[#64635D] bg-amber-50 rounded mb-10 mt-8"
		value={translatedText}
	/>
);

export default TranslatorOutput;
