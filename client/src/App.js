import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import PersonalizePage from "./pages/PersonalizePage";
import Search from "./pages/Search";
import UserPage from "./pages/UserPage";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import UserNavbar from "./components/UserNavbar";
// import ThemeNavbar from "./components/ThemeNavbar";
import Wrapper from "./components/Wrapper";

 require('dotenv').config();
var memberInfo = ""
// var memberNName = ""
class App extends React.Component {
  state = {
    user:{},
    memberId: "",
    membername: "",
    userName: "",
    currentUser: null,
    theme: -1,
    search:"",
    Items:"",
  }
  



  // updateDB = () => {
  //   let id = this.state.currentUser
  //   // memberInfo = id
  //   this.updateDBtheme(mID)
  // }




  updateDBtheme = (mID) => {
    let colorrr = ""
    let testalignnn = ""
    let divfontsizeee = ""
    let pfontsizeee = ""
    let fontfamilyyy = ""
    switch(this.state.theme){
      case "theme0":
        colorrr = "White";
        testalignnn = "center";
        divfontsizeee = "38px";
        pfontsizeee = "16px";
        fontfamilyyy = "Calibri";
        break;        
      case "theme1":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Rockwell";
          break;      
      case "theme2":
          colorrr = "#b87b16";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Broadway";
          break;      
      case "theme3":
          colorrr = "#d86531";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Cooper";
          break;
      case "theme4":
          colorrr = "deepskyblue";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Arial Black";
          break;
      case "theme5":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bodoni MT Black";
          break;     
      case "theme6":
          colorrr = "Greenyellow";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Stencil";
          break;        
        case "theme7":
          colorrr = "#a3ce01";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bernard MT";
          break;      
        case "theme8":
          colorrr = "#eb9ba4";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Magneto";
          break;
        case "theme9":
          colorrr = "Gold";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Rockwell";
          break;      
        case "theme10":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px"
          pfontsizeee = "16px";
          fontfamilyyy = "Vivaldi";
          break;
        case "theme11":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Cambria";
          break;      
        case "theme12":
          colorrr = "Brown";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Broadway";
          break;      
        case "theme13":
          colorrr = "Black";
          testalignnn = "center";
          divfontsizeee = "24px";
          pfontsizeee = "16px";
          fontfamilyyy = "Wide Latin";
          break;
        case "theme14":
          colorrr = "Black";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Script";
          break;
        case "theme15":
          colorrr = "rgb(232,18,36)";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bodoni MT Black"; 
          break;
        case "theme16":
          colorrr = "Gray";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bernard MT";
          break;
      default:
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Calibri";         
    }
    memberInfo = String(this.state.currentUser)
    // memberNName = String(this.state.memberName)
    let memberId = String(this.state.currentUser)
    let memberName = String(this.state.memberName)
    let userName = String(mID)
    let formTheme = String(this.state.theme)
    let formImage = ""
    let colorr = String(colorrr)
    let testalignn = String(testalignnn)
    let divfontsizee =String(divfontsizeee)
    let pfontsizee = String(pfontsizeee)
    let fontfamilyy = String(fontfamilyyy)
    
    API.updateUser({
      memberId: memberId,
      memberName:memberName,
      userName: userName,
      userTheme: formTheme,
      userImage: formImage,
      color_db: colorr,
      testalign_db:testalignn,      
      divfontsize_db: divfontsizee,
      pfontsize_db: pfontsizee,
      fontfamily_db: fontfamilyy,
               
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


  saveMemberID = (mID, mName) => {
    memberInfo = mID
    // memberNName = mName
    this.setState({
      currentUser: mID,
      memberId: mID,
      memberName: mName,
      userName: mID,
    })
    memberInfo = this.state.currentUser
    // memberNName = this.state.memberName
    this.getMemberInfo()
  }

  getMemberInfo = () => {
    switch(this.state.currentUser){
      case this.state.currentUser:
        console.log("MEMBERINFO====", memberInfo)
        console.log("CURRENT USER ID====", this.state.currentUser)
        console.log("CURRENT USER NAME====", this.state.memberName)
        // document.getElementById("memberinfo").textContent = memberInfo
        return memberInfo = this.state.currentUser
      default:
        memberInfo = this.state.currentUser
        // document.getElementById("memberinfo").textContent = memberInfo
        return memberInfo = "Welcome Guest!"
    }
  }
  setSearch = (e) =>{

    this.setState({search:e.target.value});
    
  }
  searchForItems = (e) => {
    e.preventDefault();
    var app = this;
    API.search(app.state.search)
      .then(res => app.setState({ Items: res.data.items }))          
      .catch(err => console.log(err));
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
          <UserNavbar search={this.state.search} submit={this.searchForItems} setSearch={this.setSearch}/>
          <Navbar />
          <Wrapper getTheme={this.getTheme}>
            <Route exact path="/" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/home" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/Signin" render = { () => <Signin saveMemberID={this.saveMemberID} getTheme={this.getTheme}/>}/>     
            <Route exact path="/Getstarted" render = { () => <GetStarted saveMemberID={this.saveMemberID} getTheme={this.getTheme}/>}/>
            <Route exact path="/PersonalizePage" render = { () => <PersonalizePage setTheme={this.setTheme} theme={this.state.theme} currentUser={this.state.currentUser} updateDBtheme={this.updateDBtheme} getMemberInfo={this.state.getMemberInfo} id="memberinfo"/>}/>
            <Route exact path="/UserPage" render = { () => <UserPage setTheme={this.setTheme} theme={this.state.theme} saveMemberID={this.saveMemberID} currentUser={this.state.currentUser} getTheme={this.getTheme}/>}/>
            {this.state.search.length && <Route render = { () => <Search items={this.state.Items} search={this.state.search}/>} />}           
          </Wrapper>
          
        </div>
      </Router>
    );
  }
}

export default App;
