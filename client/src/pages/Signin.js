import React, { Component } from "react";
import Container from "../components/Container";
import "./style.css";
// import { List, ListItem } from "../components/List";
// import Container from "../components/Container";
// import UserSignin from "../components/UserSignin";
// import UserPage from "../components/UserPage";
// import { List, ListItem } from "../components/List";
// import "./style.css";
// import API from "../utils/API";


var createdAccount = 1
class Signin extends Component {
  state = {
    user: {},
   
  };

  accountCreated = () => {
    if (createdAccount >= 1) {
      document.getElementById("welcomeMessage").textContent = "Welcome!";   
      return;
    }else{document.getElementById("welcomeMessage").textContent = "";}
  }


  // When the component mounts, get a list of all Favorite books in DB and update this.state.
  // componentWillMount() {  
  //   this.loadUserPage();    
    
  // }

  // loadUserPage = () => {
  //   API.getUsers()
  //     .then(res => {        
  //       this.setState({ user: res.data })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  

  render() {
    
    return (
      <div>
        <div id="welcomeMessage">Welcome!</div>
        <Container style={{ marginTop: 80 }}>
          <div className="card card-body">
            <div id="message"></div>
            <h4 className="text-center mb-3">Sign In</h4>
            <form className="form-groups">          
              <div className="form-group">
                <label id="username">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  className="form-control" 
                  placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label id="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="form-control" 
                  placeholder="Enter password"/>
              </div>
              <span className="signin-btn"><button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary float-left">Sign In</button></span>
            </form>
            <p className="lead mt-4">No Account? <a href="/Getstarted">Create Account</a></p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Signin;





