import React from 'react'
import { useState } from 'react'
import style from "../css files/Accordions.module.css"

export const Accordions = () => {

  return (

    <div className={style.accordions}>

      <div className={style.headings}>
        <h1>Any <span>Questions</span> ?</h1>
        <h1>We Got You</h1>

        <div className={style.underline}>
            <img src="./Data/Vector 3.svg" alt="" />
        </div>
      </div>
      <div className={style.accordionsbox}>
        {
          data.map((item) => {

            return (

              <MyAccordion key={item.id} {...item}/>

            )
          })
        }
      </div>
    </div>
  )
}

const MyAccordion = ({question,answer}) => {

  const [show, setShow] = useState(false)


  return (
    <div className={style.oneaccordionbox}>

      <div onClick={()=>setShow(!show)} className={style.questionbox}>
        <div className={style.h3box}><h3 className={show?style.activequestion:style.question}>{question}</h3></div>
        <div className={style.signbox}><p>{show?"-":"+"}</p></div>
      </div>
      <div className={style.answerbox}>
          {show? <p>{answer}</p>:undefined}
      </div>
      <hr/>
    </div>
  )
}


const data = [
  {
    id: 1,
    question: "What Are NFTs?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 2,
    question: "What Are music NFTs?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 3,
    question: "What is metamask?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 4,
    question: "How to mint an NFT?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 5,
    question: "How to connect my wallet?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 6,
    question: "How to get a Studio Dawg?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 7,
    question: "When will we mint?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 8,
    question: "How to get whitelisted?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 9,
    question: "How many Studio Dawgz will there be?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 10,
    question: "What is the mint price?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },
  {
    id: 11,
    question: "How to connect the team?",
    answer: "Enjoy live shows in major cities in North America and if you are a holder, get free access to these shows Get a chance to perform & open up for bigger artists if you are holder Exclusive social events for holders"
  },

]
