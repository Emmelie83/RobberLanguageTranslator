import React from "react";
const Rules: React.FC = () => (
	<section
		id="rules"
		className="bg-cover bg-center -mt-30 lg:-mt-60 lg:h-[750px] mb-16 bg-[url('../../public/paper-small.png')]">
		<div className="text-center w-full max-w-2xl px-6 -mt-6">
			<h2 className="mb-3 text-shadow-sm">
				Tala rövarspråket som en riktig sjörövare!
			</h2>
			<p>
				Rövarspråket är ett kul kodspråk som blev känt i Astrid
				Lindgrens böcker om Kalle Blomkvist. Reglerna är enkla:
			</p>
			<ul>
				<li className="mt-4">
					<strong>
						Efter varje konsonant lägger du till ett "o" och samma
						konsonant igen.
					</strong>
					<p>Exempel: rövarspråket → rorövovarorsospoproråkoketot</p>
				</li>
			</ul>
			<p className="font-semibold my-3">
				Men för att göra språket lättare att säga högt finns vissa
				undantag:
			</p>
			<ul>
				<li>
					<strong>”x” uttalas som ”ks”</strong>{" "}
					<p>Exempel: kex → kokekoksos</p>
				</li>
				<li>
					<strong>”ck” uttalas som ”kk”</strong>{" "}
					<p>Exempel: tack → totakokkok</p>
				</li>
				<li>
					<strong>sje- och tje-ljud räknas som en konsonant</strong>{" "}
					<p>Exempel: choklad → chochakokloladod</p>
				</li>
			</ul>
		</div>
		<hr className="text-gray-50" />
	</section>
);

export default Rules;
