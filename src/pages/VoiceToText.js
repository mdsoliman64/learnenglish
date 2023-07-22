import React, { useState } from 'react';
import {Grid,Box, Button,Paper,Typography} from "@mui/material";

const VoiceToText = () => {
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    // Check if the browser supports the Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser. Please try a different browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      console.log('Speech recognition started.');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended.');
    };

    // Start speech recognition
    recognition.start();
  };

  return (
    <div>
<Grid container spacing={0} sx={{marginBottom:3,marginTop:5}}>
<Grid item xs={12}>
<Paper elevation={4} sx={{backgroundColor:"#0f1924",display:"flex",minHeight:"100px",textAlign:"center",alignItems:"center",justifyContent:"center",padding:5}}>
<Box>
<Button onClick={startListening} variant="contained">Listening </Button>
    
    </Box>
    <Box sx={{backgroundColor:"#000",borderRadius:"25px",color:"white",padding:10,width:"100%"}}>
    <Typography variant='subtitle2'>  {transcript}</Typography>
   
    </Box>
</Paper>
   
</Grid>

</Grid>


     
    
    </div>
  );
};

export default VoiceToText;
