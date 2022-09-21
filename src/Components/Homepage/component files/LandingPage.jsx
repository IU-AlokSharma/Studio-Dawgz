import React from 'react'
import { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import style from "../css files/LandingPage.module.css"
import { Accordions } from './Accordions'
import { Roadmap } from './Roadmap'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'
import "../css files/Homeglobal.css"


export const LandingPage = () => {

    
    // const { changeBar, bar1, bar2, bar3, bar4 } = useContext(AuthContext)

    // window.addEventListener("scroll", changeBar);

    
        // if screens are smaller swiper will change its direction
        let changeSwiperDirection
        if(screen.availWidth<=1024){

            changeSwiperDirection = "horizontal"
        }
        else{

            changeSwiperDirection = "vertical"
        }


    console.log(changeSwiperDirection)
    
    //rotating text
    let text = "Scroll to view more";
    let rotateChar = [];

    for (let i = 0; i < text.length; i++) {

        rotateChar.push(<span key={i} style={{ transform: `rotate(${i * 18}deg)` }}>{text[i]}</span>)
    }

    return (
        <div>

            <a href='#box1'><div className={style.circlebox}>
                <div className={style.circle}>
                    <div className={style.logo}>
                        <svg width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 1V25M9.5 25L1 16.2113M9.5 25L18 16.2113" stroke="#E8DE00" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className={style.text}>

                        {rotateChar}

                    </div>
                </div>
            </div></a>

            <div className={style.frontimg}>
                <img src="./Data/frontimg.png" alt="frontimg" />
            </div>
            <div className={style.seprationline}>
                <img src="./Data/Vector 3.svg" alt="" />

            </div>

            <div className={style.midsection}>

                <Swiper
                     direction={changeSwiperDirection}
                    slidesPerView={1}
                    spaceBetween={1500}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className={`mySwiper`}
                >
                    <SwiperSlide>
                        <div className={style.box} >
                            <div className={style.boxcontent}>

                                <h1>Paw Your Way To the <br />Future of Music!</h1>
                                <p>Pump up the volume in this bright & bold future of web3 by unlocking various benefits holding a Studio Dawg. Whether you are a music creator, a music listener or someone in the music business holding our NFT will give you exclusive access to rewards surrounded by music.</p>

                            </div>

                            <div className={style.boximg}>

                                <div className={style.cdimg}>

                                    <div className={style.insidecd}>

                                    </div>

                                </div>

                                <div className={style.banner}>

                                    <h1>Banner</h1>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.box} >

                            <div className={style.boxcontent}>

                                <h1>Our Community</h1>
                                <p>Studio Dawgz is a complete game-changer for the creative music industry. We aspire to uplift a generation of Web3 creators, producers & listeners with our utility where they can network, share, create music & reap the rewards from holding our NFT.</p>

                            </div>

                            <div className={style.boximg}>


                                <img src="./Data/community.jpg" alt="" />
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.box} >

                            <div className={style.boxcontent}>

                                <h1>Our Collection</h1>

                                <ul>
                                    <p>
                                        <li>Get your own unique 3-D digital identity in the music NFT space</li>
                                        <li>Over 260+ distinctive attributes </li>
                                        <li>The higher the rarity means the higher rewards when staking</li>
                                    </p>
                                </ul>


                            </div>

                            <div className={style.boximg} >

                                <img src="./Data/collection.jpg" alt="" />


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.box} >


                            <div className={style.boxcontent2}>

                                <h1>Legendary Collection</h1>

                                <img src="./Data/legendary.png" />

                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className={style.seprationline2}>
                <img src="./Data/Vector 3.svg" alt="" />

            </div>
            <div className={style.box2}>

                <div className={style.box2content}>

                    <h1>Charity By The Dawgz <br />For The Dawgz</h1>
                    <p>Our philanthropic endeavors focus on donating 7% of our secondary sales to SPCA BC (a non-profit animal welfare organization which advocates for animal protection legislation). It primarily operates animal shelters, and runs educational workshops and public awareness programs throughout British Columbia, Canada.</p>

                </div>

                <div className={style.boximg}>
                    <div >

                        <img src="./Data/charity.png" alt="" />

                    </div>

                </div>
            </div>

            <Roadmap />
            <Accordions id="acc" />

        </div>
    )
}
