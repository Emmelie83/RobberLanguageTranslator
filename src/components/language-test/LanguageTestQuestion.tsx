import React from "react";
import SubmitButton from "./SubmitButton";

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
		<p className="py-2 font-semibold">Fråga {questionNumber}</p>
		<p className="mb-2">{question}</p>
		<input
			type="text"
			value={answer}
			onChange={(e) => onAnswerChange(e.target.value)}
			className="min-w-[20em] mb-6 mt-4 px-3 py-1 bg-[#FFF7E6] shadow-md shadow-gray-300 rounded focus:outline-none"
		/>
		<SubmitButton onSubmit={onSubmit} />
	</div>
);

export default Question;
