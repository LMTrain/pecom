import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import UserForm from "../components/UserForm";
// import UserPage from "../components/UserPage";
// import Details from "../components/Details";

class GetStarted extends Component {
  state = {
  id: "",
  user:[],
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  ccard: "", 
  };
  
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.LookForUser(this.state.email);         
  };
 
 
  render() {
  
    return (
      <div>
        <Container style={{ marginTop: 80 }}>        

          <UserForm
            email={this.state.email}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}            
          />
          {/* <UserPage user={this.state.user}
          />        */}
         
        </Container>
      </div>
      
    );
  }
}

export default GetStarted;
