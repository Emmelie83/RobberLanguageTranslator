import React from "react";
import Paper from "../assets/img/Paper.png";

const Rules: React.FC = () => (
	<section
		className="flex justify-center items-center bg-no-repeat bg-center -mt-46 h-[700px] mb-16"
		style={{ backgroundImage: `url(${Paper})` }}>
		<div className="text-center -mt-12 w-5/12">
			<h2 className="mb-3 text-shadow-sm">
				Tala rövarspråket som en äkta sjörövare!
			</h2>
			<p>
				Rövarspråket är ett enkelt kodspråk som blev populärt genom
				Astrid Lindgrens romaner om Kalle Blomkvist. Grundregeln är att
				man efter varje konsonant lägger till ett "o" och sedan samma
				konsonant igen:
			</p>
			<p className="my-4">
				<em>rövarspråket</em> →{" "}
				<strong>rorövovarorsospoproråkoketot</strong>
			</p>
			<p>
				Eftersom rövarspråket i huvudsak är en talspråksbaserad kod görs
				dock ofta vissa undantag från denna regel för att underlätta
				uttalet:
			</p>
			<h4 className="font-semibold my-3">Undantag</h4>
			<ul className="leading-relaxed">
				<li>
					”x” blir ”ks”: <em>kex</em> → <strong>kokekoksos</strong>
				</li>
				<li>
					”ck” blir ”kk”: <em>tack</em> → <strong>totakokkok</strong>
				</li>
				<li>
					sje- och tje-ljuden betraktas som en konsonant:{" "}
					<em>choklad</em> → <strong>chochakokloladod</strong>
				</li>
				<li>
					”ch” framför konsonant eller i slutet av ord blir till ”k”:{" "}
					<em>och</em> → <strong>okok</strong>
				</li>
			</ul>
		</div>
		<hr className="text-gray-50" />
	</section>
);

export default Rules;
