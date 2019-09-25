import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";
// import API from "../utils/API";

var mid = "";
class UserPage extends Component {
  
  state = {   
    memberId: "",
    user:{},
    membername: "",
    userName: "",
    memberemail: "",    
    redirect: false,    
  };


  componentWillMount() {  
    // this.loadUserData();
    console.log(this.props.currentUser);
    mid = "theme9"
    this.userTheme(mid);
  }

  // loadUserData = () => {
  //   API.getUser()
  //     .then(res => {
  //       console.log("USER DATA FRM DB =====", res.data)       
  //       this.setState({ user: res.data})
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  userTheme = (mid) => {
    // mID = this.props.currentUser 
    console.log("mID is : ", mid)     
    this.props.setTheme(mid)    
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

  
  // choosenTheme = (id) => {
  //   mID = this.props.currentUser 
    
  // }

  render() {
    
    return (
      <div>
        {this.renderRedirect()}
        <div id="welcomeMessage"> {this.state.userName}</div>
        <Container style={{ marginTop: 60 }}>
        <div id="message"></div>
          <div className="row1">            
            <Row>              
              <Col size="md-4">
                <div>{this.props.currentUser}</div>
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





