import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  function handleTheme() {
    setDark(!dark);
  }

  return (
    <div
      className={`mx-auto max-w-[800px] items-center justify-center gap-3 px-4 md:px-6 md:pb-10
       
    `}
    >
      <Header dark={dark} setDark={setDark} handleTheme={handleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
