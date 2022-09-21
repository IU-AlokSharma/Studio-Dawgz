import React from 'react'
import style from "../css files/PawBenefits.module.css"

export const PawBenefits = () => {
  return (
    <div className={style.main}>
      <div>
        <div className={style.heading}>
          <h1>Paw Benefits</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

      </div>
      <div className={style.imagemainbox}>
        <div className={style.col1}>
          <div className={style.img1}>
            <div className={style.flipcardinner}>
              <div className={style.flipcardfront}>
                <h1>01</h1>
                <p>Access</p>
              </div>

              <div className={style.flipcardback}>
                <h1>Access</h1>
                <p>Everyone can have access of our exclusive marketplace whether they are a stakers of Studio Dawgz or $PAW holders in a user friendly app</p>
              </div>
            </div>
          </div>



          <div className={style.img2}>
            <div className={style.flipcardinner}>
              <div className={style.flipcardfront}>
                <h1>02</h1>
                <p>NFT Holders</p>
              </div>

              <div className={style.flipcardback}>
                <h1>NFT Holders</h1>
                <p>Holders of Studio Dawgz will be able to get more rewards using our marketplace versus holders of $PAW</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.col2}>
          <div className={style.img3}>
            <div className={style.flipcardinner}>
              <div className={style.flipcardfront}>
                <h1>03</h1>
                <p>Beat store</p>
              </div>

              <div className={style.flipcardback}>
                <h1>Beat store</h1>
                <p>On just a few clicks buy or sell beats as NFTs</p>
              </div>
            </div>
          </div>


          <div className={style.img4}>
            <div className={style.flipcardinner}>
              <div className={style.flipcardfront}>
                <h1>04</h1>
                <p>Music NFTs</p>
              </div>

              <div className={style.flipcardback}>
                <h1>Music NFTs</h1>
                <p>Create, share and sell music wrapped in an NFT</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.col3}>

          <div className={style.col3top}>

            <div className={style.img5}>
              <div className={style.flipcardinner}>
                <div className={style.flipcardfront}>
                  <h1>05</h1>
                  <p>Whitelist spots</p>
                </div>

                <div className={style.flipcardback}>
                  <h1>Whitelist spots</h1>
                  <p>As we expand our network and collab with other NFT projects, we will provide WL spots exclusively in our marketplace</p>
                </div>
              </div>
            </div>

            <div className={style.img8}>
              <div className={style.flipcardinner}>
                <div className={style.flipcardfront}>
                  <h1>08</h1>
                  <p>Concert tickets</p>
                </div>

                <div className={style.flipcardback}>
                  <h1>Concert tickets</h1>
                  <p>Secure concert tickets of your favorite artists across the world</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.col3bottom}>


            <div className={style.img6}>
              <div className={style.flipcardinner}>
                <div className={style.flipcardfront}>
                  <h1>06</h1>
                  <p>Expensive utilities</p>
                </div>

                <div className={style.flipcardback}>
                  <h1>Expensive utilities</h1>
                  <p>As we collaborate with more projects, brands & companies in the music space, we will be providing even more utility to our marketplace</p>
                </div>
              </div>
            </div>

            <div className={style.img7}>
              <div className={style.flipcardinner}>
                <div className={style.flipcardfront}>
                  <h1>07</h1>
                  <p>Merchandise</p>
                </div>

                <div className={style.flipcardback}>
                  <h1>Merchandise</h1>
                  <p>From physical 3D printed renders of your NFTs to clothing to accessories to music equipment, get exciting Studio Dawgz goodies</p>
                </div>
              </div>
            </div>

            <div className={style.img9}>
              <div className={style.flipcardinner}>
                <div className={style.flipcardfront}>
                  <h1>09</h1>
                  <p>A&R Calls</p>
                </div>

                <div className={style.flipcardback}>
                  <h1>A&R Calls</h1>
                  <p>Get in touch with experts that can help review your music and help bring your creativity to the next level</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
