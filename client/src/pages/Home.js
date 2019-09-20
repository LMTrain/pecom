import React from "react";
import Homeimage from "../components/Homeimage";
import Container from "../components/Container";
import "./style.css";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
  return (
    <Container style={{ marginTop: -25 }}>
      <div>
        <Homeimage backgroundImage="https://lmtrain.github.io/lm-images/assets/images/bugatti_3.jpg">

          <h1>eCommerce StoreFront</h1>
        </Homeimage>        
      </div>
      <div>
        
      </div>
    </Container>
  );
}

export default Home;
