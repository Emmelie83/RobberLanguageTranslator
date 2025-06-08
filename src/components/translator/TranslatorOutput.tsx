import React from "react";

const TranslatorOutput: React.FC<{ translatedText: string }> = ({
	translatedText,
}) => (
	<textarea
		readOnly
		className="h-[300px] lg:w-[600px] lg:h-[400px] p-3 bg-[#FFF7E6] border shadow-gray-300 shadow-md rounded mb-10 mt-8"
		value={translatedText}
	/>
);

export default TranslatorOutput;
