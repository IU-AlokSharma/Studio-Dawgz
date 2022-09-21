import React from 'react'
import style from "../css files/Studio.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import "../css files/Homeglobal.css"

export const Studio = () => {

  const [toggle, setToggle] = React.useState(false);

  const handleReadMore = () => {

    setToggle(!toggle)
  }
  return (
    <div className={style.main}>

      <div className={style.contentbox}>

        <div className={style.tophead} id="box1">
          <h1>About Studio <br /> Daw+gz</h1>
          <p>Studio Dawgz is a collection of 7808 unique NFT’s focused on re-imagining 3D Art through unparalleled utility & a passionate community surrounded around music. Music lovers and creators all come together in our expansive ecosystem where holders gain access to exclusive benefits. Our mission is to revolutionize how music is created & sold, giving power to the creators & their fans, engaging them and unleashing new opportunities to reward them.</p>

        </div>

        <div className={style.lore} id="box2">

          <h1>Lore</h1>
          <p>In a vast empty dimension where vibes are the only language spoken & silence is the only thing known, a golden aura made itself prominent and began forming. It produced a sound unique to anyone that heard it. This aura was said to be the source of all creativity itself and that it can never be destroyed but only transferred from one dimension to another.
            The pressure from this golden energy became so massive & heavy due to its need of being expressed it created a blackhole that traveled to our known Metaverse & exploded into 7808 golden energetic shards. These shards began to take form after having a reaction to its new environment, taking the form of the first being it resonated with from the physical world, a dawg. The legendary Golden Retriever named Leo reincarnated into the physical world with the same creative energy became a conduit of this golden aura & the Dawgz began to live it’s purpose within the Metaverse creating its own pocket dimension; The Pawverse.
          </p>
          {toggle &&

            <p>
              Obsessed with music, these dawgz would spend their life in virtual studios collaborating with one another creating songs, producing beats, engineering, having creative input & simply vibing out listening to dope sounds.
              Empowered by web3, together they began to inspire others to embrace their creativity & love for the art. Each dawg holds a unique aspect of the golden life force energy and with the legendary dawg Leo being the conduit & our ties to the physical world, we are taking over with our unique sound & style. The most rare Studio Dawgz were able to harness their creative influence & by natural selection they were chosen to lead the pack of all 7,808 with the mission of spreading good music & empowering other music lovers all across the Metaverse.
            </p>

          }

          <div className={style.readmore} onClick={handleReadMore}>
            <h3>Read {toggle ? "less" : "more"}</h3>
            <div className={toggle ? style.uparrow : style.arrow}>
              <svg width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 1V25M9.5 25L1 16.2113M9.5 25L18 16.2113" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>

        <div className={style.journey} id="box3">

          <h1>How it started?</h1>
          <p>Studio Dawgz is a project established as a way to honor the founder's dog, Leo. Adopted when 3 months old, Leo has always been a happy and energetic golden lab. Things turned when at 10 he got diagnosed with cancer. This agony prompted J4CE to develop a way to immortalize him so that he is forever remembered by everyone in the family. Thus, the founder’s passion for music and love for Leo kickstarted the project that evolved into what it is today - a tribute to Leo that ties in music and media. With 10 years of being heavily involved in the music making industry, J4CE saw that music NFTS were going to become the new meta and as a visionary he was inspired to fill in those gaps within the NFT space. His mission is to create the leading PFP project in the Music NFT space that ties in unmatched utility to holders.</p>

        </div>

        <div className={style.socialmedia} id="box4">
          <h1>Social Media Links</h1>
          <p>Catch studio dawgzz on social media platforms</p>
          <div className={style.cardbox}>
            <div className={style.card}>
              <div><svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.5572 3.14741C25.5815 3.57071 24.5497 3.85053 23.4938 3.97818C24.6078 3.31268 25.4425 2.26574 25.8433 1.03155C24.7965 1.65471 23.6505 2.09376 22.4553 2.32962C21.6564 1.46325 20.5925 0.886547 19.4306 0.68996C18.2686 0.493373 17.0742 0.688022 16.0348 1.24338C14.9953 1.79874 14.1696 2.68339 13.6871 3.75859C13.2046 4.8338 13.0927 6.03874 13.3688 7.18443C11.2522 7.07737 9.18176 6.52625 7.29203 5.56685C5.40231 4.60745 3.73555 3.26124 2.40003 1.61568C1.9316 2.43369 1.68546 3.36007 1.68609 4.3027C1.68443 5.1781 1.89925 6.04033 2.31144 6.81262C2.72363 7.5849 3.32039 8.24329 4.04859 8.72914C3.20221 8.70611 2.37392 8.479 1.63416 8.06712V8.13203C1.64051 9.35857 2.07031 10.5453 2.85087 11.4914C3.63143 12.4375 4.71483 13.085 5.91782 13.3243C5.45474 13.4653 4.97395 13.5396 4.48993 13.545C4.15489 13.5411 3.82067 13.5107 3.49041 13.4541C3.83299 14.5092 4.49593 15.4313 5.387 16.092C6.27807 16.7528 7.35294 17.1193 8.46205 17.1407C6.58919 18.6143 4.2769 19.4186 1.89378 19.4253C1.45988 19.4267 1.02632 19.4007 0.595703 19.3474C3.02886 20.9184 5.86435 21.7524 8.76061 21.7489C10.7592 21.7696 12.742 21.3919 14.593 20.6378C16.444 19.8837 18.1263 18.7683 19.5414 17.3568C20.9565 15.9453 22.0762 14.2659 22.8351 12.4169C23.5939 10.5678 23.9767 8.586 23.9611 6.58732C23.9611 6.36664 23.9611 6.13299 23.9611 5.89933C24.9797 5.13971 25.8582 4.20849 26.5572 3.14741V3.14741Z" fill="white" />
              </svg></div>


              <div>
                <h3>Twitter</h3>
                <p>@studiogawgss</p>
              </div>

            </div>

            <div className={style.card}>

              <div><svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.0522 0.0191956H1.94644C1.56774 0.0191956 1.20455 0.169633 0.936773 0.437413C0.668992 0.705194 0.518555 1.06838 0.518555 1.44708V24.5528C0.518555 24.7404 0.555488 24.926 0.627246 25.0993C0.699004 25.2725 0.804181 25.4299 0.936773 25.5625C1.06936 25.6951 1.22677 25.8003 1.40001 25.872C1.57325 25.9438 1.75893 25.9807 1.94644 25.9807H14.382V15.9206H11.007V12.0264H14.382V9.10573C14.3121 8.42003 14.3931 7.72734 14.6192 7.07624C14.8453 6.42514 15.2112 5.83139 15.6911 5.33665C16.171 4.84191 16.7533 4.45815 17.3972 4.21229C18.0411 3.96643 18.731 3.86443 19.4186 3.91343C20.4289 3.90721 21.4387 3.95922 22.4431 4.0692V7.574H20.3791C18.7436 7.574 18.432 8.35285 18.432 9.48218V11.9875H22.3262L21.82 15.8817H18.432V25.9807H25.0522C25.2397 25.9807 25.4254 25.9438 25.5986 25.872C25.7719 25.8003 25.9293 25.6951 26.0619 25.5625C26.1945 25.4299 26.2996 25.2725 26.3714 25.0993C26.4432 24.926 26.4801 24.7404 26.4801 24.5528V1.44708C26.4801 1.25957 26.4432 1.07389 26.3714 0.900652C26.2996 0.727414 26.1945 0.570005 26.0619 0.437413C25.9293 0.304822 25.7719 0.199645 25.5986 0.127887C25.4254 0.056129 25.2397 0.0191956 25.0522 0.0191956Z" fill="white" />
              </svg></div>

              <div>
                <h3>Facebook</h3>
                <p>@studiogawgss</p>
              </div>
            </div>

            <div className={style.card}>
              <div><svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0063 11.2212H10.0061C9.64368 11.2212 9.29607 11.3652 9.03977 11.6216C8.78348 11.8779 8.6395 12.2255 8.63951 12.588C8.63953 12.9504 8.78352 13.2981 9.03983 13.5544C9.29614 13.8107 9.64376 13.9546 10.0062 13.9546C10.3687 13.9546 10.7163 13.8107 10.9726 13.5544C11.2289 13.2981 11.3729 12.9504 11.373 12.588C11.373 12.2255 11.229 11.8779 10.9727 11.6216C10.7164 11.3652 10.3688 11.2212 10.0063 11.2212ZM14.8796 11.2212C14.5812 11.1959 14.282 11.2613 14.0214 11.4089C13.7607 11.5564 13.5507 11.7793 13.4187 12.0482C13.2868 12.3171 13.2391 12.6196 13.282 12.916C13.3248 13.2125 13.4562 13.4891 13.6589 13.7096C13.8615 13.9302 14.1261 14.0844 14.4179 14.1521C14.7096 14.2198 15.0151 14.1979 15.2941 14.0891C15.5732 13.9803 15.813 13.7898 15.982 13.5426C16.151 13.2953 16.2414 13.0027 16.2414 12.7032C16.2494 12.5164 16.2205 12.3299 16.1564 12.1544C16.0922 11.9788 15.9941 11.8176 15.8677 11.68C15.7412 11.5424 15.5888 11.431 15.4193 11.3523C15.2498 11.2736 15.0664 11.229 14.8796 11.2212ZM21.3684 0.0191956H3.47742C3.11709 0.0200468 2.76046 0.0918675 2.42788 0.230556C2.09531 0.369245 1.79332 0.572085 1.53914 0.827494C1.28497 1.0829 1.08359 1.38588 0.946517 1.71912C0.809441 2.05236 0.739349 2.40933 0.740243 2.76966V20.8211C0.739364 21.1814 0.809467 21.5384 0.946549 21.8716C1.08363 22.2048 1.28501 22.5078 1.53918 22.7632C1.79335 23.0186 2.09534 23.2214 2.42791 23.3601C2.76047 23.4988 3.1171 23.5706 3.47742 23.5715H18.6181L17.9105 21.1014L19.6194 22.6902L21.235 24.1856L24.1056 26.7225V2.76966C24.1065 2.40933 24.0364 2.05236 23.8994 1.71912C23.7623 1.38588 23.5609 1.0829 23.3067 0.827494C23.0526 0.572085 22.7506 0.369245 22.418 0.230556C22.0854 0.0918675 21.7288 0.0200468 21.3684 0.0191956ZM16.2148 17.4564V17.4565C16.2148 17.4565 15.734 16.8823 15.3335 16.3749C16.3013 16.1471 17.1574 15.5843 17.7502 14.7861C17.2699 15.1059 16.7548 15.3701 16.2148 15.5738C15.5937 15.8389 14.944 16.0316 14.2788 16.1479C13.1353 16.3585 11.9626 16.3539 10.8208 16.1346C10.1504 16.0034 9.49341 15.8113 8.85798 15.5606C8.52308 15.4317 8.19742 15.28 7.88331 15.1066C7.84321 15.0798 7.80329 15.0665 7.7632 15.0398C7.74311 15.0298 7.72501 15.0162 7.7098 14.9998C7.46958 14.8663 7.33584 14.7728 7.33584 14.7728C7.9073 15.5542 8.73377 16.1114 9.67244 16.3482C9.27202 16.8557 8.77796 17.4564 8.77796 17.4564C7.98485 17.4778 7.19865 17.3039 6.48856 16.95C5.77846 16.5961 5.16624 16.0731 4.70578 15.427C4.74913 12.7202 5.4065 10.0586 6.62832 7.64294C7.70359 6.79845 9.01452 6.3086 10.3801 6.24102L10.5135 6.40131C9.22876 6.71921 8.02987 7.31638 7.00217 8.15032C7.00217 8.15032 7.29595 7.99013 7.78987 7.76313C8.74964 7.325 9.77257 7.04115 10.8209 6.92204C10.8956 6.90649 10.9716 6.89753 11.0479 6.89526C11.9426 6.77871 12.8481 6.76978 13.7449 6.86864C15.1553 7.02968 16.5205 7.46508 17.7637 8.15032C16.7881 7.35617 15.655 6.77821 14.4393 6.45467L14.6262 6.24115C15.9918 6.30867 17.3027 6.79853 18.3779 7.64307C19.5999 10.0587 20.2573 12.7203 20.3007 15.427C19.8364 16.0725 19.2215 16.5948 18.5094 16.9485C17.7974 17.3022 17.0096 17.4766 16.2148 17.4564Z" fill="white" />
              </svg></div>

              <div>
                <h3>Discord</h3>
                <p>@studiogawgss</p>
              </div>
            </div>

          </div>
        </div>


      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={1500}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={`studioSwiper`}
      >
        <SwiperSlide>
          <div className={style.tophead}>
            <h1>About Studio <br /> Daw+gz</h1>
            <p>Studio Dawgz is a collection of 7808 unique NFT’s focused on re-imagining 3D Art through unparalleled utility & a passionate community surrounded around music. Music lovers and creators all come together in our expansive ecosystem where holders gain access to exclusive benefits. Our mission is to revolutionize how music is created & sold, giving power to the creators & their fans, engaging them and unleashing new opportunities to reward them.</p>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.lore}>

            <h1>Lore</h1>
            <p>In a vast empty dimension where vibes are the only language spoken & silence is the only thing known, a golden aura made itself prominent and began forming. It produced a sound unique to anyone that heard it. This aura was said to be the source of all creativity itself and that it can never be destroyed but only transferred from one dimension to another.
              The pressure from this golden energy became so massive & heavy due to its need of being expressed it created a blackhole that traveled to our known Metaverse & exploded into 7808 golden energetic shards. These shards began to take form after having a reaction to its new environment, taking the form of the first being it resonated with from the physical world, a dawg. The legendary Golden Retriever named Leo reincarnated into the physical world with the same creative energy became a conduit of this golden aura & the Dawgz began to live it’s purpose within the Metaverse creating its own pocket dimension; The Pawverse.
            </p>
            {toggle &&

              <p>
                Obsessed with music, these dawgz would spend their life in virtual studios collaborating with one another creating songs, producing beats, engineering, having creative input & simply vibing out listening to dope sounds.
                Empowered by web3, together they began to inspire others to embrace their creativity & love for the art. Each dawg holds a unique aspect of the golden life force energy and with the legendary dawg Leo being the conduit & our ties to the physical world, we are taking over with our unique sound & style. The most rare Studio Dawgz were able to harness their creative influence & by natural selection they were chosen to lead the pack of all 7,808 with the mission of spreading good music & empowering other music lovers all across the Metaverse.
              </p>

            }

            <div className={style.readmore} onClick={handleReadMore}>
              <h3>Read {toggle ? "less" : "more"}</h3>
              <div className={toggle ? style.uparrow : style.arrow}>
                <svg width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 1V25M9.5 25L1 16.2113M9.5 25L18 16.2113" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.journey}>

            <h1>How it started?</h1>
            <p>Studio Dawgz is a project established as a way to honor the founder's dog, Leo. Adopted when 3 months old, Leo has always been a happy and energetic golden lab. Things turned when at 10 he got diagnosed with cancer. This agony prompted J4CE to develop a way to immortalize him so that he is forever remembered by everyone in the family. Thus, the founder’s passion for music and love for Leo kickstarted the project that evolved into what it is today - a tribute to Leo that ties in music and media. With 10 years of being heavily involved in the music making industry, J4CE saw that music NFTS were going to become the new meta and as a visionary he was inspired to fill in those gaps within the NFT space. His mission is to create the leading PFP project in the Music NFT space that ties in unmatched utility to holders.</p>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.socialmedia}>
            <h1>Social Media Links</h1>
            <p>Catch studio dawgzz on social media platforms</p>
            <div className={style.cardbox}>
              <div className={style.card}>
                <div><svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.5572 3.14741C25.5815 3.57071 24.5497 3.85053 23.4938 3.97818C24.6078 3.31268 25.4425 2.26574 25.8433 1.03155C24.7965 1.65471 23.6505 2.09376 22.4553 2.32962C21.6564 1.46325 20.5925 0.886547 19.4306 0.68996C18.2686 0.493373 17.0742 0.688022 16.0348 1.24338C14.9953 1.79874 14.1696 2.68339 13.6871 3.75859C13.2046 4.8338 13.0927 6.03874 13.3688 7.18443C11.2522 7.07737 9.18176 6.52625 7.29203 5.56685C5.40231 4.60745 3.73555 3.26124 2.40003 1.61568C1.9316 2.43369 1.68546 3.36007 1.68609 4.3027C1.68443 5.1781 1.89925 6.04033 2.31144 6.81262C2.72363 7.5849 3.32039 8.24329 4.04859 8.72914C3.20221 8.70611 2.37392 8.479 1.63416 8.06712V8.13203C1.64051 9.35857 2.07031 10.5453 2.85087 11.4914C3.63143 12.4375 4.71483 13.085 5.91782 13.3243C5.45474 13.4653 4.97395 13.5396 4.48993 13.545C4.15489 13.5411 3.82067 13.5107 3.49041 13.4541C3.83299 14.5092 4.49593 15.4313 5.387 16.092C6.27807 16.7528 7.35294 17.1193 8.46205 17.1407C6.58919 18.6143 4.2769 19.4186 1.89378 19.4253C1.45988 19.4267 1.02632 19.4007 0.595703 19.3474C3.02886 20.9184 5.86435 21.7524 8.76061 21.7489C10.7592 21.7696 12.742 21.3919 14.593 20.6378C16.444 19.8837 18.1263 18.7683 19.5414 17.3568C20.9565 15.9453 22.0762 14.2659 22.8351 12.4169C23.5939 10.5678 23.9767 8.586 23.9611 6.58732C23.9611 6.36664 23.9611 6.13299 23.9611 5.89933C24.9797 5.13971 25.8582 4.20849 26.5572 3.14741V3.14741Z" fill="white" />
                </svg></div>


                <div>
                  <h3>Twitter</h3>
                  <p>@studiogawgss</p>
                </div>

              </div>

              <div className={style.card}>

                <div><svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.0522 0.0191956H1.94644C1.56774 0.0191956 1.20455 0.169633 0.936773 0.437413C0.668992 0.705194 0.518555 1.06838 0.518555 1.44708V24.5528C0.518555 24.7404 0.555488 24.926 0.627246 25.0993C0.699004 25.2725 0.804181 25.4299 0.936773 25.5625C1.06936 25.6951 1.22677 25.8003 1.40001 25.872C1.57325 25.9438 1.75893 25.9807 1.94644 25.9807H14.382V15.9206H11.007V12.0264H14.382V9.10573C14.3121 8.42003 14.3931 7.72734 14.6192 7.07624C14.8453 6.42514 15.2112 5.83139 15.6911 5.33665C16.171 4.84191 16.7533 4.45815 17.3972 4.21229C18.0411 3.96643 18.731 3.86443 19.4186 3.91343C20.4289 3.90721 21.4387 3.95922 22.4431 4.0692V7.574H20.3791C18.7436 7.574 18.432 8.35285 18.432 9.48218V11.9875H22.3262L21.82 15.8817H18.432V25.9807H25.0522C25.2397 25.9807 25.4254 25.9438 25.5986 25.872C25.7719 25.8003 25.9293 25.6951 26.0619 25.5625C26.1945 25.4299 26.2996 25.2725 26.3714 25.0993C26.4432 24.926 26.4801 24.7404 26.4801 24.5528V1.44708C26.4801 1.25957 26.4432 1.07389 26.3714 0.900652C26.2996 0.727414 26.1945 0.570005 26.0619 0.437413C25.9293 0.304822 25.7719 0.199645 25.5986 0.127887C25.4254 0.056129 25.2397 0.0191956 25.0522 0.0191956Z" fill="white" />
                </svg></div>

                <div>
                  <h3>Facebook</h3>
                  <p>@studiogawgss</p>
                </div>
              </div>

              <div className={style.card}>
                <div><svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0063 11.2212H10.0061C9.64368 11.2212 9.29607 11.3652 9.03977 11.6216C8.78348 11.8779 8.6395 12.2255 8.63951 12.588C8.63953 12.9504 8.78352 13.2981 9.03983 13.5544C9.29614 13.8107 9.64376 13.9546 10.0062 13.9546C10.3687 13.9546 10.7163 13.8107 10.9726 13.5544C11.2289 13.2981 11.3729 12.9504 11.373 12.588C11.373 12.2255 11.229 11.8779 10.9727 11.6216C10.7164 11.3652 10.3688 11.2212 10.0063 11.2212ZM14.8796 11.2212C14.5812 11.1959 14.282 11.2613 14.0214 11.4089C13.7607 11.5564 13.5507 11.7793 13.4187 12.0482C13.2868 12.3171 13.2391 12.6196 13.282 12.916C13.3248 13.2125 13.4562 13.4891 13.6589 13.7096C13.8615 13.9302 14.1261 14.0844 14.4179 14.1521C14.7096 14.2198 15.0151 14.1979 15.2941 14.0891C15.5732 13.9803 15.813 13.7898 15.982 13.5426C16.151 13.2953 16.2414 13.0027 16.2414 12.7032C16.2494 12.5164 16.2205 12.3299 16.1564 12.1544C16.0922 11.9788 15.9941 11.8176 15.8677 11.68C15.7412 11.5424 15.5888 11.431 15.4193 11.3523C15.2498 11.2736 15.0664 11.229 14.8796 11.2212ZM21.3684 0.0191956H3.47742C3.11709 0.0200468 2.76046 0.0918675 2.42788 0.230556C2.09531 0.369245 1.79332 0.572085 1.53914 0.827494C1.28497 1.0829 1.08359 1.38588 0.946517 1.71912C0.809441 2.05236 0.739349 2.40933 0.740243 2.76966V20.8211C0.739364 21.1814 0.809467 21.5384 0.946549 21.8716C1.08363 22.2048 1.28501 22.5078 1.53918 22.7632C1.79335 23.0186 2.09534 23.2214 2.42791 23.3601C2.76047 23.4988 3.1171 23.5706 3.47742 23.5715H18.6181L17.9105 21.1014L19.6194 22.6902L21.235 24.1856L24.1056 26.7225V2.76966C24.1065 2.40933 24.0364 2.05236 23.8994 1.71912C23.7623 1.38588 23.5609 1.0829 23.3067 0.827494C23.0526 0.572085 22.7506 0.369245 22.418 0.230556C22.0854 0.0918675 21.7288 0.0200468 21.3684 0.0191956ZM16.2148 17.4564V17.4565C16.2148 17.4565 15.734 16.8823 15.3335 16.3749C16.3013 16.1471 17.1574 15.5843 17.7502 14.7861C17.2699 15.1059 16.7548 15.3701 16.2148 15.5738C15.5937 15.8389 14.944 16.0316 14.2788 16.1479C13.1353 16.3585 11.9626 16.3539 10.8208 16.1346C10.1504 16.0034 9.49341 15.8113 8.85798 15.5606C8.52308 15.4317 8.19742 15.28 7.88331 15.1066C7.84321 15.0798 7.80329 15.0665 7.7632 15.0398C7.74311 15.0298 7.72501 15.0162 7.7098 14.9998C7.46958 14.8663 7.33584 14.7728 7.33584 14.7728C7.9073 15.5542 8.73377 16.1114 9.67244 16.3482C9.27202 16.8557 8.77796 17.4564 8.77796 17.4564C7.98485 17.4778 7.19865 17.3039 6.48856 16.95C5.77846 16.5961 5.16624 16.0731 4.70578 15.427C4.74913 12.7202 5.4065 10.0586 6.62832 7.64294C7.70359 6.79845 9.01452 6.3086 10.3801 6.24102L10.5135 6.40131C9.22876 6.71921 8.02987 7.31638 7.00217 8.15032C7.00217 8.15032 7.29595 7.99013 7.78987 7.76313C8.74964 7.325 9.77257 7.04115 10.8209 6.92204C10.8956 6.90649 10.9716 6.89753 11.0479 6.89526C11.9426 6.77871 12.8481 6.76978 13.7449 6.86864C15.1553 7.02968 16.5205 7.46508 17.7637 8.15032C16.7881 7.35617 15.655 6.77821 14.4393 6.45467L14.6262 6.24115C15.9918 6.30867 17.3027 6.79853 18.3779 7.64307C19.5999 10.0587 20.2573 12.7203 20.3007 15.427C19.8364 16.0725 19.2215 16.5948 18.5094 16.9485C17.7974 17.3022 17.0096 17.4766 16.2148 17.4564Z" fill="white" />
                </svg></div>

                <div>
                  <h3>Discord</h3>
                  <p>@studiogawgss</p>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>


      <div className={style.fixedimgbox}>
        <div className={style.fixedimg}>
          <img src="./Data/fixeddog.png" alt="" />
        </div>
      </div>
    </div>
  )
}
