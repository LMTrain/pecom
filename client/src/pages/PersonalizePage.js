import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";

var themeChoosen = 2
class PersonalizePage extends Component {
  
  state = {   
    userThemes: ["theme1", "theme2", "theme3", "theme4", "theme5", "theme6"],
    redirect: false
         
  };

  loadSignInPage = () => {    
    this.setRedirect()
    // localStorage.clear();
    // console.log("cliasdk");
    // return(
    //     <Redirect to="/Signin/"/>
    // )
  }

  setRedirect = () => {    
    this.setState({
      redirect: true,
      createdAccount: 1
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {      
      return <Redirect to='/Signin' />
    }
  }
  




  
  choosenTheme = (id) => {
    themeChoosen = themeChoosen * 2
    console.log(themeChoosen)
    let themeArray = [...this.state.userThemes]
    console.log(themeArray, "COMPLETE")
    let reduceTheme = themeArray.filter(theme => {
      return theme.id === id;
     
    });
    this.setState({reduceTheme})
    console.log(reduceTheme, "INCOMPLETE")
    console.log(id, "ID")
  }

  render() {    
    return (
      <div>
        {this.renderRedirect()}
        <div id="welcomeMessage">Personalize Your Account</div>
        <Container style={{ marginTop: 60 }}>
          <div className="card card-body">
            <div className="choosetheme">Choose a Theme</div>
            <Row>
              <Col size="md-4">
                <div className="theme"  type="submit" id="theme1" onClick={(id) => this.choosenTheme(id)}>
                  <div className="img-container" >                   
                    <img alt="Theme 1" width="180" height="120" title="Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg' />                   
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container" id="theme2" onClick={(id) => this.choosenTheme(id)}>
                    <img alt="Theme 2" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container" id="theme3" onClick={(id) => this.choosenTheme(id)}>
                    <img alt="Theme 3" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg' />           
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container" id="theme4" onClick={(id) => this.choosenTheme(id)}>
                    <img alt="Theme 4" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container" id="theme5" onClick={(id) => this.choosenTheme(id)}>
                    <img alt="Theme 5" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf1.png' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme">
                  <div className="img-container" id="theme6" onClick={(id) => this.choosenTheme(id)}>
                    <img alt="Theme 6" width="180" height="120" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <div className="create-acc-btn"><button type="submit" onClick={() => this.loadSignInPage()} className="btn btn-primary float-left">Sign in</button></div><div className="create-acc-btn"><button type="submit" onClick={() => this.loadSignInPage()} className="btn btn-primary float-left">Add Your Picture</button> </div>
              </Col>
            </Row>
            
          </div>
        </Container>
      </div>
    );
  }
}

export default PersonalizePage;





