import React ,{useEffect, useState} from 'react';
import {Box, Grid, Typography,Paper,Button} from "@mui/material";
import "../pages/CueCard.css"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StopCircleIcon from '@mui/icons-material/StopCircle';

export default function CueCard(props) {

    const [post,setPost]=useState([]);
    const [random,setRandom]=useState(0);
    const [isClick,setClick]= useState(false);
    const [time,setTime]=useState(0);


    let timeInterval;


    const [info, setRecord] = useState({
        recordState: null,
        counter: 0
      });
      const [data, setData] = useState(null);
     



useEffect(()=>{
    const postFetch = async ()=>{
        const res = await fetch(process.env.REACT_APP_API_KEY);
        const data = await res.json();
        setPost(data);

    }
    postFetch();
  

},[]);




function randomPostHandle(){
    const number = Math.random()* post.length;
    const number2= Math.floor(number);
    setRandom(number2);

};

function start() {
    const record = RecordState.START;
    setClick(true); 
    
    setRecord((prev) => {
      return { ...prev, recordState: record };
      
    });
     timeInterval = setInterval(()=>{

        setTime((prev)=> {
            
           
            return prev+1});
          
        
        
            },1200);
            setTime(0);
  
  };

  function stop() {
    const Srecord = RecordState.STOP;
    setClick(false);
    setRecord(() => {
      return { recordState: Srecord };
    });
   clearInterval(timeInterval);
   setTime(0)
    
  };



  function onStop(audioData) {
    setData(audioData.url);
    console.log("audioData", audioData);
  
  }
  return (
    <div id="CueCard">

<Grid container spacing={2} >
    <Grid item xs={12}>
    <Paper elevation={4} sx={{backgroundColor:"#0f1924" ,color:"#a6e22e",maxWidth:"800px",margin:"auto",padding:10}}>
        <Typography variant='h4' component="h2">{post[random]?.title} </Typography>
        <ul>
            <li> <Typography variant="subtitle2" component="p" sx={{color:"#fc3165",fontSize:"1.2rem"}}>  {post[random]?.clue.first}</Typography></li>
            <li> <Typography variant="subtitle2" component="p" sx={{color:"#fc3165",fontSize:"1.2rem"}}>  {post[random]?.clue.second}</Typography></li>
            <li> <Typography variant="subtitle2" component="p" sx={{color:"#fc3165",fontSize:"1.2rem"}}>  {post[random]?.clue.third}</Typography></li>
            <li> <Typography variant="subtitle2" component="p" sx={{color:"#fc3165",fontSize:"1.2rem"}}>  {post[random]?.clue.fourth}</Typography></li>
            <li> <Typography variant="subtitle2" component="p" sx={{color:"#fc3165",fontSize:"1.2rem"}}>  {post[random]?.clue.fifth}</Typography></li>
            <li> <Typography variant="subtitle2" component="p" sx={{color:"#fc3165",fontSize:"1.2rem"}}>  {post[random]?.clue.sixth}</Typography></li>
        </ul>
        <Box>
        <Button onClick={randomPostHandle} variant="outlined" sx={{color:"#a6e22e",float:"right", '&:hover':{color:"#aaff00",borderBlockColor:"#aaff00"}}}>New Card</Button>
        <Button variant="outlined" onClick={start}       sx={{color:"#a6e22e",float:"right", '&:hover':{color:"#aaff00",borderBlockColor:"#aaff00"}}}><PlayCircleFilledWhiteIcon sx={{marginRight:2}}/> Start ({isClick? time : 0})</Button>
        <Button variant="outlined" onClick={stop}       sx={{color:"#a6e22e",float:"right", '&:hover':{color:"#aaff00",borderBlockColor:"#aaff00"}}}><StopCircleIcon sx={{marginRight:2}}/> Stop</Button>
        <Button variant="outlined"       sx={{color:"#a6e22e",float:"right", '&:hover':{color:"#aaff00",borderBlockColor:"#aaff00"}}}><WatchLaterIcon sx={{marginRight:2}}/> {props.time}</Button>
        </Box>
      
    </Paper>


   
    </Grid>
    <Grid item xs={12} sm={12} md={6} sx={{margin:"auto"}}>
    <Paper elevation={4}  sx={{backgroundColor:"#0f1924" ,color:"#a6e22e",maxWidth:"400px",margin:"auto",padding:7}}>
   <Typography variant='h4' sx={{marginBottom:3}}>Audio Player</Typography>
    <audio id="audio" controls src={data} ></audio>
    <Box sx={{marginTop:2}}>
        <AudioReactRecorder
          backgroundColor="#000"
          foregroundColor="#a6e22e"
          state={info.recordState}
          onStop={onStop}
          canvasHeight={50}
          canvasWidth={350}
        
        />
     
        </Box>
       
     
    </Paper>
    </Grid>
    <Grid item xs={12} sm={12} md={6} sx={{margin:"15 auto"}}>
    <Paper elevation={4} sx={{backgroundColor:"#0f1924",color:"#fff",padding:7}}>
    <Typography variant='h5' component="h1">Instruction</Typography>
    <ul>
        <li><Typography variant='subtitle1'>Click on start button to start recording</Typography> </li>
        <li><Typography variant='subtitle1'>Beside start button time will be counted</Typography> </li>
        <li><Typography variant='subtitle1'>In Audio player you can see : button .Click on this button and download your audio</Typography> </li>
        <li><Typography variant='subtitle1'>Before starting new record please download your audio . Because we are not saving your data in our database</Typography> </li>
    </ul>
    </Paper>
    </Grid>
</Grid>





    </div>
  )
}
