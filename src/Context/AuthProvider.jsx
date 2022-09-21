import React, { useState, createContext } from 'react'


export const AuthContext = createContext();

export default function AuthProvider({children}) {


  const [displayHam, setDisplayHam] = useState(false);

    const handlePopout=()=>{

        setDisplayHam(false)
    }

    const handleHamburger =()=>{

        setDisplayHam(true)
    }


    const [bar1, setBar1] = useState(false)
    const [bar2, setBar2] = useState(false)
    const [bar3, setBar3] = useState(false)
    const [bar4, setBar4] = useState(false)

    const changeBar = () => {

        if (window.scrollY < 1000) {

            setBar1(true);
            setBar2(false);
            setBar3(false);
            setBar4(false);

        }
        else if (window.scrollY > 1000 && window.scrollY < 1700) {

            setBar1(false);
            setBar2(true);
            setBar3(false);
            setBar4(false);
        }
        else if (window.scrollY > 1700 && window.scrollY < 2400) {

            setBar1(false);
            setBar2(false);
            setBar3(true);
            setBar4(false);
        }
        else if (window.scrollY > 2400) {

            setBar1(false);
            setBar2(false);
            setBar3(false);
            setBar4(true);
        }
    }


    const [scrollbar1, setscrollBar1] = useState(false)
    const [scrollbar2, setscrollBar2] = useState(false)
    const [scrollbar3, setscrollBar3] = useState(false)
    const [scrollbar4, setscrollBar4] = useState(false)
    const [scrollbar5, setscrollBar5] = useState(false)
    const [scrollbar6, setscrollBar6] = useState(false)
    const [scrollbar7, setscrollBar7] = useState(false)
    const [scrollbar8, setscrollBar8] = useState(false)



    const Hamstyle = {
        position: "absolute",
        width: "100%",
        // height: "1366px",
        bgcolor: "transparent",
        fontFamily: "sans-serif",
        overflowX: "hidden",
        transform: "none",
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
        paddingLeft: "0px",
    };
   
  return (
    <AuthContext.Provider value={{displayHam,setDisplayHam,handleHamburger,handlePopout,changeBar,bar1,bar2,bar3,bar4,Hamstyle}}>
          {children}
    </AuthContext.Provider>
  )
}