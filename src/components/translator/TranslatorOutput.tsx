type Props = {
  translatedText: string;
}

export default function TranslatorOutput({
  translatedText }: Props) {
return (
	<textarea
		readOnly
		className="min-h-50 lg:w-[600px] lg:h-[400px] p-3 bg-[#FFF7E6] shadow-md shadow-gray-300 rounded mb-10 mt-2 lg:mt-8 focus:outline-none"
		value={translatedText}
	/>
);
}
