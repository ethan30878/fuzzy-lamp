import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Card from './Card.js';
import Contact from './Contact.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar title="BlogApp"/>
        <Routes>
            <Route path="/" element={<Home header="CS230L"/>}></Route>
            <Route path="/card" element={<Card />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
