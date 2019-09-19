import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import UserForm from "../components/UserForm";
// import UserPage from "../components/UserPage";
// import Details from "../components/Details";

class GetStarted extends Component {
  state = {
  memberId: "",
  user:{},
  membername: "",
  userName: "",
  memberemail: "",
  memberpassword: "",
  confirmpassword: "",
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
    
    let userNameField = this.state.membername
    let userEmailField = this.state.memberemail
    let passwordField =  this.state. memberpassword
    let confirmPasswordField = this.state.confirmpassword

    let fieldName = userNameField
    let userEmail = userEmailField
    let password = passwordField
    let confirmPassword = confirmPasswordField

    if (!fieldName) {
      alert("Name field can not be empty");
      return;
    }

    if (!userEmail) {
      alert("email cannot be empty");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords should match!");
      return;
    }
    let formUserId = String(userEmail)    
    let formName = String(fieldName)    
    let formUserName = String(userEmail)
    let formPassword = String(password)
    let formEmail = String(userEmail)
    let formCcard = 0
    let formAddress = ""
    let formPhone = ""
    let formItem = ""
    let formQty = 0
    let formUnitPrice = 0
    let formItemLink = ""
    let formThumbnail = ""
    let formDescription = ""
    let formReview = ""
    let formSavedItem = ""  
    let formSavedUnitPrice = 0
    let formSavedItemLink = ""
    let formSavedThumbnail = ""
    let formSavedDescription = ""
    let formSavedReview = ""    
    let formImage = ""

    let user = {

      memberId: formUserId,
      memberName: formName,
      userName: formUserName,
      email: [formEmail],
      password: formPassword,
      contact: {
                  address: formAddress,
                  phone: formPhone,
                  email: formEmail,
                },
      cart: {
              item: formItem,
              qty:	formQty,
              unitPrice: formUnitPrice,
              link: formItemLink,
              thumbnail: formThumbnail,
              description: formDescription,
              customerRating: formReview,
            },
    saveditems: {
                  item: formSavedItem,	
                  unitprice: formSavedUnitPrice,
                  itemlink: formSavedItemLink,
                  thumbnail: formSavedThumbnail,
                  description: formSavedDescription,
                  review: formSavedReview
                },
    ccard: formCcard,
    theme: {
              theme1:false,
              theme2:false,
              theme3:false,
              theme4:false,
              theme5:false,
              image: formImage, 
            },
    bookExchange: {
                    bookId: "",
                    title:  "",
                    authors: "",
                    link: "",
                    thumbnail: "",
                    description: "",
                    publisheddate: "",
                    request: false,       
                    deny: true,
                  },                
    };
    API.saveUser({user})  
    .then(res => {console.log(res)})
    .catch(err => console.log(err));  
  
  };

 
  render() {
  
    return (
      <div>
        <Container style={{ marginTop: 80 }}>        

          <UserForm
            membername={this.state.membername}
            memberemail={this.state.memberemail}
            memberpassword={this.state.memberpassword}         
            confirmpassword={this.state.confirmpassword}
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
