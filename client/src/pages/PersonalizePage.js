import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";

var dbTheme = ""
var mID = ""
class PersonalizePage extends Component {
  
  state = {   
    userThemes: ["theme0","theme1", "theme2", "theme3", "theme4", "theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12", "theme13", "theme14", "theme15", "theme16"],
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
      this.props.updateDBtheme(mID)     
      return <Redirect to='/Signin' />
    }
  }

  
  choosenTheme = (id) => {
    mID = this.props.currentUser 
    // console.log("mID is : ", mID)    
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
          {/* <div className="theme-card-body"> */}
            <div className="choosetheme">Choose a Theme</div>
            <div id="memberinfo"></div>
            {/* <div>{this.props.currentUser}</div> */}
            <div id="message"></div>
            <Row>
              <Col size="md-3">
                <div className="theme"  type="submit" id="theme1" onClick={() => this.choosenTheme(this.state.userThemes[1])}>
                  <div className="img-container">                   
                    <img alt="Theme 1" width="80" height="80" title="Mountain Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg' />                   
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme2" onClick={() => this.choosenTheme(this.state.userThemes[2])}>
                  <div className="img-container">
                    <img alt="Theme 2" width="120" height="80" title="Rocky Landscape Daylight" src='https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme3" onClick={() => this.choosenTheme(this.state.userThemes[3])}>
                  <div className="img-container">
                    <img alt="Theme 3" width="120" height="80" title="Desert Landscape Tree" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme4" onClick={() => this.choosenTheme(this.state.userThemes[4])}>
                  <div className="img-container">
                    <img alt="Theme 4" width="120" height="80" title="Landscape Field Skyfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg' />           
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme5" onClick={() => this.choosenTheme(this.state.userThemes[5])}>
                  <div className="img-container">
                    <img alt="Theme 5" width="120" height="80" title="Iceland Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme6" onClick={() => this.choosenTheme(this.state.userThemes[6])}>
                  <div className="img-container">
                    <img alt="Theme 6" width="120" height="80" title="Rocky Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme7" onClick={() => this.choosenTheme(this.state.userThemes[7])}>
                  <div className="img-container">
                    <img alt="Theme 7" width="120" height="80" title="Landscape Day Cloud" src='https://lmtrain.github.io/lm-images/assets/images/ls_field2.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme8" onClick={() => this.choosenTheme(this.state.userThemes[8])}>
                  <div className="img-container">
                    <img alt="Theme 8" width="120" height="80" title="Sunset at Hale Azarya" src='https://lmtrain.github.io/lm-images/assets/images/ls_hale-azarya.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme9" onClick={() => this.choosenTheme(this.state.userThemes[9])}>
                  <div className="img-container">
                    <img alt="Theme 9" width="120" height="80" title="Black Gold Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_blackgold.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme10" onClick={() => this.choosenTheme(this.state.userThemes[10])}>
                  <div className="img-container">
                    <img alt="Theme 10" width="120" height="80" title="Black White Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_blackwhite.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme11" onClick={() => this.choosenTheme(this.state.userThemes[11])}>
                  <div className="img-container">
                    <img alt="Theme 11" width="120" height="80" title="Blue Cledonia Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_bluecledonia.png' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme12" onClick={() => this.choosenTheme(this.state.userThemes[12])}>
                  <div className="img-container">
                    <img alt="Theme 12" width="120" height="80" title="Brown Circle Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_browncircle.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme13" onClick={() => this.choosenTheme(this.state.userThemes[13])}>
                  <div className="img-container">
                    <img alt="Theme 13" width="120" height="80" title="Gold Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_gold.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme14" onClick={() => this.choosenTheme(this.state.userThemes[14])}>
                  <div className="img-container">
                    <img alt="" width="120" height="80" title="White" src='' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme15" onClick={() => this.choosenTheme(this.state.userThemes[15])}>
                  <div className="img-container">
                    <img alt="Theme 15" width="120" height="80" title="Pink Curly Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_pinkmarble.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme16" onClick={() => this.choosenTheme(this.state.userThemes[16])}>
                  <div className="img-container">
                    <img alt="Theme 16" width="120" height="80" title="Whit Gray Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_whitegray.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <span>.</span>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <div className="create-acc-btn"><button type="submit" onClick={() => this.loadSignInPage()} className="btn btn-primary float-left">Sign in</button></div>
                {/* <div className="create-acc-btn"><button type="submit" onClick={() => this.addPicture()} className="btn btn-primary float-left">Add Your Picture</button> </div> */}
                <div className="create-acc-btn"><button title="Rock Light Waterfall" type="submit" id="theme0" onClick={() => this.choosenTheme(this.state.userThemes[0])} className="btn btn-primary float-left">Default Theme</button> </div>
              </Col>
            </Row>
            
          {/* </div> */}
        </Container>
      </div>
    );
  }
}

export default PersonalizePage;





