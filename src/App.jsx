import React, { useState,useEffect } from "react";
import { GlobalStyle } from "./GlobasStyle";
import OnBoarding from "./components/OnBoarding";
function App() {

  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // event listener to capture the device mode change
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return (
    <>
    <GlobalStyle darkmode={isDarkMode}/>
    <OnBoarding darkmode={isDarkMode}/>
    </>
  )
}

export default App
