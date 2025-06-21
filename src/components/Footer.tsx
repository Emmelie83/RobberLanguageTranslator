export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-[#2b1200] text-white text-center py-10">
			<p className="text-sm">Copyright © {year} Emmelie Johansson</p>
		</footer>
	);
}
