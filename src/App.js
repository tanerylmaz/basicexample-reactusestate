import { useState } from 'react';
import './App.css';
import Example from './components/Example';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className= {theme}>
      <button type='button' onClick={
        ()=>{setTheme(theme=="dark"?"light" : "dark")}
      }>TEMA DEĞİŞTİR</button>
   <Example/>
   <Example2/>
   <Example3/>
    </div>
  );
}

export default App;
