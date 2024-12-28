import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Home'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import AboutContent from './Components/AboutContent'
import { Scroll } from './Components/Scroll'
import { Nav } from './Components/Nav'


function App() {

  return (
    <>
     <div className="main-div">
        <div className="second-div">
        <Nav/>
        </div>
        About
        skills
        <div className="third-div">
          contact
          canvas
        </div>
      </div>
    </>
  )
}

export default App
