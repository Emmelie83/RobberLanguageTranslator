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
			<Translator />
			<Test />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
