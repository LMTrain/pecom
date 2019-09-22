import React from "react";
import Homeimage from "../components/Homeimage";
import Container from "../components/Container";
import "./style.css";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home(props) {
  return (
    <Container style={{ marginTop: -25 }}>
      <div>
        <Homeimage backgroundImage={props.getTheme()}>

          <h1>eCommerce StoreFront</h1>
        </Homeimage>        
      </div>
      <div>
        
      </div>
    </Container>
  );
}

export default Home;
