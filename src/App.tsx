import { Contact } from "lucide-react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/hero/HeroSection";
import Test from "./components/language-test/LanguageTest";
import Rules from "./components/rules/Rules";
import Translator from "./components/translator/TranslatorSection";

import "./index.css";


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
