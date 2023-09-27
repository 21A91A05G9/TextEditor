import logo from './logo.svg';
import About from './About';
import Navbar from './Navbar'
import Contact from './Contact';
import Text from './Text'
import Alert from './Alert';
import Logo from  './Logo'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [color,setColor] = useState('white')
  const [alert,setAAlert] = useState(null)
  const toggleMode = () => {
      setAAlert('alert msg')
      if(mode==='dark') {
        setMode('light')
        setColor('white')
      }
      else {
        setMode('dark')
        setColor('black')
      }
  }
  const changeColor = (e) =>{
    setColor(e.target.value)
  }
  return (
    <div className="App" style={{height:'100vh', backgroundColor:color==='white'?'black':'white', color:color}}>
      <BrowserRouter>
      <Navbar heading="textEditors" mode={mode} toggleMode={toggleMode}/>
        
        <Routes>
          <Route path="/About" element={<About color={color}/> }/>
          <Route path="/"  element={<Logo color={color}/>}/>
          <Route path="/Contact"  element={<Contact/>}/>
          <Route path="/Text" element={<Text color={color}/> }/>
        </Routes>
      </BrowserRouter>
     
      {/* <Alert alert={alert}/> */}
      
      

    </div>
  );
}

export default App;
