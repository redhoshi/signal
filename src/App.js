import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skiils';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
import Eyecatch from './Pages/Eyecatch';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Eyecatch/>
      <Home/>
      <About />
      <Projects/>
      <Skills />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
