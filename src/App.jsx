import { Navbar, Hero, Features, About, Contact, Problem, Footer } from './components';
import './App.css';
import Solution from './components/sections/Solution';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
