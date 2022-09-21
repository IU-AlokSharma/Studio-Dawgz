import './App.css';
import { LandingPage } from './Components/Homepage/component files/LandingPage';
import { Routes, Route } from "react-router-dom";
import { Studio } from './Components/Studio/component files/Studio';
import { Utilities } from './Components/Utilities/component files/Utilities';
import { PawBenefits } from './Components/Paw Benefits/component files/PawBenefits';
import { Teams } from './Components/Teams/component files/Teams';
import { NavBar } from './Components/Homepage/component files/NavBar';
import { useEffect } from 'react';
import { MusicPlay } from './Components/Homepage/component files/MusicPlay';


function App() {


  // follow- mouse
  
  useEffect(() => {
    
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove",function(e){
  
      cursor.style.cssText  = "left: " + e.clientX + "px; top: " +e.clientY + "px;"
    })
    
  }, [])
  

  return (
    <div className='outerbox'>
      <div className="App">
        <div className="nav">
              <NavBar/>
        </div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studio" element={<Studio/>} />
          <Route path="/utilities" element={<Utilities/>}/>
          <Route path="/pawbenefits" element={<PawBenefits/>} />
          <Route path="/teams" element={<Teams/>} />
        </Routes>   
        <MusicPlay/>

        <div className="cursor" >
          <img src="./Data/paw.svg" alt="paw"/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
