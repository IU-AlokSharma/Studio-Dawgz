import React, { useEffect } from 'react'
import style from "../css files/Roadmap.module.css"

export const Roadmap = () => {

    useEffect(() => {

        let slider = document.querySelector("#slider");
        let progressBar = document.querySelector("#filled");


        //horizontal-progresbar

        slider.addEventListener('scroll', (e) => {

            progressBar.style.width = `${getpercentage()}%`
        })


        function getpercentage() {

            return ((slider.scrollLeft / (slider.scrollWidth - slider.clientHeight)) * 120)
        }

        //vertical-progressbar
        function update() {
            progressBar.style.height = `${((window.scrollY - 1200) / (document.body.scrollHeight) * 250)}%`
            requestAnimationFrame(update);
        }
        update();



        const scrollContainer = document.querySelector("#slider");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });


    }, [])

    return (
        <div className={style.roadmap}>
            <div className={style.heading}>
                <h1>Roadmap</h1>
            </div>

            <div className={`${style["roadmapbox"]}`}>
                <div className={style.scrollbox} id="scrollbox">
                    <div className={style.filled} id="filled">

                        <div className={style.paw}> <img src="./Data/paw.svg" alt="paw" /></div>
                    </div>

                </div>

                <div className={style.roadmap_contentbox} id="slider">

                    <div className={style.detail}>

                        <h1>
                            The Studio Dawgz Community (Phase 1 Q2 - Q3 PRE-MINT)
                        </h1>
                        <p>Our main focus is to build our own community of like minded individuals who want to vibe out, network, share value & create music. We will give members a voice in the Music NFT Space. Members will be able to enter contests & engage with other creators in the space & earn Dawglist spots & other rewards. Also, we will be hosting our own Music NFT Radio on Twitter. We are more than happy to have a conversation about any possible collaboration! We will be listed on platforms & blogs like Rarity.tools & Nft calendar, Coindesk, Cointelegraph, Crypto Briefing etc. </p>
                    </div>

                    <div className={style.detail}>

                        <h1>
                            The Launch (Phase 2 Q3)
                        </h1>
                        <p>Empowering community driven music, firstly we will secure partnership with charity organization BC SPCA and allocate 7% of secondary sales to them. </p>
                    </div>

                    <div className={style.detail}>
                        <h1>
                            Creation of the Pawverse (Phase 3 Q3)
                        </h1>
                        <p>
                            To become the pioneers of building the music, we will mark the entry of Studio Dawgz HQ by purchasing metaverse land on Decentraland.
                            Holders will be able to stake their Studio Dawgz & earn $PAW Token which will later be used in our expansive ecosystem
                        </p>
                    </div>

                    <div className={style.detail}>

                        <h1>
                            Growing the Community (Phase 4 Q3)
                        </h1>
                        <p>Being the music platform that pays you, the first Studio Dawgz Crowdfunding campaign will take place where holders will enter & present their music & business plans to our community. Henceforth, our members will invest in the selected individuals. We will also foster the music careers & business plans of holders by allocating 10% of secondary sales to invest in.
                        </p>
                    </div>

                    <div className={style.detail}>

                        <h1>
                            The Ecosystem (Phase 5 Q4 - 2023)

                        </h1>
                        <p>In our very own marketplace, users will be able to use their $PAW Token to buy virtual & physical goods. Also, exclusive access to whitelist spots of other projects, tickets to concerts of your favorite artists, Merch, calls with A&R/Marketing experts & consultants in the industry is an initiative. As we expand, holders of $PAW Token will also be able to sell their own beats & music as NFTs on our marketplace.
                        </p>
                    </div>

                    <div className={style.detail}>

                        <h1>
                            Expansion (Phase 6 Q1 - 2023)

                        </h1>
                        <p>We aspire to mint the New Studio Puppy collection that will act as a booster when stacked with your Studio Dawg. Also, you will be entitled to earn more $PAW tokens to use in our marketplace. To celebrate and to be able to bring new content creations, we are also going to be collaborating with other projects, brands & companies bringing in more utility that will exclusively be sold in our marketplace.
                        </p>
                    </div>

                    <div className={style.detail}>
                        <h1>
                            The Launch of Virtual Studio (Phase 7 Q2 - 2023)

                        </h1>
                        <p>With a top-notch UI/UX developer from our partners at Idea Usher, we plan to release our own remote music production app where artists, producers & recording engineers etc., from anywhere around the world can have live studio sessions connecting their DAW app. Not only that, Studio Dawgz will transform the music creator space by making the app available free to all holders of Studio Dawgz/Puppiez in our marketplace. Also, the holders of $PAW Token will be entitled to purchase memberships of our Studio Dawgz app. </p>
                    </div>

                    <div className={style.detail}>

                        <h1>
                            Here We Go Live (Phase 8 Q3 - Q4 - 2023)

                        </h1>
                        <p>It’s the time when Studio Dawgz will organize Live Concerts featuring the best artists in the world.The holders will not only have the opportunity to attend but will get the chance to perform as well and expand brand awareness. We plan to host exclusive events & meetups for holders in L.A, Atlanta, New York & Toronto.
                        </p>
                    </div>

                    <div className={style.detail}>
                        <h1>
                            Roadmap 2.0 begins (2024 & Beyond)

                        </h1>
                        <p>We dig deeper into the creation of the Paw-Verse!
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
