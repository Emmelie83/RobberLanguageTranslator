import React from "react";
import Coins from "../../assets/img/coins.svg";

type Props = {
	onStart: () => void;
};

const TestIntro: React.FC<Props> = ({ onStart }) => (
	<div className="flex flex-col items-center lg:w-1/2 max-w-[500px]">
		<p className="mb-6">
			Förstår du vad sjörövarna säger? Här får du sex fraser som du kan
			testa dig med. Svarar du rätt belönas du med guldmynt!
		</p>
		<img src={Coins} alt="Coins" className="h-40 w-auto mb-6" />
		<button
			className="mb-6 px-4 py-2 text-amber-950 border bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer"
			onClick={onStart}>
			Starta testet
		</button>
	</div>
);

export default TestIntro;
