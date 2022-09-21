import React from 'react'
import { useState } from 'react'
import style from "../css files/MusicPlay.module.css"

export const MusicPlay = () => {
    const [pause, setPause] = useState(true)


    const play =()=>{

        setPause(!pause);

        const track = document.querySelector("#track");

    
        if(pause){
            track.play();
        }
        else{
            track.pause();
        }
        
    }
    return (
        <div className={style.main}>


            <div className={style.content}>
                <div className={style.imgbox}>
                    <img src="./Data/playdogz.png" alt="" />
                </div>

                <div className={style.namebox}>

                    <h4>Rock song ...</h4>
                    <p>Artist name</p>

                </div>
                <div className={style.playbox} onClick={play} >
                     <img src={pause?"./Data/Pause.svg":"./Data/Play.png"} className={pause?style.pauseimg:style.playimg} alt="" />

                </div>

                <audio src="./Data/nishu.mp3" type="audio/mp3" id="track"></audio>
            </div>

            <div className={style.blurrbox}>

            </div>

        </div>
    )
}   
