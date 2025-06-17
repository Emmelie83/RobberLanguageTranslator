import React from "react";

const Rules: React.FC = () => (
	<section
		id="rules"
		className="flex justify-center">
    <div className="rules-content flex flex-col justify-center lg:w-2/3 bg-no-repeat bg-center bg-contain h-[850px] -mt-34 lg:-mt-70 text-center px-3">
      <div className="mx-auto max-w-[700px] px-3">
			<h2 className="mb-3 text-shadow-sm">
				Tala rövarspråket som en riktig sjörövare!
			</h2>
			<p>
				Rövarspråket är ett lekfullt kodspråk
				som blev känt genom Astrid Lindgrens böcker om mästerdetektiven
				Kalle Blomkvist. Det bygger på en enkel regel:{" "}
				<strong>
					Efter varje konsonant lägger man till ett "o" och sedan
					samma konsonant igen:
				</strong>
			</p>
			<p className="my-4">rövarspråket → rorövovarorsospoproråkoketot</p>
			<h4 className="font-semibold my-3">Men det finns undantag!</h4>
			<p className="mb-3">
				Eftersom rövarspråket i grunden är tänkt att talas högt, gör
				man ibland avsteg från huvudregeln för att underlätta uttalet:
			</p>
			<ul>
				<li>
					<strong>”x” uttalas som ”ks”</strong>
					<p>kex → kokekoksos</p>
				</li>
				<li>
					<strong>”ck” uttalas som ”kk”</strong>
					<p>tack → totakokkok</p>
				</li>
				<li>
					<strong>sje- och tje-ljud räknas som en konsonant</strong>
					<p>choklad → chochokokloladod</p>
				</li>
        </ul>
        </div>
		</div>
	</section>
);

export default Rules;
