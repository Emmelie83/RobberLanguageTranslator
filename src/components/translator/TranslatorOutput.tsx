import React from "react";

const TranslatorOutput: React.FC<{ translatedText: string }> = ({
	translatedText,
}) => (
	<textarea
		readOnly
		className="h-[300px] lg:w-[600px] lg:h-[400px] p-3 bg-[#FFF7E6] shadow-md shadow-gray-300 rounded mb-10 mt-8 focus:outline-none"
		value={translatedText}
	/>
);

export default TranslatorOutput;
