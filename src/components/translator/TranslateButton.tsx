type Props = {
	onClick: () => void;
};

export default function TranslateButton({ onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className="mb-6 px-4 py-1 text-amber-950 bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
			Översätt
		</button>
	);
}