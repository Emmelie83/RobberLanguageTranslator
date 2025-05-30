import React from "react";
import { ArrowLeftRight } from "lucide-react";

const Translator: React.FC = () => (
	<section className="flex flex-col items-center justify-center px-4 py-8">
		<h2 className="mb-8">Översätt till rövarspråket</h2>

		<button className="flex items-center gap-4 mb-4 px-6 border hover:bg-[#E6E2D2] py-3 rounded transition text-nowrap cursor-pointer shadow-md">
			<img
				src="/sweden.svg"
				alt="Swedish flag"
				className="w-6 h-6"
				aria-label="Swedish flag"
			/>

			<ArrowLeftRight className="w-6 h-6 text-gray-600" />

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
				className="w-[500px] h-[300px] p-3 border-2 border-[#64635D] rounded bg-[#E6E2D2] mb-10 mt-8"></textarea>

			<textarea
				readOnly
				className="w-[500px] h-[300px] p-3 border-2 border-[#64635D] rounded bg-[#E6E2D2] mb-10 mt-8"></textarea>
		</div>
	</section>
);

export default Translator;
