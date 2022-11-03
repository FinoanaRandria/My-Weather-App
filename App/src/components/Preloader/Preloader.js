import React ,{useEffect,useRef } from 'react'
import Lottie from 'lottie-web'
import "../Assets/CSS/Preloader.css"

function Preloader() {

    const container = useRef(null)
      useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            animationData:require('../Assets/Json/61302-weather-icon.json')
        })
      },[])
  return (
      <div className='cont' > 
      
      <div className='im' ref={container}></div>
       </div>
    
  )
}

export default Preloader