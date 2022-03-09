import React from 'react';
import { useMediaQuery } from 'react-responsive'
import mcleodganj_sunset from "../public/images/mcleodganj_sunset.jpg";
import nature from "../public/images/nature.jpg";
import tea_garden from "../public/images/tea_garden.jpg";
import cliffs from "../public/images/cliffs.jpg";

function Home() {

    const myImgStyle = {
        height: "100vh",
        width: "100%",
    }

    const myTextStyle = {
        fontSize: "2.4rem",
        textAlign: "right",
        top: "28%"
    }


    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })


    return (
        <div>
            {isTabletOrMobile || isPortrait ? <><img style={myImgStyle} src={tea_garden} alt={cliffs} />
                <p className="carousel-caption pb-3" style={{ ...myTextStyle, top: "65%" }}>Hi there, I am </p> <br />
                <p className="carousel-caption" style={{ ...myTextStyle, "fontSize": "3rem", top: "73%" }}>Hardik Bachhan</p></>
                :
                <><img style={myImgStyle} src={mcleodganj_sunset} alt={nature} />
                    <p className="carousel-caption pb-3" style={myTextStyle}>Hi there, I am </p> <br />
                    <p className="carousel-caption" style={{ ...myTextStyle, "fontSize": "4.2rem", top: "35%" }}>Hardik Bachhan</p></>}
        </div>
    )
}

export default Home