import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Skill from './components/Skill';
import Project from './components/Project';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Skill/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
