import React from "react";
import Coins from "../assets/img/coins.svg"

const Test: React.FC = () => (
	<section className="flex flex-col items-center text-center px-4">
		<h2 className="text-2xl font-semibold mb-4">
			Testa din språkförståelse
		</h2>

		<div className="flex flex-col items-center w-1/2 max-w-[500px]">
			<p className="mb-6">
				Förstår du vad sjörövarna säger? Här får du sex fraser som du
				kan testa dig med. Svarar du rätt belönas du med guldmynt!
			</p>

			<img src={Coins} alt="Coins" className="h-40 w-auto mb-6" />
			<button className="mb-6 px-4 py-2 text-amber-950 border bg-[#f0c87a] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
				Starta testet
			</button>

			{/* This block was hidden in original CSS */}
			<div className="hidden">
				<p className="pb-2">
					Kan du tyda texten nedan? Skriv din översättning i rutan och
					tryck på knappen.
				</p>
				<p className="pb-2 text-lg"> {/* question_number */} </p>
				<p>{/* question */}</p>
				<input
					type="text"
					className="min-w-[20em] mb-6 px-3 py-1 border border-gray-400 rounded"
				/>

				<button className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:shadow-md transition-shadow">
					Svara
				</button>
			</div>
		</div>
	</section>
);

export default Test;
