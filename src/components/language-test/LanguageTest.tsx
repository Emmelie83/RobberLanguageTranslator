import React, { useState } from "react";
import TestIntro from "./LanguageTestIntro";
import Question from "./LanguageTestQuestion";
import TestResult from "./LanguageTestResult";
import {robberLanguagePhrases, swedishPhrases} from "../../utils/phrases"



const getRandomIndexes = (max: number, count: number) => {
	const result = new Set<number>();
	while (result.size < count) {
		result.add(Math.floor(Math.random() * max));
	}
	return Array.from(result);
};

export default function Test() {
	const [isStarted, setIsStarted] = useState(false);
	const [questionIndexes, setQuestionIndexes] = useState<number[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [answer, setAnswer] = useState("");
	const [correctCount, setCorrectCount] = useState(0);
	const [showResult, setShowResult] = useState(false);

	const startTest = () => {
		const indexes = getRandomIndexes(robberLanguagePhrases.length, 6);
		setQuestionIndexes(indexes);
		setCurrentIndex(0);
		setCorrectCount(0);
		setAnswer("");
		setIsStarted(true);
		setShowResult(false);
	};

	const handleAnswer = () => {
		const correct =
			swedishPhrases[questionIndexes[currentIndex]].toLowerCase();
		if (answer.trim().toLowerCase() === correct) {
			setCorrectCount((prev) => prev + 1);
		}

		if (currentIndex < 5) {
			setCurrentIndex((prev) => prev + 1);
			setAnswer("");
		} else {
			setShowResult(true);
		}
	};

	return (
		<section id="test" className="flex flex-col items-center text-center px-4">
			<h2 className="text-2xl font-semibold mb-4">
				Testa din språkförståelse
			</h2>

			{!isStarted && !showResult && <TestIntro onStart={startTest} />}

			{isStarted && !showResult && (
				<Question
					question={robberLanguagePhrases[questionIndexes[currentIndex]]}
					questionNumber={currentIndex + 1}
					answer={answer}
					onAnswerChange={setAnswer}
					onSubmit={handleAnswer}
				/>
			)}

			{showResult && (
				<TestResult correctCount={correctCount} onRestart={startTest} />
			)}
		</section>
	);
}
