import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Features from './Components/Features/Features';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Department from './Components/Department/Department';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div >
      <Header />
      <Navbar/>
      <Routes>
  
        <Route path="/" element={<Home />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/department" element={<Department/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>   
  );
}

export default App;
