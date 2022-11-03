
import './App.css';
import Card from './components/Card/Card';
import React,{useState,useEffect} from 'react';
import Preloader from "./components/Preloader/Preloader"
function App() {
   const [loader,setLoader] = useState(true)
    useEffect(()=>{
       setTimeout(()=>{
         setLoader(false)
       },3000)
    },[])
  return loader ?(
    
       <Preloader/>
    
  ) : (
     <div>
       <Card/>
     </div>
  )
}

export default App;
