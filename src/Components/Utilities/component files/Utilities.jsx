import React from 'react'
import { useState } from 'react'
import style from "../css files/Utilities.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import "../css files/Homeglobal.css"

export const Utilities = () => {

  // if screens are smaller swiper will change its direction
  let changeSwiperDirection
  if(screen.availWidth<=1024){

      changeSwiperDirection = "horizontal"
  }
  else{

      changeSwiperDirection = "vertical"
  }
  
  return (
    <div className={style.main}>
      {/* <div className={style.midsection}> */}

        {/* <div className={style.box} id="box1">
          <div className={style.leftbars} id="bars" >
            <a href='#box1'><div id="bar1" className={bar1 ? style.activebar : undefined}></div></a>
            <a href='#box2'><div id="bar2" className={bar2 ? style.activebar : undefined}></div></a>
            <a href='#box3'><div id="bar3" className={bar3 ? style.activebar : undefined}></div></a>
            <a href='#box4'><div id="bar4" className={bar4 ? style.activebar : undefined}></div></a>
          </div>

          <div className={style.boxcontent}>

            <h3>Introducing</h3>
            <h1>$PAW Token</h1>
            <ul>
              <p>
                <li>Our token $PAW will play a vital role in keeping our expansive ecosystem preserved </li>
                <li>The whole Studio Dawgz collection will be tethered with $PAW where holders will be able to benefit from all it’s utilities</li>
                <li>Earn $PAW Token by staking your Studio Dawgz</li>
                <li>With $PAW you’ll be able to buy various virtual & physical goods </li>
                <li>Royalties that are generated in our exclusive marketplace will be airdropped to all stakers </li>
              </p>
            </ul>
          </div>

          <div className={style.boximg}>

          </div>
        </div> */}

        {/* <div className={style.box} id="box2">
          <div className={style.leftbars} id="bars" >
            <a href='#box1'><div id="bar1" className={bar1 ? style.activebar : undefined}></div></a>
            <a href='#box2'><div id="bar2" className={bar2 ? style.activebar : undefined}></div></a>
            <a href='#box3'><div id="bar3" className={bar3 ? style.activebar : undefined}></div></a>
            <a href='#box4'><div id="bar4" className={bar4 ? style.activebar : undefined}></div></a>
          </div>

          <div className={style.boxcontent}>

            <h2>Crowdfunding</h2>

            <ul>
              <p>
                <li>We will be setting aside 10% of secondary sales for crowdfunding artists, producers, sound engineers & businesses in the music industry.</li>
                <li>Holders with business plans in the music space can showcase their music, perform for the community & present their plan of execution in hopes to receive funds to get their dreams underway</li>
                <li>Holders will play a role in voting for who the we invest in</li>

              </p>
            </ul>
          </div>

          <div className={style.boximg}>

            <img src="./Data/crowdfunding.jpg" alt="" />
          </div>
        </div> */}

        {/* <div className={style.box} id="box3">
          <div className={style.leftbars} id="bars" >
            <a href='#box1'><div id="bar1" className={bar1 ? style.activebar : undefined}></div></a>
            <a href='#box2'><div id="bar2" className={bar2 ? style.activebar : undefined}></div></a>
            <a href='#box3'><div id="bar3" className={bar3 ? style.activebar : undefined}></div></a>
            <a href='#box4'><div id="bar4" className={bar4 ? style.activebar : undefined}></div></a>
          </div>

          <div className={style.boxcontent}>

            <h2>Virtual Studio</h2>

            <ul>
              <p>
                <li>Be a part of live studio sessions combining video calling with your Digital audio workstation</li>
                <li>Get to host recording/beat making/mixing/mastering sessions and collaborate with anyone from around the world remotely</li>
                <li>Get free access to this application by being the holder of Studio Dawgz</li>
                <li>Holders of $PAW Token are entitled to purchase our software or rent it out</li>
              </p>
            </ul>
          </div>

          <div className={style.boximg}>
            <img src="./Data/virtualstudio.jpg" alt="" />
          </div>
        </div> */}

        {/* <div className={style.box} id="box4">
          <div className={style.leftbars} id="bars" >
            <a href='#box1'><div id="bar1" className={bar1 ? style.activebar : undefined}></div></a>
            <a href='#box2'><div id="bar2" className={bar2 ? style.activebar : undefined}></div></a>
            <a href='#box3'><div id="bar3" className={bar3 ? style.activebar : undefined}></div></a>
            <a href='#box4'><div id="bar4" className={bar4 ? style.activebar : undefined}></div></a>
          </div>

          <div className={style.boxcontent}>

            <h2>Live Shows</h2>
            <ul>
              <p>
                <li>Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows.</li>
                <li>Get a chance to perform & open up for bigger artists if you are holder </li>
                <li>Exclusive social events for holders</li>
              </p>
            </ul>
          </div>

          <div className={style.boximg}>
            <img src="./Data/liveshows.jpg" alt="" />
          </div>
        </div> */}
      {/* </div> */}

      <Swiper
        direction={changeSwiperDirection}
        slidesPerView={1}
        spaceBetween={1500}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={`utiSwiper`}
      >
        <SwiperSlide>
        <div className={style.box}>
          

          <div className={style.boxcontent}>

            <h3>Introducing</h3>
            <h1>$PAW Token</h1>
            <ul>
              <p>
                <li>Our token $PAW will play a vital role in keeping our expansive ecosystem preserved </li>
                <li>The whole Studio Dawgz collection will be tethered with $PAW where holders will be able to benefit from all it’s utilities</li>
                <li>Earn $PAW Token by staking your Studio Dawgz</li>
                <li>With $PAW you’ll be able to buy various virtual & physical goods </li>
                <li>Royalties that are generated in our exclusive marketplace will be airdropped to all stakers </li>
              </p>
            </ul>
          </div>

          {/* <div className={style.boximg}>

          </div> */}
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={style.box}>
          
          <div className={style.boxcontent}>

            <h2>Crowdfunding</h2>

            <ul>
              <p>
                <li>We will be setting aside 10% of secondary sales for crowdfunding artists, producers, sound engineers & businesses in the music industry.</li>
                <li>Holders with business plans in the music space can showcase their music, perform for the community & present their plan of execution in hopes to receive funds to get their dreams underway</li>
                <li>Holders will play a role in voting for who the we invest in</li>

              </p>
            </ul>
          </div>

          <div className={style.boximg}>

          <img src="./Data/crowdfunding.jpg" alt="" />
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={style.box} >
          

          <div className={style.boxcontent}>

            <h2>Virtual Studio</h2>

            <ul>
              <p>
                <li>Be a part of live studio sessions combining video calling with your Digital audio workstation</li>
                <li>Get to host recording/beat making/mixing/mastering sessions and collaborate with anyone from around the world remotely</li>
                <li>Get free access to this application by being the holder of Studio Dawgz</li>
                <li>Holders of $PAW Token are entitled to purchase our software or rent it out</li>
              </p>
            </ul>
          </div>

          <div className={style.boximg}>
          <img src="./Data/virtualstudio.jpg" alt="" />
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={style.box} >
          <div className={style.boxcontent}>

            <h2>Live Shows</h2>
            <ul>
              <p>
                <li>Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows.</li>
                <li>Get a chance to perform & open up for bigger artists if you are holder </li>
                <li>Exclusive social events for holders</li>
              </p>
            </ul>
          </div>

          <div className={style.boximg}>
          <img src="./Data/liveshows.jpg" alt="" />
          </div>
        </div>
      
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
