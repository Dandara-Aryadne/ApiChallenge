import React, {useState} from "react"
import axios from "axios"
import styled, { createGlobalStyle } from "styled-components"
import DarkMode from "./Components/DarkMode.js"
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import { Paper } from "@material-ui/core"
import { dark } from "@material-ui/core/styles/createPalette.js"
import color from "./IMG/color.jpg"

const GlobaStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Div = styled.div`
  position: absolute;
  display: flex;
  width: 30%;
  align-items: center;
  height: 30vh;
  justify-content: center;
  margin-bottom: 20%;
  left: 32vw;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 50%;
    height: 20vh;
    left: 27.3vw;
    bottom: 70%;
  }
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 9vh;
  left: 20vw;
  top: 42vh;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 70%;
    height: 10vh;
    left: 34vw;
    top: 29vh;
  }
`;
const Button = styled.button`
  position: absolute;
  width: 80%;
  height: 70%;
  border-radius: 30px 30px 30px;
  background-color: rgb(88, 152, 200);
  color: white;
  border: none;
  box-shadow: 2px 4px 2px #95ecf3;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    position: absolute;
    width: 80%;
    height: 90%;
  }
`;

const Section = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 55vh;
  right: 10vw;
  top: 11vh;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    margin-bottom: 25vh;
    margin-right: 40vw;
    justify-content: center;
  }
`;

const Img = styled.img`
  display: flex;
  position: absolute;
  top: 2vh;
  left: 5%;
  width: 90%;
  height: 50vh;
  object-fit: fill;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    box-shadow: 1px 0px 2px 5px #daf7a6;
    border-radius: 35px 35px 35px 35px;
    height: 35vh;
    width: 60vw;
    left: -4vw;
  }
`;
const H1 = styled.h1`
  color: #23accb;
  font-size: 10vw;
  font-family: "Rubik Moonrocks", cursive;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export default function App() {
  const [doguinho, setDoguinho] = useState(false, []);
  const [darkMode, setDarkMode] = useState(false);
  const [modal, SetModal] = useState(false);

function Card(){
   axios.get('https://dog.ceo/api/breeds/image/random').then((responseDog)=>{
     console.log(responseDog.data.message)
     setDoguinho(responseDog.data.message)
   })
}

const theme=createTheme({
  palette:{
    type: darkMode? 'dark' : "light"
  }
})


  return(
    <ThemeProvider theme={theme}>
      <Paper>
    <Container>
      <GlobaStyle/>
    <Div>
     <H1>API</H1>
     <DarkMode check={darkMode} change={()=> setDarkMode(!darkMode)}/>
    </Div>
    <Nav>
    <Button onClick={()=>{Card()}}>FIND A DOG</Button>
    </Nav>
    <Section>
    <Img src={doguinho}/>
    </Section>
    </Container>
    </Paper>
    </ThemeProvider>
  )
}
