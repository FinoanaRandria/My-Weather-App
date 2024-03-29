import React ,{useState} from 'react'
import "../Assets/CSS/Card.css"
import logo from "../Assets/Img/rainDemarage.png"
import logo1 from "../Assets/Img/sun.png"
import logo2 from "../Assets/Img/skyscraper.png"
import logo3 from "../Assets/Img/wind-power.png"
import logo4 from "../Assets/Img/thermometer.png"
import logo5 from "../Assets/Img/dew.png"
function Card() {
    const [weather,setWeather]= useState({});
    const  [city,setCity]= useState({})
    const apikey = "39ef9f6f820eb1c31aad393df13b3f33"
     const getWeather = (e) =>{
      if (e.key === 'Enter'){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setCity('')
        })
      }
     }
  return (
     
    <>
      <div className='container'>
      <div className='glass' >
      <div className='containt-head' >
        <div>
          
          <h1 >Weather </h1>
        </div>
        <div>
        <img  src={logo} alt="Salut ty" width={70} />
        </div>
      </div>
    
  <div>
       
     <div className='containt-inp'>
          <div className='input-containt'>
            <input type="text"
           className='search'
           placeholder='Entrer ici le nom de la Ville'
           
            onChange = {(e) => setCity(e.target.value)}
           onKeyPress ={getWeather}
         />
          </div>
         

         {
          typeof weather.main != 'undefined'?
          (
            <div className='weather-container'>
              <div className='location'>
              <img src={logo2} alt="sun" width={30}/> {weather.name}, {weather.sys.country}
              </div>
              <div className='temp'>
              <img src={logo4} alt="sun" width={30}/> {Math.round(weather.main.temp)}°C
              </div>
              <div className='weather'>
              <img src={logo1} alt="sun" width={30}/>  {weather.weather[0].main}
              </div>
              <div className='wind'>
              <img src={logo3} alt="sun" width={30}/>  {weather.wind.speed} m/s
              </div>
              <div className='humid' >
                 <img src={logo5} alt="humid" width={30}/> {weather.main.humidity} g/m3
              </div>

              
            </div>
          ) 
          :
          (

            <div className='weather-container'>
              <h1 className='wel'>Bienvenu Sur Weather-App</h1>
            </div>
          )
         }
     </div>
  </div>
        <p>@Create and designed by Finoana_Randria </p>
  </div>
      </div>
    </>
    
  )
}

export default Card