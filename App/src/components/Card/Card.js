import React ,{useState} from 'react'
import "../Assets/CSS/Card.css"
import logo from "../Assets/Img/rainDemarage.png"
function Card() {
    const [weather,setWeather]= useState({});
    const  [city,setCity]= useState({})
    const apikey = "39ef9f6f820eb1c31aad393df13b3f33"
     const getWeather = (e) =>{
      if (e.key == 'Enter'){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setCity('')
        })
      }
     }
  return (
    <div className='glass' >
    
      <h1 className='head'>Salut ty <img className='logo' src={logo} alt="Salut ty" /></h1>
    <div>
         
       <div>
           <input type="text"
             className='search'
             placeholder='Entrer ici le nom de la Ville'
             value={city}
             onChange = {(e) => setCity(e.target.value)}
             onKeyPress ={getWeather}
           />
       </div>
    </div>
    </div>
    
  )
}

export default Card