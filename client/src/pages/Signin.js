import React, { Component } from "react";
import Container from "../components/Container";
import { Redirect } from "react-router-dom";
import "./style.css";

// import { List, ListItem } from "../components/List";
// import Container from "../components/Container";
// import UserSignin from "../components/UserSignin";
// import UserPage from "../components/UserPage";
// import { List, ListItem } from "../components/List";
// import "./style.css";
import API from "../utils/API";


// var UsermemberID = ""
class Signin extends Component {
  state = {
    memberId: "",
    user:{},
    membername: "",
    userName: "",
    memberpassword: "",  
    redirect: false,
    isError: false,
    errorMessage: '' 
  };

  // userPage = () => {
  //   console.log("READY TO LOAD USER PAGE")  
  //   this.setRedirect()
    
  // }

  // setRedirect = () => {    
  //   this.setState({
  //     redirect: true,      
  //   })    
  // }  
  // renderRedirect = () => {
  //   if (this.state.redirect) {      
  //     console.log("READY TO LOAD USER PAGE FINALLY")
  //     console.log(UsermemberID)
  //     this.props.saveMemberID(UsermemberID)
  //     return <Redirect to='/UserPage' />
  //   }
  // }



  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

    
  signInSubmit = event => {
    event.preventDefault();
    const {memberemail, memberpassword} = this.state

    if (!memberemail) {
      document.getElementById("message").textContent = "Username cannot be empty";    
      return;
    } else {
      document.getElementById("message").textContent = "";
    }
    
    if (!memberpassword) {
      document.getElementById("message").textContent = "Password cannot be empty";   
      return;
    } else {document.getElementById("message").textContent = "";
  }

    const userAccount = {     
      memberemail,  
      memberpassword,     
    }

    this.setState({
      memberemail: '',      
      memberpassword: '',    
    })    
        
    // console.log('userAccount', userAccount)  
    let userName = String(userAccount.memberemail)   
    let password = String(userAccount.memberpassword)
    // UsermemberID = String(userAccount.memberemail)
    API.loginUser({     
      userName: userName,      
      password: password,

    })    
    .then(res => {
      // console.log('res========', res.data.error)
      const { data } = res.data;
      if(data === 0){
        console.log(data)
        // document.getElementById("message").textContent = res.data.error;
        this.setState({
          isError: true,
          // redirect: true,
          errorMessage: data
        })
      }else{
        // console.log("No exisit")
        this.setState({
          redirect: true,
          userName   
        })
        console.log("THIS IS HASH PASSWORD", data[0].password)
        console.log("THIS IS MEMBERID", data[0].password)
        console.log("THIS IS RES JSON DATA", data)
        // console.log("THIS IS PASSWORD", res.data.password)
        // this.props.saveMemberID(userName)
      }
      // this.loadPersonalizePage()
    })    
    .catch(err => console.log(err));      
  };


  render() {
    if (this.state.redirect) {      
      console.log("READY TO LOAD USER PAGE FINALLY")

      return <Redirect to='/UserPage' />
    }    
    return (
      <div>            
        <Container style={{ marginTop: 80 }}>
          <div className="card card-body">
            <div id="message"></div>
            <h4 className="text-center mb-3">Sign In</h4>
            <form className="form-groups">          
              <div className="form-group">
                <label id="username">Username</label>
                <input 
                  value={this.memberemail}
                  onChange={this.handleInputChange}
                  name="memberemail"
                  type="text"
                  className="form-control"  
                  placeholder="Enter Your Email"
                  id="memberemail"
                  />
              </div>
              <div className="form-group">
                <label id="password">Password</label>
                <input 
                  value={this.memberpassword}
                  onChange={this.handleInputChange}
                  name="memberpassword"
                  type="password" 
                  className="form-control" 
                  placeholder="Enter User Password"
                  id="memberpassword" 
                  />
              </div>
              <span className="signin-btn"><button type="submit" onClick={this.signInSubmit} className="btn btn-primary float-left">Sign In</button></span>
            </form>
            <p className="lead mt-4">No Account? <a href="/Getstarted">Create Account</a></p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Signin;





