import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import World from './Pages/World';
import UsePfand from './Pages/UsePfand';
import Concept from './Pages/Concept';
import Survey from './Pages/Survey';
import History from './Pages/History';
import Footer from './Pages/Footer';
import Eyecatch from './Pages/Eyecatch';
import Interview from './Pages/Interview';
import Systems from './Pages/Systems';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Eyecatch/>
      <Concept/>
      <World />
      <Systems/>
      <History/>
      <Survey />
      <Interview/>
      <UsePfand/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
