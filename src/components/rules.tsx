import React from "react";
import Paper from "../assets/img/paper.svg";

const Rules: React.FC = () => (
	<div
		className="flex justify-center items-center bg-no-repeat bg-center -mt-12 min-h-[530px] mb-16"
		style={{ backgroundImage: `url(${Paper})` }}>
		<div className="text-center w-2/5">
			<h2 className="text-3xl mb-3">
				Tala rövarspråket som en äkta sjörövare!
			</h2>
			<h3 className="text-lg font-semibold mb-1">Grundregel</h3>
			<ul>
				<li className="mb-4">
					Efter varje konsonant lägger du till ett ”o” och sedan samma
					konsonant igen, t.ex.
					<em>rövarspråket – rorövovarorsospoproråkoketot</em>
				</li>
			</ul>
			<h3 className="text-lg font-semibold mb-1">Undantag</h3>
			<ul>
				<li>
					”x” blir till ”ks”: <em>kex – kokekoksos</em>
				</li>
				<li>
					”ck” blir till ”kk”: <em>tack – totakokkok</em>
				</li>
				<li>
					sje- och tje-ljuden (sj, tj, stj, sk, skj, ssj, sh, sch, ch)
					betraktas som en konsonant: <em>choklad – chochakokloladod</em>
				</li>
				<li>
					”ch” i "och" blir till ”k”: <em>och – okok</em>
				</li>
			</ul>
		</div>
	</div>
);

export default Rules;
