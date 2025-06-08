import "./App.css";
import "./index.css";
import Hero from "./components/hero/HeroSection.tsx";
import Rules from "./components/rules/Rules.tsx";
import Translator from "./components/translator/TranslatorSection.tsx";
import Contact from "./components/contact/ContactSection.tsx";
import Test from "./components/language-test/LanguageTest.tsx";
import Footer from "./components/Footer.tsx";

function App() {
	return (
		<>
			<Hero />
			<Rules />
			<hr
				className="h-0.5 shadow-gray-300 shadow-md"
				style={{ borderStyle: "inset" }}
			/>
			<Translator />
			<hr
				className="h-0.5 shadow-gray-300 shadow-md"
				style={{ borderStyle: "inset" }}
			/>
			<Test />
			<hr
				className="h-0.5 shadow-gray-300 shadow-md"
				style={{ borderStyle: "inset" }}
			/>
			<Contact />
			<Footer />
		</>
	);
}

export default App;
