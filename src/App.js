
import { useState } from 'react';
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForms';
import Alert from './components/Alert'

function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState('null');
//Before this below function alert was NULL but now its an object due to setAlert
  const ShowAlert = (message, type) =>{
      setAlert({

        mssge: message,
        type: type
      })

      setTimeout(()=>{
        setAlert('null');
      },3000)

  }

  const toggleMode = () => {

      if (mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        ShowAlert("The dark Mode is enabled", "success")

      }

      else 
      {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        ShowAlert("The light Mode is enabled", "success")


      }

  }
  

  const toggleBlueMode = () => {

    
    if (mode === 'light' || mode === 'dark') {
        setMode('blue');
        document.body.style.backgroundColor = '#ADD8E6';
        ShowAlert("The Blue Mode is enabled", "success");
    } 
    
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        ShowAlert("The light Mode is enabled", "success");
    }
};


  return(
    <>
  

        <Navbar mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm ShowAlert={ShowAlert} mode={mode} ExampleTextForm= "Please Enter the Valid Details Here:"/>
        {/* <AboutUs mode={mode}/> */}

        </div>
        
  </>

  );
  
}

export default App;
