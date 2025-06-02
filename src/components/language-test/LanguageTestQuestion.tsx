import React from "react";

type Props = {
	question: string;
	questionNumber: number;
	answer: string;
	onAnswerChange: (value: string) => void;
	onSubmit: () => void;
};

const Question: React.FC<Props> = ({
	question,
	questionNumber,
	answer,
	onAnswerChange,
	onSubmit,
}) => (
	<div className="flex flex-col items-center w-full max-w-md">
		<p className="pb-2">Kan du tyda texten nedan?</p>
		<p className="pb-2 text-lg">Fråga {questionNumber}</p>
		<p className="font-semibold mb-2">{question}</p>
		<input
			type="text"
			value={answer}
			onChange={(e) => onAnswerChange(e.target.value)}
			className="min-w-[20em] mb-4 px-3 py-1 border border-gray-400 rounded"
		/>
		<button
			onClick={onSubmit}
			className="px-4 py-2 text-amber-950 border bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
			Svara
		</button>
	</div>
);

export default Question;
