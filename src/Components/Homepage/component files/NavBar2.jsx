import React from 'react'
import style from "../css files/NavBar.module.css"
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'
import { Link, useNavigate } from "react-router-dom";

export const NavBar2 = () => {

    const {handlePopout} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleNavigation=(e)=>{

        navigate(`/${e.target.id}`)
        
        handlePopout();
    }

  return (
    <div className={style.nav2}>
        <div className={style.nav2head}>
            <div className={style.logobox} >
                <img className={style.logo} src="./Data/studiodawg_LOGO.png" alt="logo" />
            </div>
            <div className={style.sidebarbox} onClick={handlePopout}>
                <p>X</p>
            </div>
        </div>

        <div className={style.nav2pages}>
            <div className={style.pagesname}  onClick={handleNavigation}>
                <p id="">Home</p>
            </div>
            <hr/>
            <div className={style.pagesname}  onClick={handleNavigation}>
                <p id="studio">The Studio</p>
            </div>
            <hr/>
            <div className={style.pagesname}  onClick={handleNavigation}>
                <p id="utilities">Utilities</p>
            </div>
            <hr/>
            <div className={style.pagesname}  onClick={handleNavigation}>
                <p id="pawbenefits">PAW Benefits</p>
            </div>
            <hr/>
            <div className={style.pagesname}  onClick={handleNavigation}>
                <p id="teams">Team</p>
            </div>
        </div>
    </div>
  )
}
