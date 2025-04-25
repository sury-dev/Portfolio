import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import HomePage from './components/Home/HomePage';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';

function App() {

  const [loading, setLoading] = useState(true);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 2000);

    const savedTheme = localStorage.getItem('theme') === 'light';
    if (savedTheme) {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
    else{
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return loading ? (
    <div className="bg-white dark:bg-black text-black dark:text-white h-screen w-screen min-h-min min-w-min overflow-hidden">
      <div id="preloader" className={`bg-white dark:bg-black ${slideOut ? 'slide-out' : ''}`}>
        <h1>SURYANSH&nbsp;PANDEY</h1>
        <div className="overlay bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40">
          <div className="loader-box bg-white border-2 border-gray-600 dark:bg-black dark:border-white">
            <p className='text-black dark:text-white'>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
      <div className=" bg-white dark:bg-black text-black dark:text-white h-screen w-screen min-h-min min-w-min overflow-hidden gap-6 flex flex-col">
        <Header />
        <SideBar />
        <HomePage />
        <Projects />
        <Certifications />
        < Footer />
      </div>
  )
}

export default App
