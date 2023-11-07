import React from 'react'
import { Divider, Grid, Typography,Badge, ImageList,Stack } from '@mui/material'
import jsondata from '/src/resources/data/data.json';
import favorite from '/src/resources/icons/favorite.svg'
import factssoft from '/src/resources/icons/facts-soft.svg'
import factssoft from '/src/resources/icons/facts-soft.svg'
import cart from '/src/resources/icons/cart.svg'
import { Box } from '@mui/system';

const Header = ({cartCount}) => {
 console.log(cartCount)
    const {title} = jsondata.article;
 
  return (
      <Box >
   
        <Grid container  >

          <Grid item xs={12} sm={6} lg={6} sx={{display:'flex',flexWrap:
          {sm:'nowrap',
           xs:'wrap'}}}  >
             
             <Typography xs={variant="subtitle1"} sm={variant="h2"} style={{color:'red'}}>{title}</Typography>
       
          </Grid>
          
          <Grid item xs={12}  sm={6} lg={6}
          sx={{display:'flex',flexWrap:
          {sm:'nowrap',
           xs:'wrap'}, 
           justifyContent:{
            xs:'center',
          
            sm:'end'}}}>

             <Stack sx={{ display: 'flex', justifyContent: {xs:'center',sm:'end'}, alignItems: 'center',}}>
                <ImageList sx={{ display: 'flex', gap: '2px' }}>
  
                    <img style={{height:17,width:20,px:2}}
                      src={favorite} 
                      alt="fav-icon"
                    />
                  
                    <img style={{height:17,width:20,px:2}}
                      src={factssoft} 
                      alt="factssoft-icon"
                    />
                   
                    <img style={{height:17,width:33,borderLeft:'gray 1px solid',px:2}}
                      src={cart} 
                      alt="cartImage"
                    />
                    <Badge
                          badgeContent={cartCount}
                          color="error"
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        ></Badge>
                     <Typography variant='inherit' sx={{color:'gray',marginLeft:2}} gutterBottom >{cartCount}</Typography>

                  </ImageList>
                </Stack>
           </Grid>
      </Grid> 
    <Divider/>
  </Box>
  )
}

export default Header