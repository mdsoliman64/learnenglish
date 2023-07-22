
import './App.css';
import {React,useState} from "react"
import CueCard from "./pages/CueCard";
import Footer from "./component/Footer"
import About from "./pages/About"
import VoiceToText from './pages/VoiceToText';


function App() {
  let [time,setTime]=useState(0);
function timer(){
    setInterval(()=>{
        const date = new Date();
        
        setTime(date.getHours() +":"+date.getMinutes()+":"+date.getSeconds());
},1100);
}
timer();



  return (
    <div className="App">
      <CueCard time={time}/>
      <VoiceToText />
      <About/>
      <Footer time={time}/>
     
    </div>
  );
}

export default App;
