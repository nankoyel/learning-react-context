import React from 'react';
import logo from './logo.svg';
import Header from './Header'
import './App.css';

export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' })

const App = () => (
  <ThemeContext.Provider value={{ primaryColor: 'coral' }}>
        <Header text="Hello World" />
        <ThemeContext.Provider value={{ primaryColor: 'deepskyblue' }}>
            <Header text="This is a test" />
        </ThemeContext.Provider>
  </ThemeContext.Provider>
)

export default App;
