import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useEffect, useState } from 'react';
import Error404 from './pages/Error404';

function App() {
  const [theme, setTheme] = useState('light');

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    // Check system preference for dark mode
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    // Load theme from localStorage if available, else use system preference
    const savedTheme =
      localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main className={`dark:bg-[#111111]`}>
      <div
        className={`mx-auto max-w-[800px]  items-center justify-center gap-3 px-4 md:px-6 md:pb-10
       
    `}
      >
        <Header theme={theme} setTheme={setTheme} handleTheme={handleTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
