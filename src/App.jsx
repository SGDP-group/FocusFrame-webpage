import { Navbar, Hero, Features, About, Contact } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
