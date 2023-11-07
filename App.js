import React from 'react';
import ReactDOM from 'react-dom/client'
import '/index.css'; 
import { Container,Box } from '@mui/material';
import Body from './src/resources/Components/Body';
import Details from './src/resources/Components/Details';


const App = () => {

  return (
    
  <Box style={{backgroundColor:"black"}}>

    <Container style={{backgroundColor:"whitesmoke"}}>
      <Body/>
      <Details/>
    </Container>
  </Box>
 
  )
}

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

