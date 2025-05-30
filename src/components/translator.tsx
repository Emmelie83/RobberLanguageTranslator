import React from "react";
import { ArrowLeftRight } from "lucide-react";

const Translator: React.FC = () => (
	<section className="flex flex-col items-center justify-center px-4 py-8">
		<h2 className="mb-8">Översätt till rövarspråket</h2>

		<button className="flex items-center gap-4 mb-4 px-6 text-red-950 py-3 border rounded shadow hover:shadow-md transition-shadow cursor-pointer text-nowrap">
			<img
				src="/sweden.svg"
				alt="Swedish flag"
				className="w-6 h-6"
				aria-label="Swedish flag"
			/>

			<ArrowLeftRight className="w-6 h-6 text-amber-950" strokeWidth={1} />

			<img
				src="/pirate-flag.svg"
				alt="Pirate flag"
				className="w-8 h-8"
				aria-label="Pirate flag"
			/>
		</button>

		<div className="flex justify-center gap-8 flex-wrap">
			<textarea
				placeholder="Skriv text som du vill översätta och tryck enter"
				className="w-[600px] h-[400px] p-3 border-2 border-[#64635D]  bg-amber-50 rounded mb-10 mt-8"></textarea>

			<textarea
				readOnly
				className="w-[600px] h-[400px] p-3 border-2 border-[#64635D] rounded  bg-amber-50 mb-10 mt-8"></textarea>
		</div>
	</section>
);

export default Translator;
