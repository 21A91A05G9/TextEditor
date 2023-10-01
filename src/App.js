
import About from './About';
import Navbar from './Navbar'
import Contact from './Contact';
import Text from './Text'
import Logo from  './Logo'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [color,setColor] = useState('white')
  const toggleMode = () => {
      if(mode==='dark') {
        setMode('light')
        setColor('white')
      }
      else {
        setMode('dark')
        setColor('black')
      }
  }
  return (
    <div className="App" style={{ backgroundColor:color==='white'?'black':'white', color:color}}>
      <BrowserRouter>
      <Navbar heading="textEditors" mode={mode} toggleMode={toggleMode}/>
        
        <Routes>
          <Route path="/About" element={<About color={color}/> }/>
          <Route path="/"  element={<Logo color={color}/>}/>
          <Route path="/Contact"  element={<Contact color={color}/>}/>
          <Route path="/Text" element={<Text color={color}/> }/>
        </Routes>
      </BrowserRouter>
     
      {/* <Alert alert={alert}/> */}
      
      

    </div>
  );
}

export default App;
