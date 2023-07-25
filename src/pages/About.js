import React from 'react'
import {Grid,Avatar,Typography,Button,Box,Paper} from "@mui/material";
import Logo from "../img/logo.png"
import env from "react-dotenv";
export default function About() {
  return (
    <section id="about" >


<Grid container spacing={2} sx={{marginTop:2}}>
    <Grid item xs={12} sm={12} md={4}>
    <Paper elevation={4} sx={{backgroundColor:"#222e35",padding:2}}>
    <Avatar src={Logo} sx={{minWidth:"300px",height:"auto",textAlign:"center",margin:"auto"}}></Avatar>
    </Paper>
       
    </Grid>
    <Grid item xs={12} sm={12} md={8}>
    <Paper elevation={4} sx={{backgroundColor:"#222e35",padding:5}}>
  
   <Typography variant='h4' sx={{color:"#fdc500"}}> About me</Typography>
                <Typography sx={{color:"white",textAlign:"justify"}}>
                I am Md Soliman.As a skilled and passionate full stack web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, combined with my proficiency in search engine optimization (SEO), I bring a comprehensive approach to creating exceptional web experiences. With a solid foundation in both front-end and back-end development, I have successfully delivered numerous projects, leveraging the power of modern web technologies
                </Typography>
                <Button variant="outlined" href="https://mdsoliman64.github.io/me/" sx={{color:"#fdc500",borderBlockColor:"#fdc500",marginTop:5}}> Lets talk with me</Button>
    </Paper>
       
    </Grid>
</Grid>



    </section>
  )
}
