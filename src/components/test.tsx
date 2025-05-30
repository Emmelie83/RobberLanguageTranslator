import React from "react";

const Test: React.FC = () => (
	<section className="flex flex-col items-center text-center px-4">
		<h2 className="text-2xl font-semibold mb-4">
			Testa din språkförståelse
		</h2>

		<div className="w-1/2 max-w-[500px]">
			<p className="mb-4">
				Förstår du vad sjörövarna säger? Här får du sex fraser som du
				kan testa dig med. Svarar du rätt belönas du med guldmynt!
			</p>

			<div className="mb-8">
				<p className="mb-8 text-lg leading-[1.5em]"></p>
				<div className="mb-8 text-lg leading-[1.5em]"></div>
			</div>

			<button className="mb-6 px-4 py-2 bg-amber-300 border rounded shadow hover:shadow-md transition-shadow">
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
