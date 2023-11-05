import React from 'react';
import ReactDOM from 'react-dom/client'
import jsondata from './src/resources/data/data.json'
import Button  from '@mui/material/Button';
import { Container } from '@mui/material';
import Header from '/src/resources/Components/Header';
import Body from './src/resources/Components/Body';
import Details from './src/resources/Components/Details';





const App = () => {
  // const {id,title,price,price_breaks,keywords} = jsondata.article;
  // const {favorite_articles} = jsondata.user;
  return (
  <div style={{backgroundColor:"black"}}>
    <Container style={{backgroundColor:"white"}}>
      <Header/>
      <Body/>
      <Details/>
    {/* <div className='app'>
        <h1>Hello Jaggaer ......</h1>
        <Button variant="contained" size='large'>Click</Button>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <h1>{price}</h1>
        <h1>{price_breaks[20]}</h1>
        <h1>{keywords[1]}</h1>
        <h1>{favorite_articles[0]}</h1>
    </div> */}
   </Container>
  </div> 
  )
}

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

