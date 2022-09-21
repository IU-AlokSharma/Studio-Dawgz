import React from 'react'
import style from "../css files/Teams.module.css"

export const Teams = () => {
  return (
    <div className={style.main}>
      <div className={style.head}>
        <h1> Meet our team</h1>
      </div>

      <div className={style.cardcontainer}>

        {
          data.map((item) => {

            return (

              <div className={style.card} key={item.id}>
                <div className={style.imgbox} style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${item.image})` }}>

                </div>
                <div className={style.descriptionbox}>

                  <h2>{item.name}</h2>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })
        }

      </div>
      <div className={style.seprationline}>
        <img src="./Data/Vector 3.svg" alt="" />

      </div>

      <div className={style.cardcontainer}>
        <div className={style.card} >
          <div className={style.iulogobox} >

          </div>
          <div className={style.descriptionbox}>

            <h2>IDEA USHER</h2>
            <h3>Our Developer Team</h3>
            <p>To design, develop and market the Studio Dawgzs’ utility bringing it to reality and making it an iconic platform.
            </p>
          </div>
        </div>
      </div>
      
      <div className={style.cardcontainer}>

          {
            iuData.map((item) => {

              return (

                <div className={style.card} key={item.id}>
                  <div className={style.imgbox} style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${item.image})` }}>

                  </div>
                  <div className={style.descriptionbox}>

                    <h2>{item.name}</h2>
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })
          }

        </div>

        <div className={style.seprationlineRev}>
          <img src="./Data/Vector 3.svg" alt="" />

        </div>
        <div className={style.cardcontainer}>

          {
            extra.map((item) => {

              return (

                <div className={style.card} key={item.id}>
                  <div className={style.imgbox} style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${item.image})` }}>

                  </div>
                  <div className={style.descriptionbox}>

                    <h2>{item.name}</h2>
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })
          }

        </div>

        <div className={style.seprationline}>
          <img src="./Data/Vector 3.svg" alt="" />

        </div>

        <div className={style.cardcontainer}>
          <div className={style.card} >
            <div className={style.prlogobox} >

            </div>
            <div className={style.descriptionbox}>

              <h2>NEBULA PR</h2>
              <h3>PR Company</h3>
              <p>To get Studio Dawgz the press coverage it deserves
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

const data = [

  {
    id: 1,
    image:"./Data/team1.png",
    name: "J4CE",
    role: "Our Co-Founder & Lead Marketer",
    description: "To revolutionize the music industry with web3 technology and be the leading PFP project in the Music NFT Space."
  },
  {
    id: 2,
    image:"./Data/team2.png",
    name: "TIFF",
    role: "Our Co-Founder & Strategis",
    description: "To connect the world’s talented artists and innovators together in Web 3"
  },
  {
    id: 3,
    image:"./Data/team3.png",
    name: "BODMON",
    role: "Our Operations Director",
    description: "To connect the world’s talented artists and innovators together in Web 3"
  },
  {
    id: 4,
    image:"./Data/team2.png",
    name: "GEM",
    role: "Our Community Manager",
    description: "To cultivate & build the strongest Music NFT community in the space. "
  },
  {
    id: 5,
    image:"./Data/team1.png",
    name: "MACK",
    role: "Our Assistant Manager",
    description: "To ensure that the Studio Dawgzs’ team is running efficiently and to keep the vibes uplifted."
  },
  {
    id: 6,
    image:"./Data/team2.png",
    name: "ANUSHRI",
    role: "Our Lead Designer",
    description: "To manage all the realms of the designing process from developing designing plans to delivering product samples."
  },
  {
    id: 7,
    image:"./Data/team3.png",
    name: "ANTHONY",
    role: "Our Designer & Art Generator",
    description: "To develop tangible or intangible objects in the visual format for communicating information"
  },
]


const iuData = [

  {
    id: 1,
    image:"./Data/team1.png",
    name: "ABHISHEK DAS",
    role: "Our lead Project Manager",
    description: "To manage, guide and allocate resources to the team throughout the development and maintenance process."
  },
  {
    id: 2,
    image:"./Data/team2.png",
    name:"ALOK SHARMA",
    role: "Our Frontend Developer",
    description: "To develop the frontend web design."
  },
  {
    id: 3,
    image:"./Data/team3.png",
    name: "SHUBHAM GUPTA",
    role: "Our Web 3.0 Developer",
    description: "To write the smart contract and handle the very technical backend foundation of the platform."
  },
  {
    id: 4,
    image:"./Data/team2.png",
    name: "TANMAY",
    role: "Our UI / UX designer",
    description: "To turn every instruction into a visual format that is interactive and attractive to users."
  },
  {
    id: 5,
    image:"./Data/team1.png",
    name: "KAMALPREET",
    role: "Our Copywriter",
    description: "To craft every textual content that is clear, engaging and persuasive to the audience."
  },
  
]


const extra = [

  {
    id: 1,
    image:"./Data/team2.png",
    name: "YUNG DC, ISHMONEY, SHIVI, ALPHA A, PUSHA P, SIMMY G",
    role: "Our Lead Mod Team",
    description: "To keep our community safe, positive & engaging and also eliminating FUD & bots."
  },
  {
    id: 2,
    image:"./Data/team1.png",
    name: "OXDOGGED ",
    role: "Discord Auditor",
    description: "To protect the studio dawgz community"
  },
]