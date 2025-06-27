import { testIntroText } from "../../utils/text";
import Coins from "../../assets/img/coins.svg";
import StartTestButton from "./StartTestButton";

interface Props {
	onStart: () => void;
}

export default function TestIntro({ onStart }: Props) {
	return (
		<div className="flex flex-col items-center lg:w-1/2 max-w-[500px] px-3">
			<p className="mb-6">{testIntroText.intro}</p>
			<img src={Coins} alt="Coins" className="h-40 w-auto my-6" />
			<StartTestButton onStart={onStart} />
		</div>
	);
}
