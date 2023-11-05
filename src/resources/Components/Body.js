import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import packageicon from '/src/resources/icons/package.svg'
import star from '/src/resources/icons/star.svg'
import starfilled from '/src/resources/icons/star-filled.svg'
import discount from '/src/resources/icons/discount.svg'
//import addIcon from '/src/resources/icons/add.svg'
import { Button, Link, Toolbar, Typography } from '@mui/material';
import { right } from '@popperjs/core';
import jsondata from '/src/resources/data/data.json';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import { TextField } from '@mui/material';




// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Body = () => {
    const {title,supplier_name,supplier_link,price,stars,currency,transport_costs,vat_percent}= jsondata.article;
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >

        <Grid xs={1} sx={{display:"flex", alignItems:"start", justifyContent:"start" ,flexDirection:"column"}} >
            <Box  sx={{width:'100%' , maxWidth:70, height:70, border: "1px solid lightgray" , borderRadius:1, padding:1,marginTop:3, display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img src={packageicon}
              alt="Your Image" 
              style={{ maxWidth: '30px' }}/>
            </Box> 

             <Box  sx={{width:'100%' , maxWidth:70, height:70, border: "1px solid lightgray" , borderRadius:1, padding:1,marginTop:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
             <img src={packageicon}
              alt="Your Image" 
               style={{ maxWidth: '30px' }}/>
            </Box>  
        </Grid>

        <Grid xs={3} sx={{display:"flex", alignItems:"center", justifyContent:"start"}}>
             <Box  sx={{width:'100%' ,  maxWidth:270, height:270, border: "1px solid lightgray" , borderRadius:1, marginTop:3, display:"flex", alignItems:"center", justifyContent:"center"}}>
                 <img src={packageicon}
                  alt="Your Image" 
                    style={{ maxWidth:'80px', height: 'auto', float: 'right' ,padding:'6px' }}/>
            </Box>
        </Grid>


        <Grid xs={4} sx={{display:"flex", justifyContent:"start" ,flexDirection:"column"}}>
          
             <Box  sx={{width:"auto" , height:200, marginTop:3, display:"flex", alignItems:"Start", justifyContent:"center"}}>
        
                 <Typography variant="inherit" >
                        {title}
                        <br/>
                    by <a href={supplier_link} target="_blank" rel="noopener noreferrer">
                        {supplier_name}</a>
                        <br/>

                    {/* <img src={starfilled}
                        alt="Your Image" 
                        style={{ maxWidth:'20px', height: 'auto' ,padding:'4px',color:"red" }}/> 
                            <img src={starfilled}
                        alt="Your Image" 
                        style={{ maxWidth:'20px', height: 'auto' ,padding:'4px' }}/>
                            <img src={starfilled}
                        alt="Your Image" 
                        style={{ maxWidth:'20px', height: 'auto' ,padding:'4px' }}/>
                        <img src={star}
                        alt="Your Image" 
                        style={{ maxWidth:'20px', height: 'auto',padding:'4px' }}/> 
                            <img src={star}
                        alt="Your Image" 
                        style={{ maxWidth:'20px', height: 'auto',padding:'4px' }}/>   */}

                            <Stack spacing={1}>
                            {/* <Rating name="half-rating" defaultValue={stars} precision={0.5} /> */}
                            <Rating name="half-rating-read" defaultValue={stars} precision={0.5} readOnly />
                            </Stack>
                                <br/>
                            {price}  
                            {currency}  
                            {"+" + " " + transport_costs.toFixed()+ ".00"} 
                            {currency} Shipping 
                            <img src={discount}
                                alt="Your Image" 
                                style={{ maxWidth:'20px', height: 'auto',padding:'3px'}}/>

                            <br/>
                            all prices incl.{vat_percent} % taxes
                            <br/>
    
                    </Typography>
            </Box>
            
            <Box  sx={{width:"auto" , height:70, marginTop:1, display:"flex", alignItems:"end", justifyContent:"start",}}>

            <TextField id="time" type="text" sx={{ width:"8px",padding:"px", margin:"4px"}} />


            <Button size='small'
                    variant="contained" 
                    sx={{backgroundColor:"red" ,margin:"15px"}}   
                    startIcon={<AddIcon/>} >
                    Add Item
                    </Button>

                    </Box>

        </Grid>
       
      </Grid>
    </Box>

    </div>
  )
}

export default Body