
import './App.css'
import './index.css'
import Hero from './components/hero.tsx'
import Rules from './components/rules.tsx'
import Translator from './components/translator.tsx'
import Test from './components/test.tsx'
import Contact from './components/contact.tsx'
import Footer from './components/footer.tsx'

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

export default App
