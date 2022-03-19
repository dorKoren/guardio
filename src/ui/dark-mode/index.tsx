import { useState, useEffect } from 'react';
import classes from './style.module.css';

const body = document.querySelector('body');

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );

  useEffect(() => {
    localStorage.getItem('dark-mode') === 'true' &&
      body!.classList.add('dark-mode');
  }, []);

  useEffect(() => {
    isDarkMode
      ? body!.classList.add('dark-mode')
      : body!.classList.remove('dark-mode');

    localStorage.setItem('dark-mode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <input
      className={classes.darkMode}
      type="checkbox"
      checked={isDarkMode}
      onChange={() => setIsDarkMode(!isDarkMode)}
    />
  );
};

export default DarkMode;
