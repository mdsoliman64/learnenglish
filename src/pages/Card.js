import React,{useState, useEffect} from "react";
import {Grid , Box, Paper, Button,Typography,Modal} from "@mui/material";
import "../pages/Card.css";
import Time from "../components/Time";
import RecordRTC from 'recordrtc';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InfoIcon from '@mui/icons-material/Info';
import FileDownloadIcon from '@mui/icons-material/FileDownload';




export default function Card(){
const [post,setPost]=useState([]);
const [random,setRandom]=useState(0);
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
/////////////////////// Api ////////////////////////////////////////

useEffect(()=>{
  const fecthPost = async ()=>{
      const res = await fetch(process.env.REACT_APP_API_KEY);
      const data = await res.json();
      setPost(data);
      console.log(process.env.KEY);
  
  }
  fecthPost();
  
  
  },[]);
/////////////////  Audio Recorder ////////////////////////////////////

const [recorder, setRecorder] = useState(null);
const [isRecording, setIsRecording] = useState(false);
const [audioUrl,setAudioUrl]= useState(null);

const startRecording = async () => {
  const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const newRecorder = RecordRTC(audioStream, { type: 'audio' , mimeType: 'audio/wav' });
  setRecorder(newRecorder);
  setIsRecording(true);
  newRecorder.startRecording();
};


const stopRecording = () => {
  if (recorder) {
    recorder.stopRecording(() => {
      setIsRecording(false);
      const blob = recorder.getBlob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url)
      // Do something with the recorded audio blob, e.g., save it or send it to the server.
    });
  }
};

const downloadRecording = () => {
  if (!audioUrl) {
    alert('No recording to download.');
    return;
  }

  const downloadLink = document.createElement('a');
  downloadLink.href = audioUrl;
 
  downloadLink.download = `${post[random]?.title+"_mdsoliman_.wav"}`;
  downloadLink.click();
};

//////////////Voice to text convert////////////////////////////////////////////////
const [isListening, setIsListening] = useState(false);
  const [capturedText, setCapturedText] = useState('');
  const recognition = new window.webkitSpeechRecognition();
  
 
  const startListening = () => {
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setCapturedText((prev)=>   transcript);
      
    };
  
   
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    recognition.continuous = false;
    recognition.interimResults = false;
    setIsListening(false);
    recognition.stop();
    setCapturedText((prev)=>{ return prev});
    
  };


////////////////////////////////////////////////////////



const [count,setCount]= useState(0);
const [isClick , setClick] =useState(false);
let intervalId;

function timerStart(){
  startRecording();
  startListening();
setClick(true);
 intervalId = setInterval(()=>{
setCount((prev)=>{
    return prev+=1;
})

},1000);




};
function stopTimer(){
  stopRecording();
  stopListening();
    setClick(false);
    clearInterval(intervalId);
    setCount(0);
    

}



function handleRandom(){
    const number = Math.random()*post.length;
    const number2 = Math.floor(number);
    setRandom(number2)

}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    minWidth:300,
    bgcolor: '#002b57',
    border: '2px solid #000',
    boxShadow: 24,
    color: "#fff",
    p: 4,
  };

return(
<section id= "cuecard">
<Grid container spacing={1}>
    <Grid item xs={12} sm={12}>
        <Paper elevation={4} sx={{backgroundColor:"#0f1924",maxWidth:"650px",padding:5,margin:"auto"}}>
       <Box> 
                 <Typography variant="h4" sx={{color:"#a6e22e"}}> {post[random]?.title} </Typography>
       </Box>
       <Box sx={{color:"#fc3165",fontWeight:"bold"}}>
                <ul>
                    <li> <Typography variant="subtitle1"> {post[random]?.clue.first}</Typography></li>
                    <li> <Typography variant="subtitle1"> {post[random]?.clue.second}</Typography></li>
                    <li> <Typography variant="subtitle1"> {post[random]?.clue.third}</Typography></li>
                    <li> <Typography variant="subtitle1"> {post[random]?.clue.fourth}</Typography></li>
                    <li> <Typography variant="subtitle1"> {post[random]?.clue.fifth}</Typography></li>
                    <li> <Typography variant="subtitle1"> {post[random]?.clue.sixth}</Typography></li>
                </ul>
       </Box>
       <Box>
        <Button variant="outlined" sx={{color:"#a6e22e","&:hover":{color:"#71c92c",borderColor:"#a6e22e"}}} onClick={timerStart} > <PlayCircleFilledIcon sx={{marginRight:1}}/> Start ({isClick ? count : 0})</Button>
        <Button variant="outlined" sx={{color:"#a6e22e","&:hover":{color:"#71c92c",borderColor:"#a6e22e"}}} onClick={stopTimer}  > <StopCircleIcon sx={{marginRight:1}}/> Stop  </Button>
        <Button variant="outlined" sx={{color:"#a6e22e","&:hover":{color:"#71c92c",borderColor:"#a6e22e"}}} >  <WatchLaterIcon sx={{marginRight:1}}/> <Time/></Button>
        <Button variant="outlined" sx={{color:"#a6e22e","&:hover":{color:"#71c92c",borderColor:"#a6e22e"}}} onClick={handleRandom} > <NoteAddIcon sx={{marginRight:1}}/> New Card</Button>
        <Button variant="outlined" sx={{color:"#a6e22e","&:hover":{color:"#71c92c",borderColor:"#a6e22e"}}}  onClick={handleOpen} > <InfoIcon sx={{marginRight:1}}/>  Instruction </Button>
       </Box>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Instruction
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
           
          <li>Click on start button to start recording</li>
          <li>Beside start button time will be counted</li>
          <li>In Audio player you can see "Download" button .Click on this button and download your audio</li>
          <li>Before starting new record please download your audio . Because we are not saving your data in our database</li>
          </ul>
          </Typography>
        </Box>
    </Modal>
        </Paper>
    </Grid>
</Grid>
<Grid container spacing={1} sx={{marginTop:5}}>
    <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={4} sx={{backgroundColor:"#0f1924",color:"#71c92c",padding:5}}>
            <Typography variant="h4">Audio Recorder</Typography>
       <audio id="audio" src={audioUrl} type="audio/wav" controls/><br/>
        <Button onClick={downloadRecording} variant="contained" sx={{backgroundColor:"#71c92c",color:"#0f1924",marginTop:3,"&:hover":{backgroundColor:"#0f1924",color:"#71c92c"}}}><FileDownloadIcon/>Download</Button>
      
        </Paper>
    </Grid>

    <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={4} sx={{backgroundColor:"#0f1924",color:"#71c92c",padding:5,minHeight:"200px"}}>
            <Typography variant="h4">Your audio Script</Typography>
            <Box>
              <Typography sx={{color:"#fc3165"}}>{capturedText}</Typography>
            </Box>
        </Paper>
    </Grid>
</Grid>
</section>



);



};