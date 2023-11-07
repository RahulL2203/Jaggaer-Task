import React, { useState } from 'react'
import packageicon from '/src/resources/icons/package.svg'
// import star from '/src/resources/icons/star.svg'
// import starfilled from '/src/resources/icons/star-filled.svg'
import discount from '/src/resources/icons/discount.svg'
import zoomin from '/src/resources/icons/zoom-in.svg'
//import addIcon from '/src/resources/icons/add.svg'
import {Box, Badge, Button, Link, Typography ,Grid,Rating,Stack,TextField} from '@mui/material';
import jsondata from '/src/resources/data/data.json';
import SvgIcon from '@mui/material/SvgIcon';
import AddIcon from '@mui/icons-material/Add';
import Header from './Header';

const Body = () => {

  const [productCount,setProductCount] = useState(null);
  const [cartCount,setCartCount] = useState(null)

  const handleFieldChange = (e)=>{
    if(productCount!==null){
      setProductCount((e)=>e.target.value)
    }
  }

  const handleAddButton = (cartCount)=>{
      setCartCount(cartCount+1);
  
  }
  
  const {title,
         supplier_name,
         supplier_link,
         price,
         stars,
         currency,
         transport_costs,
         vat_percent,
         unit}= jsondata.article;
  return (
    <Box>
        <Header cartCount={cartCount}/>
          <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2} >
      
             <Grid item  md={2} xs={12} sm={2}  sx={{display:"flex", alignItems:"start", justifyContent:"start" ,flexDirection:"column", }} >
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

        
             <Grid item md={3} xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
               <Box sx={{ width: '100%', maxWidth: 270, height: 270, border: "1px solid lightgray", borderRadius: 1, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <img src={packageicon} alt="Your Image" style={{ maxWidth: '80px', height: 'auto' }} />
                   <img src={zoomin} alt="Zoom In" style={{ position: 'absolute', bottom: 0, right: 0, maxWidth: '20px', padding: '6px' }} />
               </Box>
             </Grid>




              <Grid item sm={'auto'}  xs={12} sx={{display:"flex", justifyContent:"start" ,flexDirection:"column"}}>
          
                 <Box  sx={{width:"auto" , height:{xs:'auto',md:200}, marginTop:3,marginLeft:2, display:"flex", alignItems:"Start", justifyContent:"center"}}>
        
                  <Typography variant="inherit" >
                    <span>{title}</span>
                    <span><br/>by <Link href={supplier_link} target="_blank" rel="noopener noreferrer">
                        {supplier_name}</Link></span> 
                      

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

                      <Stack spacing={1} sx={{my:2}}>
                          {/* <Rating name="half-rating" defaultValue={stars} precision={0.5} /> */}
                          <Rating name="half-rating-read" defaultValue={stars} precision={0.5} readOnly />
                        </Stack>
                            <br/>
                            <Box style={{ display: 'flex',flexWrap:{xs:'wrap',md:'nowrap'} ,alignItems: 'center' }}>
                              <span>{price} </span>
                              <span>{currency} </span>{"+" + " " + transport_costs.toFixed() + ".00"}
                              {currency} Shipping 
                              <img src={discount} alt="discount-icon" 
                              style={{ maxWidth: '20px', height: 'auto', padding: '3px' }} />
                           
                            </Box>
                            <br />
                                <span>all prices incl.{vat_percent} % taxes</span>
    
                  </Typography>
                 </Box>
            
                 <Box  
                    sx={{width:"auto" , height:70, marginTop:1,marginLeft:2, display:"flex", alignItems:"center", justifyContent:"start",}}>

                    <TextField 
                      label="Product Count"
                      variant="outlined"
                      value={productCount}
                      onChange={handleFieldChange}
                      >{productCount}</TextField>
                      <span style={{margin:"5px"}}>{unit}</span>

                    <Button size='small'
                        variant="contained" 
                        sx={{backgroundColor:"red" ,margin:"2px"}}   
                        startIcon={<AddIcon/>}
                        onClick={()=> handleAddButton(cartCount)}
                        >
                    Add Item
                    </Button>
                    
                  </Box>

              </Grid>
       
             </Grid>
          </Box>

    </Box>
  )
}

export default Body