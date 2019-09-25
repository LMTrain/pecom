import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import PersonalizePage from "./pages/PersonalizePage";
import UserPage from "./pages/UserPage";
import API from "./utils/API";
import Navbar from "./components/Navbar";
// import ThemeNavbar from "./components/ThemeNavbar";
import Wrapper from "./components/Wrapper";

// require('dotenv').config();
var memberInfo = ""
class App extends React.Component {
  state = {
    user:{},
    memberId: "",
    membername: "",
    userName: "",
    currentUser: null,
    theme: -1
  }
  



  // updateDB = () => {
  //   let id = this.state.currentUser
  //   // memberInfo = id
  //   this.updateDBtheme(mID)
  // }




  updateDBtheme = (mID) => {
    memberInfo = String(this.state.currentUser)
    let memberId = String(this.state.currentUser)
    let memberName = String(this.state.memberName )
    let userName = String(mID)
    let formTheme = String(this.state.theme)
    let formImage = ""
    API.updateUser({
      memberId: memberId,
      memberName:memberName,
      userName: userName,
      userTheme: formTheme,
      userImage: formImage,
               
    })
      .then(res => {
        
        if(res.data.error ){
          console.log(res.data.error)
          document.getElementById("message").textContent = res.data.error;
        }else{
          // console.log("No exisit")
          document.getElementById("message").textContent = " ";
          
        }
      })
      
      .catch(err => console.log(err));  

  }


  saveMemberID = (mID) => {
    memberInfo = mID
    this.setState({
      currentUser: mID,
      memberId: mID,
      memberName: mID,
      userName: mID,
    })
    memberInfo = this.state.currentUser
    this.getMemberInfo()
  }

  getMemberInfo = () => {
    switch(this.state.currentUser){
      case this.state.currentUser:
        console.log(memberInfo)
        // document.getElementById("memberinfo").textContent = memberInfo
        return memberInfo = this.state.currentUser
      default:
        memberInfo = this.state.currentUser
        // document.getElementById("memberinfo").textContent = memberInfo
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
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg"
     
      case "theme6":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg"
        case "theme7":
          return "https://lmtrain.github.io/lm-images/assets/images/ls_field2.jpg"
        case "theme8":
            return "https://lmtrain.github.io/lm-images/assets/images/ls_hale-azarya.jpg"
        case "theme9":
          return "https://lmtrain.github.io/lm-images/assets/images/marble_blackgold.jpg"
          case "theme10":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_blackwhite.jpg"
          case "theme11":
              return "https://lmtrain.github.io/lm-images/assets/images/marble_bluecledonia.png"
          case "theme12":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_browncircle.jpg"
          case "theme13":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_gold.jpg"
          case "theme14":
              return ""
          case "theme15":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_pinkmarble.jpg"
          case "theme16":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_whitegray.jpg"
      default :
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg"
    }
  }
 
  render(){

    return (
      <Router>
        <div>
          {/* <Navbar id="memberinfo"/> */}
          <Navbar />
          <Wrapper getTheme={this.getTheme}>
            <Route exact path="/" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/home" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/Signin" render = { () => <Signin getTheme={this.getTheme}/>}/>     
            <Route exact path="/Getstarted" render = { () => <GetStarted saveMemberID={this.saveMemberID} getTheme={this.getTheme}/>}/>
            <Route exact path="/PersonalizePage" render = { () => <PersonalizePage setTheme={this.setTheme} theme={this.state.theme} currentUser={this.state.currentUser} updateDBtheme={this.updateDBtheme} getMemberInfo={this.state.getMemberInfo} id="memberinfo"/>}/>
            <Route exact path="/UserPage" render = { () => <UserPage saveMemberID={this.saveMemberID} getTheme={this.getTheme}/>}/>            
          </Wrapper>
          
        </div>
      </Router>
    );
  }
}

export default App;
