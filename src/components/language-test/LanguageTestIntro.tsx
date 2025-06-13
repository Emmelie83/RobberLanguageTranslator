import React from "react";
import Coins from "../../assets/img/coins.svg";
import StartTestButton from "./StartTestButton";

type Props = {
	onStart: () => void;
};

const TestIntro: React.FC<Props> = ({ onStart }) => (
	<div className="flex flex-col items-center lg:w-1/2 max-w-[500px]">
		<p className="mb-6">
			Förstår du vad sjörövarna säger? Här får du sex fraser som du kan
			testa dig med. Svarar du rätt belönas du med guldmynt!
		</p>
		<img src={Coins} alt="Coins" className="h-40 w-auto my-6" />
		{/* Pass the onStart prop here: */}
		<StartTestButton onStart={onStart} />
	</div>
);

export default TestIntro;
