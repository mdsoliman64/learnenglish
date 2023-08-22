import React from 'react'
import {Paper,Typography,Box,Button} from "@mui/material"
import { useState } from 'react';

export default function Input() {
  const [note, setNote] = useState([]);  
  const [inputText , setInputText] =  useState("")
  function changeHandle(event){
const value = event.target.value;
setInputText(value);

  }
  function postHandle(event){
       

setNote(prev =>[...prev, inputText]);
setInputText("")


  }
  function deleteHandle(){
setNote([]);

  }
  return (
    <div>
         <Paper elevation={4} sx={{backgroundColor:"#0f1924",width:"90%",padding:2,margin:"auto"}}>
                <Typography variant='h5' component="h1" sx={{color:"#71c92c"}}>
                    Note taking
                </Typography>
                <Box>
                    <input 
                    type="text" value={inputText} 
                   onChange={changeHandle}
                     placeholder='enter your note'
                        style={{
                            width:"80%",padding:4,
                            backgroundColor:"transparent",
                            outline:"none",border:"none",
                            fontSize:"1.2rem",
                            color:"#fc3165",
                            borderBottom:"1px solid #71c92c"
                            }}

                    />
                </Box>
                <Box sx={{marginTop:2}}>
                    <Button onClick={postHandle} variant='outlined' sx={{color:" #71c92c","&:hover":{color:"#71c92c",borderColor:"#a6e22e"}}}>Add Note</Button>
                </Box>
         </Paper>
         <Paper elevation={4} sx={{backgroundColor:"#0f1924",width:"90%",padding:2,margin:"auto"}}>
                          <Box sx={{height:"170px",overflowX:"hidden",overflowY:"auto"}}>
                          <ol>
                          <Typography sx={{color:"#fff"}}> {note.map((item,index)=>{
                                return(
                                    
                                            <li key={index}> {item} </li>
                                       

                                )
                                        



                            })} </Typography>
                            </ol>
                          </Box>
                           
                            
                          <Box sx={{marginTop:2}}>
                            <Button onClick={deleteHandle} variant='outlined' sx={{color:" #71c92c","&:hover":{color:"#71c92c",borderColor:"#a6e22e"}}}> Delete Notes</Button>
                            </Box>            
         </Paper>
        
    </div>
  )
}
