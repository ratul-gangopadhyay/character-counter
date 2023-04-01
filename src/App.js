import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import { useDebounce } from './hooks/useDebounce';

const GlobalStyles = createGlobalStyle`

body {
  background-color: ${(props) =>
    props.theme.darkMode
      ? props.theme.dark.primary
      : props.theme.light.primary};
  color: ${(props) =>
    props.theme.darkMode ? props.theme.dark.text : props.theme.light.text}
};
table {
  border-collapse: separate;
  border-spacing: 0px;
  font-family: Segoe UI;
  width: 100%;
}

table td, table th {
  border: 1px solid white;
  background-color: ${(props) => (props.theme.darkMode ? '#000' : '#ddd')};
  padding: 8px;
  height: 40px;
  text-align: center;
}

table thead:first-child th:first-child {
  border-top-left-radius: 5px;
}

/* top-right border-radius */
table thead:first-child th:last-child {
  border-top-right-radius: 5px;
}

/* bottom-left border-radius */
table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}

/* bottom-right border-radius */
table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  height:10px;
  text-align: center;
  background-color: ${(props) =>
    props.theme.darkMode ? 'rgb(19 37 59 / 84%)' : 'rgb(11 62 123)'};
  color: white;
}

#app-logo {
  height: 40px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
}
`;

function App() {
  document.title = 'Character Counter';
  const INITIAL_THEME = {
    dark: {
      primary: '#000',
      text: '#fff',
    },
    light: {
      primary: '#fff',
      text: '#000',
    },
    fontFamily: 'Verdana',
    darkMode: false,
    darkModeIconStyle: { color: 'white', fontSize: 32 },
  };

  const [theme, setTheme] = useState(INITIAL_THEME);
  const [entry, setEntry] = useState('');
  const debouncedEntry = useDebounce(entry, 1100);
  const toggleDarkMode = () => {
    setTheme({
      ...theme,
      darkMode: !theme.darkMode,
    });
  };

  const handleChange = ({ target: { value } }) => {
    setEntry(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar toggleDarkMode={toggleDarkMode} theme={theme} />
      <Searchbar entry={entry} handleChange={handleChange} />
      <Dashboard entry={debouncedEntry} />
    </ThemeProvider>
  );
}

export default App;
