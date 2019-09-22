import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";

var dbTheme = ""
// var memberId = ""
class PersonalizePage extends Component {
  
  state = {   
    userThemes: ["theme0","theme1", "theme2", "theme3", "theme4", "theme5", "theme6"],
    redirect: false,
    dbTheme: "",
    reduceTheme:-1,
  };

  saveThemeToDb = () => {
    console.log(dbTheme, 'FROM SWICTH')
  }


  // addPicture = () => {
  // } // pending further decision

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
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      this.props.updateDB()     
      return <Redirect to='/Signin' />
    }
  }

  
  choosenTheme = (id) => {    
    // console.log(id)    
    // let themeArray = [...this.state.userThemes]
    // console.log(themeArray, "COMPLETE")
    // let reduceTheme = [id]
     
    this.props.setTheme(id)
    // console.log(reduceTheme, "INCOMPLETE")
    // console.log(id, "ID")

    // switch (reduceTheme[0]) {
    //   case "theme1":   
    //   dbTheme = reduceTheme[0]
    //   this.saveThemeToDb()
       
    // break;
    //   case "theme2":   
    //   dbTheme = reduceTheme[0]
    //   this.saveThemeToDb() 
    // break;
    //   case "theme3":   
    //   dbTheme = reduceTheme[0]
    //   this.saveThemeToDb() 
    // break;
    //   case "theme4":   
    //   dbTheme = reduceTheme[0]
    //   this.saveThemeToDb() 
    // break;
    //   case "theme5":   
    //   dbTheme = reduceTheme[0]
    //   this.saveThemeToDb() 
    // break;
    // case "theme6":   
    //   dbTheme = reduceTheme[0]
    //   this.saveThemeToDb()
    // break;
    // default:
    //   dbTheme = "theme0"
    //   this.saveThemeToDb() 
    // break;
    // }
  }

  render() {
    
    return (
      <div>
        {this.renderRedirect()}
        <div id="welcomeMessage">Personalize Your Account</div>
        <Container style={{ marginTop: 60 }}>
          <div className="card card-body">
            <div className="choosetheme">Choose a Theme</div>
            <div id="memberinfo"></div>
            <div>{this.props.currentUser}</div>
            <div id="message"></div>
            <Row>
              <Col size="md-4">
                <div className="theme"  type="submit" id="theme1" onClick={() => this.choosenTheme(this.state.userThemes[1])}>
                  <div className="img-container">                   
                    <img alt="Theme 1" width="180" height="120" title="Mountain Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg' />                   
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme" type="submit" id="theme2" onClick={() => this.choosenTheme(this.state.userThemes[2])}>
                  <div className="img-container">
                    <img alt="Theme 2" width="180" height="120" title="Rocky Landscape Daylight" src='https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme" type="submit" id="theme3" onClick={() => this.choosenTheme(this.state.userThemes[3])}>
                  <div className="img-container">
                    <img alt="Theme 3" width="180" height="120" title="Desert Landscape Tree" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg' />           
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
                <div className="theme" type="submit" id="theme4" onClick={() => this.choosenTheme(this.state.userThemes[4])}>
                  <div className="img-container">
                    <img alt="Theme 4" width="180" height="120" title="Landscape Field Skyfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme" type="submit" id="theme5" onClick={() => this.choosenTheme(this.state.userThemes[5])}>
                  <div className="img-container">
                    <img alt="Theme 5" width="180" height="120" title="Iceland Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf1.png' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-4">
                <div className="theme" type="submit" id="theme6" onClick={() => this.choosenTheme(this.state.userThemes[6])}>
                  <div className="img-container">
                    <img alt="Theme 6" width="180" height="120" title="Rocky Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <div className="create-acc-btn"><button type="submit" onClick={() => this.loadSignInPage()} className="btn btn-primary float-left">Sign in</button></div>
                {/* <div className="create-acc-btn"><button type="submit" onClick={() => this.addPicture()} className="btn btn-primary float-left">Add Your Picture</button> </div> */}
                <div className="create-acc-btn"><button title="Rock Light Waterfall" type="submit" id="theme0" onClick={() => this.choosenTheme(this.state.userThemes[0])} className="btn btn-primary float-left">Default Theme</button> </div>
              </Col>
            </Row>
            
          </div>
        </Container>
      </div>
    );
  }
}

export default PersonalizePage;





