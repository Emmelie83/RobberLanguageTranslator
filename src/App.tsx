import "./App.css";

import Test from "./components/language-test/LanguageTest";
import Rules from "./components/rules/Rules";
import Translator from "./components/translator/TranslatorSection";
import "./index.css";
import Footer from "./components/Footer";
import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/hero/HeroSection";

function App() {
	return (
		<>
			<HeroSection />
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
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
