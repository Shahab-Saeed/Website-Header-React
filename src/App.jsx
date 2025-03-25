import React, { useEffect } from 'react'
import { useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {
  let heroData=[
    {text1 : "Dive into" ,  text2 : "What you love"},
    {text1 : "Indulge" ,  text2 : "Your passions"},
    {text1 : "Give into" ,  text2 : "Your passions"}
  ]

  const [herocount, setherocount] = useState(2)
  const [playstatus, setPlayStatus] = useState(false)
  
useEffect(()=>{
  setInterval(() => {
    setherocount((count)=>{return count===2 ? 0 :count+1})
  }, 3000);
},[])
  return (
    <div>
        <Background playstatus={playstatus} herocount={herocount}/>    
        <Navbar/>        
        <Hero setplaystatus={setPlayStatus} heroData={heroData[herocount]} herocount={herocount} setherocount={setherocount} playstatus={playstatus}/>
    </div>
  )
}

export default App;
