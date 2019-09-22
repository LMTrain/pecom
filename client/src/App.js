import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import PersonalizePage from "./pages/PersonalizePage";
import API from "./utils/API";
import Navbar from "./components/Navbar";
// import ThemeNavbar from "./components/ThemeNavbar";
import Wrapper from "./components/Wrapper";

// require('dotenv').config();
var memberInfo = ""
class App extends React.Component {
  state = {
    currentUser: null,
    theme: -1
  }



  updateDB = () => {
    let id = this.state.currentUser
    // memberInfo = id
    this.updateDBtheme(id)
  }




  updateDBtheme = (id) => {
    let memberId = this.state.currentUser
    let formTheme = this.state.theme  
    let formImage = ""
    API.updateUser({
      memberId: memberId,
      userTheme: formTheme,
      userImage: formImage,
               
    })
      .then(res => {
        
        if(res.data.error ){
          console.log(res.data.error)
          document.getElementById("message").textContent = res.data.error;
        }else{
          console.log("No exisit")
          
        }
      })
      
      .catch(err => console.log(err));  

  }


  saveMemberID = (mID) => {
    memberInfo = mID
    this.setState({
      currentUser: mID
    })
    this.getMemberInfo()
  }

  getMemberInfo = () => {
    switch(this.state.currentUser){
      case this.state.currentUser:
        document.getElementById("memberinfo").textContent = memberInfo
        return memberInfo = this.state.currentUser
      default:
        document.getElementById("memberinfo").textContent = memberInfo
        return memberInfo = "Welcome Guest!"
    }
  }



  setTheme = (i) => {
    this.setState({
      theme: i
    })
  }

  getTheme = () => {
    switch(this.state.theme){
      case "theme0":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg"
      case "theme1":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg"
      
      case "theme2":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg"
      
      case "theme3":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg"
      
      case "theme4":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg"
     
      case "theme5":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf1.png"
     
      case "theme6":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg"
      default :
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg"
    }
  }
 
  render(){

    return (
      <Router>
        <div>
          <Navbar id="memberinfo"/>
          <Wrapper getTheme={this.getTheme}>
            <Route exact path="/" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/home" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/Signin" render = { () => <Signin updateDBtheme={this.updateDBtheme} getTheme={this.getTheme}/>}/>     
            <Route exact path="/Getstarted" render = { () => <GetStarted saveMemberID={this.saveMemberID} getTheme={this.getTheme}/>}/>
            <Route exact path="/PersonalizePage" render = { () => <PersonalizePage setTheme={this.setTheme} theme={this.state.theme} currentUser={this.state.currentUser} updateDB={this.updateDB} getMemberInfo={this.state.getMemberInfo} id="memberinfo"/>}/>              
          </Wrapper>
          
        </div>
      </Router>
    );
  }
}

export default App;
