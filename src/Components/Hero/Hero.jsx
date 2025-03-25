import React from 'react'
import "./Hero.css"
import arrowbtn from "../../assets/arrow_btn.png"
import playicon from "../../assets/play_icon.png"
import pauseicon from "../../assets/pause_icon.png"
const Hero = (props) => {
  return (
    <div className='hero'>
        <div className="hero-text">
          <p>{props.heroData.text1}</p>
          <p>{props.heroData.text2}</p>
        </div>
        <div className="hero-explore">
          <p>Explore the features</p>
          <img src={arrowbtn} alt="" />
        </div>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li onClick={()=> props.setherocount(0)} className={props.herocount===0 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={()=> props.setherocount(1)} className={props.herocount===1 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={()=> props.setherocount(2)} className={props.herocount===2 ? "hero-dot orange" : "hero-dot"}></li>
          </ul>
       
        <div className="hero-play">
          <img onClick={()=>{
            props.setplaystatus(!props.playstatus)
            
          }} src={props.playstatus?pauseicon : playicon} alt="" />
          <p>See Video</p>
        </div>
        </div>
    </div>
  )
}

export default Hero
