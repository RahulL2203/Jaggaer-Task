import React from 'react'
import { Divider, Grid, Typography,Badge, ImageList,Stack } from '@mui/material'
import jsondata from '/src/resources/data/data.json';
import favorite from '/src/resources/icons/favorite.svg'
import factssoft from '/src/resources/icons/facts-soft.svg'
import factssoft from '/src/resources/icons/facts-soft.svg'
import cart from '/src/resources/icons/cart.svg'

const Header = (props) => {
    const {title} = jsondata.article;
  //sm={} md={} lg={} xl={}
  return (
      <>
   
        <Grid container >

          <Grid item xs={12} sm={6}  >
             
             <Typography variant="h6" style={{color:'red'}}>{title}</Typography>
       
          </Grid>
          
          <Grid item xs={12} sm={6} sx={{display:'flex',flexWrap:'nowrap', justifyContent:'flex-end',}}>
{/*        
              <Badge 
                // badgeContent={5} 
                badgeContent={props.cartCount} 
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                style={{float:'right'}}
                color='primary'
                /> */}
             


             <Stack sx={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }}>
                <ImageList sx={{ display: 'flex', gap: '2px' }}>
  
                    <img style={{height:17,width:20,px:2}}
                      src={favorite} 
                      alt="fav-icon"
                    />
                    <img style={{height:17,width:20,px:2}}
                      src={factssoft} 
                      alt="factssoft-icon"
                    />
                    <img style={{height:17,width:20,borderLeft:'gray 1px solid',px:2}}
                      src={cart} 
                      alt="cartImage"
                    />
    
                  </ImageList>
                </Stack>
           </Grid>
      </Grid> 
    <Divider/>
  </>
  )
}

export default Header