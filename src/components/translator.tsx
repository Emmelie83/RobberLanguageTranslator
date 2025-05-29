import React from "react";

const Translator: React.FC = () => (
	<section className="flex flex-col items-center justify-center px-4 py-8">
		<h2 className="text-4xl mb-6">Översätt till rövarspråket</h2>

		<div className="flex justify-center gap-8 flex-wrap">
			<textarea
				placeholder="Skriv text som du vill översätta"
				className="w-[40%] max-w-[500px] h-[300px] p-3 border-2 border-[#64635D] rounded bg-[#E6E2D2] mb-10 mt-8"></textarea>

			<textarea
				readOnly
				className="w-[40%] max-w-[500px] h-[300px] p-3 border-2 border-[#64635D] rounded bg-[#E6E2D2] mb-10 mt-8"></textarea>
		</div>

		{/* Hidden button */}
		<button className="hidden">Översätt</button>

		{/* Visible button */}
		<button className="mt-4 px-6 py-2 border border-gray-600 rounded hover:bg-gray-500 hover:text-white transition">
			Översätt
		</button>
	</section>
);

export default Translator;
