import React from 'react';
import {Grid,Typography,Paper} from "@mui/material";

export default function Footer() {

const date = new Date().getFullYear();
  return (
    <section id="footer">
        <Grid container spacing={1}>
            <Grid item xs={12}>
            <Paper elevation={4} sx={{backgroundColor:"#0f1924",padding:3,marginTop:5}}>
            <Typography variant='h6' component="h2" sx={{color:"#a6e22e",textAlign:"center"}}>
                    All Right reserve for Md Soliman - {date}
                </Typography>

            </Paper>
             
            </Grid>
        </Grid>
    </section>
  )
}
