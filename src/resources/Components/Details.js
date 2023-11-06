import { Box, Chip, Container, Divider, Paper, Stack, Typography } from '@mui/material'

import React from 'react'
import jsondata from '/src/resources/data/data.json';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { color } from '@mui/system';
import attachmenticon from '/src/resources/icons/attachment.svg'

const Item = styled(Paper)(({ theme }) => ({
    width: "100%",

    padding: theme.spacing(1),
    ...theme.typography.body2,
    textAlign: 'left',
  }));
const Details = () => {
    const {description_long,
           title,
           attachments,
           file_link,
           keywords,
           minimum_order_quantity,
           delivery_time,
           transport_costs,
           currency,
           unit,
           supplier_name} = jsondata.article;
   
  return (
           <Box 
             sx={{
             backgroundColor: 'lightgray', 
             width: '100%',
             my:1}} >
        
             <Grid container rowSpacing={1} columnSpacing={3}>
               <Grid item xs={9}>
                  <Typography sx={{color:'red',marginLeft:2}} variant='subtitle2' gutterBottom>DESCRIPTION</Typography>
                  <Typography sx={{marginLeft:3}} variant='inherit'>{description_long}</Typography>
               </Grid>
    
              <Grid item xs={4} sx={{marginLeft:'25px'}}>
                 <Item sx={{height:350}}>
                 <Typography sx={{color:'red',marginLeft:2}} variant='subtitle2'>Details</Typography>
                <Divider/>
                <Typography variant='inherit' sx={{marginTop:3,color:'gray',marginLeft:2}} >Features</Typography>

                 <ul>
                  <li>Feature XYZ:{title}</li>
                  <li>Feature ABC:{supplier_name}</li>
                </ul>
                <Typography variant='inherit' sx={{marginTop:3,color:'gray',marginLeft:2}} >Attachments</Typography>
           
          
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <img src={attachmenticon} alt="Your Image" style={{ maxWidth: '15px', padding: '3px' }} />
                  <a href={file_link} target="_blank" rel="noopener noreferrer">
                    {attachments[0].file_label}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <img src={attachmenticon} alt="Your Image" style={{ maxWidth: '15px', padding: '3px' }} />
                  <a href={file_link} target="_blank" rel="noopener noreferrer">
                    {attachments[1].file_label}
                  </a>
                </div>
              </div>


        
              <Typography variant='inherit' sx={{marginTop:3,color:'gray',marginLeft:2}} gutterBottom >Keywords</Typography>
                 <Stack direction="row" spacing={1}>
                   {keywords.map((word)=> <Chip label={word} />)}
          
                 </Stack>
            
                </Item>
             </Grid>

        <Grid item xs={4}>
          <Item sx={{height:350}}>
          <Typography sx={{color:'red',marginLeft:2}} variant='subtitle2' gutterBottom>Pricing and Shipping</Typography>
        
            <Divider/>
            <ul>
                <li>
                  Minimum Order:{minimum_order_quantity}</li>
                <li>Shipping:{transport_costs}   {currency}</li>
                <li>Delivery Time:{delivery_time}</li>
            </ul>
            <br/>
    
          

            <Typography variant='inherit' sx={{marginTop:3,color:'gray',marginLeft:2}} gutterBottom >Price breaks</Typography>
            <Divider className="half-divider"/>
            <Typography variant='inherit' sx={{marginLeft:2,marginTop:1}} gutterBottom >ex 20 {currency}    8.99{currency}/{unit}</Typography>
            <Divider className="half-divider"/>
            <Typography variant='inherit' sx={{marginLeft:2,marginTop:1}} gutterBottom >ex 50 {currency}    8.79{currency}/{unit}</Typography>
            <Divider className="half-divider"/>
            <Typography variant='inherit' sx={{marginLeft:2,marginTop:1}} gutterBottom >ex 100 {currency}    7.99{currency}/{unit}</Typography>
            <Divider className="half-divider"/>
        
          </Item>
        </Grid>
      </Grid>  
  </Box>
  )
}

export default Details;