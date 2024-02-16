import React from 'react';
import {Paper,Box,Grid,Button} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import logo from "../img/logo.png"
import Typography from '@mui/material/Typography';


export default function About() {
  return (
    <Grid container spacing={1.2}>
    <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={4} sx={{backgroundColor:"#0f1924",padding:10}}>
            <Box> 
                <Avatar src={logo} sx={{minWidth:"300px",height:"auto"}}></Avatar>
            </Box>
           
        </Paper>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={4} sx={{backgroundColor:"#0f1924",padding:8.2}}>
           
            <Box sx={{marginLeft:5}}>
                <Typography variant='h4' sx={{color:"#fdc500"}}> About me</Typography>
                <Typography sx={{color:"white",textAlign:"justify"}}>
                I am Md Soliman.As a skilled and passionate full stack web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, combined with my proficiency in search engine optimization (SEO), I bring a comprehensive approach to creating exceptional web experiences. With a solid foundation in both front-end and back-end development, I have successfully delivered numerous projects, leveraging the power of modern web technologies
                </Typography>
                <Button variant="outlined" href="https://mdsoliman.netlify.app/" sx={{color:"#fdc500",borderBlockColor:"#fdc500",marginTop:5}}> Lets talk with me</Button>
            </Box>
        </Paper>
    </Grid>

    </Grid>
  )
}
