import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";

// import { conditionalExpression } from "@babel/types";
// import API from "../utils/API";
// import personalize from "../components/Personalize";
// import { Redirect } from "react-router-dom";
// import { List, ListItem } from "../components/List";
// import Container from "../components/Container";
// import UserSignin from "../components/UserSignin";
// import UserPage from "../components/UserPage";
// import { List, ListItem } from "../components/List";
// import "./style.css";
// import API from "../utils/API";


var x = 0
class Signin extends Component {
  state = {
    user: {},
   
  };
  
  accountCreated = () => {
    if (x >= 1) {
      console.log(x)   
      return;
    }else{console.log(x)}
  }


  

  render() {
    
    return (
      <div>
        <div id="welcomeMessage">Personalize Your Account</div>
        <Container style={{ marginTop: 80 }}>
          <div className="card card-body">
            <div className="choosetheme">Choose a Theme</div>
            <Row>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container">
                  <img alt="Theme 1" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container">
                    <img alt="Theme 2" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container">
                    <img alt="Theme 3" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg' />           
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container">
                    <img alt="Theme 4" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container">
                    <img alt="Theme 5" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf1.png' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container">
                    <img alt="Theme 6" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <span className="create-acc-btn"><button id="button" type="submit" onClick={this.accountCreated()} className="btn btn-primary float-left">Sign in</button></span><span className="create-acc-btn"><button type="submit" onClick={this.accountCreated()} className="btn btn-primary float-left">Add Your Picture</button></span> 
              </Col>
            </Row>
            
          </div>
        </Container>
      </div>
    );
  }
}

export default Signin;





