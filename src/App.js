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
import Interview from './Pages/Interview';
import Systems from './Pages/Systems';
import Timeline from './Pages/Timeline';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Eyecatch/>
      <Home/>
      <About />
      <Systems/>
      <Projects/>
      <Skills />
      <Interview/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
