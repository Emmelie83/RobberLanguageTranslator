import React from "react";
import Paper from "../../assets/img/Paper.png";

const Rules: React.FC = () => (
	<section id="rules"
		className="flex justify-center items-center bg-no-repeat bg-center -mt-60 bg-contain h-[750px] mb-16"
		style={{ backgroundImage: `url(${Paper})` }}>
		<div className="text-center w-full max-w-2xl px-6 -mt-6">
			<h2 className="mb-3 text-shadow-sm">
				Tala rövarspråket som en äkta sjörövare!
			</h2>
			<p>
				Rövarspråket är ett lekfullt kodspråk som blev känt genom Astrid
				Lindgrens böcker om mästerdetektiven Kalle Blomkvist. Det bygger
				på en enkel regel:{" "}
				<strong>
					Efter varje konsonant lägger man till ett "o" och sedan
					samma konsonant igen:
				</strong>
			</p>
			<p className="my-4">rövarspråket → rorövovarorsospoproråkoketot</p>
			<h4 className="font-semibold my-3">Men det finns undantag!</h4>
			<p className="mb-3">
				Eftersom rövarspråket i grunden är tänkt att talas högt, gör man
				ibland avsteg från huvudregeln för att underlätta uttalet:
			</p>

			<ul className="leading-8">
				<li>”x” blir till ”ks”: kex → kokekoksos</li>
				<li>”ck” blir till ”kk”: tack → totakokkok</li>
				<li>
					sje- och tje-ljud betraktas som en enda konsonant: choklad →
					chochakokloladod
				</li>
			</ul>
		</div>
		<hr className="text-gray-50" />
	</section>
);

export default Rules;
