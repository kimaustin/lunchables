// import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Title>
        The Lunchables Experience
      </Title>
      <ImgContainer>
        <img src={"L4.jpeg"}/>
      </ImgContainer>
      <Details>
        Thompson Sq. Park <br />
        June 11 <br />
        4-7PM
      </Details>
      <Form>
        <p />
        <a href={"https://google.com"} target={"none"}>RSVP Here</a>
      </Form>
      <Credits>
        LJA LLC ©️ <br />
        powered by nektinemedia
      </Credits>
    </Container>
  );
}


// STYLED COMPONENTS
const Container = styled.div`
  padding-left: 2%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    padding-left: 5%;
  }
`

const Title = styled.p`
  margin-top: 1.5%;
  margin-bottom: 0px;
  width: 80%;

  font-size: 130px;
  line-height: 100%;
  /* border: 1px solid green; */

  @media screen and (max-width: 767px) {
    margin-top: 16px;
    font-size: 50px;
  }
`

const Details = styled.p`
  font-size: 14px;
  color: black;
  opacity: 0.5;
  line-height: 150%;
  /* border: 1px solid green; */
  padding-bottom: 8%;

  @media screen and (max-width: 767px) {    
    padding-bottom: 10%;
  }
`

const ImgContainer = styled.div`
  /* height: 80vh; */
  width: 95vw;
  margin-top: 3%;
  margin-bottom: 1.5%;

  img {
    text-align: left;
    object-fit: cover;
    max-height: 80vh;
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 90vw;
    margin-top: 5.5%;
    margin-bottom: 2.5%;
  }
`

const Form = styled.div`
  z-index: 999;
  position: fixed;
  right: 2%;
  bottom: 2vw;
  font-size: 19px;
  font-weight: 600;
  color: blue;

  @media screen and (max-width: 767px) {
    right: 5%;
    bottom: 5vw;
  }
`

const Credits = styled.div`
  font-size: 14px;
  color: black;
  opacity: 0.5;
  line-height: 150%;
  /* border: 1px solid green; */
  padding-bottom: 2%;

  @media screen and (max-width: 767px) {
    padding-bottom: 5%;
  }
`

export default App;
