import SubmitButton from "./SubmitButton";

type Props = {
	question: string;
	questionNumber: number;
	answer: string;
	onAnswerChange: (value: string) => void;
	onSubmit: () => void;
};

export default function Question({
	question,
	questionNumber,
	answer,
	onAnswerChange,
	onSubmit,
}: Props) {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			onSubmit();
		}
	};

	return (
		<div className="flex flex-col items-center w-full max-w-md">
			<p className="pb-2">Kan du tyda texten nedan?</p>
			<p className="py-2 font-semibold">Fråga {questionNumber}</p>
			<p className="mb-2">{question}</p>
			<input
				type="text"
				value={answer}
				onChange={(e) => onAnswerChange(e.target.value)}
				onKeyDown={handleKeyDown}
				className="min-w-[20em] mb-6 mt-4 px-3 py-1 bg-[#FFF7E6] shadow-md shadow-gray-300 rounded focus:outline-none"
			/>
			<SubmitButton onSubmit={onSubmit} />
		</div>
	);
}
