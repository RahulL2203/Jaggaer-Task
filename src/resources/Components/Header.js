import { Divider, Grid, Typography } from '@mui/material'
import styled from '@mui/system/styled';
import React from 'react'
import jsondata from '/src/resources/data/data.json';
import favorite from '/src/resources/icons/favorite.svg'
import factssoft from '/src/resources/icons/facts-soft.svg'
import factssoft from '/src/resources/icons/facts-soft.svg'
import cart from '/src/resources/icons/cart.svg'



const Header = () => {
    const {title} = jsondata.article;
  return (
    <>
<Grid container>
      <Grid item xs={6}>
        <Typography variant="h6" style={{color:'red'}}>{title}</Typography>
       
      </Grid>
      <Grid item xs={6}>
      <img
          src={cart} // Replace with the actual path to your image
          alt="Your Image"
          style={{ maxWidth: '5%', height: 'auto', float: 'right',borderLeft:'1px solid gray',padding:'5px' }}
        />
      <img
          src={factssoft} // Replace with the actual path to your image
          alt="Your Image"
          style={{ maxWidth: '5%', height: 'auto', float: 'right' ,padding:'5px' }}
        />
        <img
          src={favorite} // Replace with the actual path to your image
          alt="Your Image"
          style={{ maxWidth: '5%', height: 'auto', float: 'right',padding:'5px'  }}
        />
        
      </Grid>
    </Grid>
  
      
    <Divider></Divider>




    </>
  )
}

export default Header