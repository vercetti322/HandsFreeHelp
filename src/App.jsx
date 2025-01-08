import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright/Copyright';
import Favicon from 'react-favicon';

function App() {
  return (
    <>
      <Favicon url="/favicon.ico?v=1" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Copyright />
    </>
  );
}

export default App;
