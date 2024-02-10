import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './pages/About';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';
import Main from './components/Main';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Menu />
      <Reviews />
      <About />
      <Footer />
    </>
  );
}

export default App;
