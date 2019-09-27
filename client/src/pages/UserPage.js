import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

var userArray = []
var membername = ""
var userName =""
var usertheme = "";
var divStyle = {};
var pStyle = {};

class UserPage extends Component {
  
  state = {    
    user:[],   
    userName: this.props.currentUser,
    redirect: false,    
  };

  
  componentWillMount() {
    this.loadUserData();    
  }

  loadUserData = () => {
    this.setState({
      userName: this.props.currentUser
    })
    userName = this.state.userName
    console.log("THIS IS USERNAME", userName)
    const currentAccount = {     
      userName,          
    }
    this.loadAPIgetUser(currentAccount.userName);
  }

  loadAPIgetUser = (id) => {
    const app = this;
    id = userName
    API.getUser({      
      userName: userName,               
    })
    .then(function(res){
      return new Promise(function(resolve, reject){
        app.setState({ user: res.data })
        resolve(true);
      })
    }).then(function(){
      console.log("THIS IS USER OBJECT", app.state.user);
      userArray = [...app.state.user]
      console.log("USERNAME API ID$$$$", userArray);
      console.log(userArray[0].userName)
      usertheme = userArray[0].userTheme
      membername = userArray[0].memberName
      console.log("USER THEME IS ===", usertheme)
      app.userTheme(usertheme);
    })    
    // .then(res => {console.log(res)})
    .catch(err => console.log(err));
  }

  userTheme = (id) => {   
    console.log("mID is : ", usertheme)
    let colorr = "";
    let testalignn = "";
    let fontsizee = "";
    let fontfamilyy = "";
    
    divStyle = {
      color: colorr,
      textAlign: testalignn,
      fontSize: fontsizee,
      fontFamily: fontfamilyy
    };
    pStyle = {
      color: colorr,
      fontFamily: fontfamilyy,
      fontSize: fontsizee,
      textAlign: testalignn
    };  
    this.props.setTheme(id)    
  }

  logOutPage = () => {    
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
      // this.props.updateDBtheme(mID)     
      return <Redirect to='/Logout' />
    }
  }

  
  

  render() {
    
    return (
      <div>
        {this.renderRedirect()}
        <div style={divStyle}><b> Welcome {membername}!</b></div>
        <Container style={{ marginTop: 60 }}>
        <div id="message"></div>
          <div className="row1">            
            <Row>              
              <Col size="md-4">
                <div style={pStyle}>{this.props.currentUser}</div>
                {/* <div className="upage-box" >
                  <div className="img-container">
                    
                  </div>                  
                </div> */}
              </Col>              
            </Row>
          </div>
          <div className="gap"></div>
          {/* <div className="row2">
            </div>            */}
            <Row>              
              <Col size="md-4">
                <div className="contents-r2-c1">

                  <div className="upage-box">
                    <div className="img-container">
                      
                    </div>                  
                  </div>
                </div>
              </Col>
              <Col size="md-4">
              <div className="contents-r2-c2">

                <div className="upage-box">
                  <div className="img-container">
                    
                  </div>                  
                </div>
              </div>
              </Col>
              <Col size="md-4">
              <div className="contents-r2-c3">

                <div className="upage-box">
                  <div className="img-container">
                    
                  </div>                  
                </div>
              </div>
              </Col>                           
            </Row>
          
        </Container>
      </div>
    );
  }
}

export default UserPage;





