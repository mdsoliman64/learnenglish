import React from 'react';
import {Typography} from "@mui/material";

export default function Footer(props) {

    const date = new Date();
    const year = date.getFullYear();




  return (
    <div  style={{color:"#a6e22e",margin:"auto",textAlign:"center"}}>  <Typography variant='h5' component="body">Md Soliman  {year} - {props.time}</Typography></div>
  )
}
