import React from "react";
import Crab from "../../assets/img/crab.png";
import Coin from "../../assets/img/coin.png";
import RestartTestButton from "./RestartTestButton";

type Props = {
	correctCount: number;
	onRestart: () => void;
};

const TestResult: React.FC<Props> = ({ correctCount, onRestart }) => {
	const getFeedbackText = () => {
		if (correctCount === 0) return "Arrrrg. Dig borde man nästan kölhala!";
		if (correctCount === 1) return "Ojdå, du får nog öva lite!";
		if (correctCount <= 3) return "Helt ok.";
		if (correctCount <= 5) return "Bra jobbat!";
		return "Alldeles utmärkt!";
	};

	return (
		<div className="text-center mt-6">
			<p className="mb-4 text-lg">
				{getFeedbackText()} <br />
				Du fick {correctCount} rätt av 6{" "}
				{correctCount === 0 && <span>din landkrabba.</span>}
			</p>

			<div className="flex justify-center gap-2 flex-wrap mb-4">
				{correctCount === 0 ? (
					<img src={Crab} alt="En krabba" className="h-30 my-10" />
				) : (
					Array.from({ length: correctCount }).map((_, i) => (
						<img
							key={i}
							src={Coin}
							alt="Ett guldmynt"
							className="h-15 my-10"
						/>
					))
				)}
			</div>
        <RestartTestButton onRestart={onRestart} />
		</div>
	);
};

export default TestResult;
