import React from "react";
const Rules: React.FC = () => (
	<section
		id="rules"
		className="flex flex-col items-center  lg:-mt-40 lg:h-[750px]
    mb-16
    ">
		<div
			className="text-center bg-[url('/paper-small.png')]
    lg:bg-[url('/paper.png')] bg-cover bg-center pt-10 px-2 h-[900px] -mt-50">
			<div className="lg:w-11/12 mx-auto mt-10 lg:mt-30">
				<h2 className="mb-3 text-shadow-sm ">
					Tala rövarspråket som en riktig sjörövare!
				</h2>
				<p className="mb-4">
					Rövarspråket är ett kul kodspråk som blev känt i Astrid
					Lindgrens böcker om Kalle Blomkvist. Reglerna är enkla:
				</p>
				<ul>
					<li>
						<strong>
							Efter varje konsonant lägger du till ett "o" och
							samma konsonant igen.
						</strong>
						<p className="mt-4">
							Exempel: rövarspråket → rorövovarorsospoproråkoketot
						</p>
					</li>
				</ul>
				<p className="font-semibold mt-8 mb-4">
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
						<strong>
							sje- och tje-ljud räknas som en konsonant
						</strong>{" "}
						<p>Exempel: choklad → chochakokloladod</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
);

export default Rules;
