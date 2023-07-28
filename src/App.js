import './App.css';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import MainArea from './components/MainArea';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  const [theme, setTheme] = useState(`dark`);
  const [alerts, setAlerts] = useState({
    type: null,
    message: null
  });
  function toggleTheme() {
    if (theme === `dark`) {
      setTheme(`light`);
      document.body.style.background = `linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)`
      document.body.style.color = `black`

      setAlerts({
        type: `success`,
        message: `Light Mode Enabled Successfully`
      })
      setTimeout(() => {
        setAlerts({
          type: null,
          message: null
        })
      }, 2000);
    }
    else {
      setTheme(`dark`);
      document.body.style.background = `linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)`
      document.body.style.color = `white`
      setAlerts({
        type: `success`,
        message: `Dark Mode Enabled Successfully`
      })
      setTimeout(() => {
        setAlerts({
          type: null,
          message: null
        })
      }, 2000);
    }
  }
  return (
    <>
     <BrowserRouter>
        <Navbar mode={theme} toggleTheme={toggleTheme} themeBtnText="Enable Light Mode" />
        <Alerts alertType={alerts.type} alertText={alerts.message} />
        <Routes>
        <Route exact path='/' element={<MainArea title="Playground:" setAlerts={setAlerts} />}/>
        <Route path='/about' exact element={<About/>}/>
        </Routes>
        <Footer mode={theme} />
    </BrowserRouter>
    </>
  );
}

export default App;
