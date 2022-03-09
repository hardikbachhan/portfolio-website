import React from 'react'
import mcleodganj_sunset from "../public/images/mcleodganj_sunset.jpg";
import nature from "../public/images/nature.jpg";
import home_background from "../public/images/home_background.jpg";
import landscape from "../public/images/landscape.jpg";

function Home() {
    const myImgStyle = {
        height: "100vh",
        width: "100%",
    }

    const myTextStyle = {
        fontSize: "2.4rem",
        textAlign: "right",
        top: "25%"
    }

  return (
    <div>
        <img style={myImgStyle} src={nature} alt={home_background} />
        <p class="carousel-caption pb-3" style={myTextStyle}>Hi there, I am </p> <br />
        <p class="carousel-caption" style={{...myTextStyle, "fontSize": "4.2rem", top: "32%"}}>Hardik Bachhan</p>
    </div>
  )
}

export default Home