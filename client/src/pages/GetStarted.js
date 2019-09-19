import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import UserForm from "../components/UserForm";
// import UserPage from "../components/UserPage";
// import Details from "../components/Details";

class GetStarted extends Component {
  state = {
  id: "",
  users:[],
  name: "",
  username: "",
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
    this.saveUser(this.state.userName);         
  };

  saveUser = (id) => {
    
    const user = this.state.users.find((user) => user.id === id);
    console.log('user', user)
    this.setState({user})
    let formUserId = String(user.memberId)    
    let formName = String(user.memberName)    
    let formUserName = String(user.userName)
    let formAddress = String(user.contact.address)
    let formPhone = String(user.contact.phone)
    let formEmail = String(user.contact.email)
    let formPassword = String(user.password)
    let formItem = String(user.cart.item)
    let formQty = Number(user.cart.qty)
    let formUnitPrice = Number(user.cart.unitPrice)
    let formItemLink = String(user.cart.link)
    let formThumbnail = String(user.cart.thumbnail)
    let formDescription = String(user.cart.description)
    let formReview = String(user.cart.customerRating)
    let formSavedItem = String(user.savedItems.item)  
    let formSavedUnitPrice = Number(user.savedItems.unitPrice)
    let formSavedItemLink = String(user.savedItems.link)
    let formSavedThumbnail = String(user.savedItems.thumbnail)
    let formSavedDescription = String(user.savedItems.description)
    let formSavedReview = String(user.savedItems.customerRating)
    let formCcard = Number(user.cCard)
    let formTheme = String(user.themes.theme1)
    let formImage = String(user.themes.userImage)    

    API.saveUser({

      userid: formUserId,
      name: formName,
      username: formUserName,
      contact: {
                  address: formAddress,
                  phone: formPhone,
                  email: formEmail,
                },
      password: formPassword,
      cart: {
              item: formItem,
              qty:	formQty,
              unitprice: formUnitPrice,
              itemlink: formItemLink,
              thumbnail: formThumbnail,
              description: formDescription,
              review: formReview,
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
              theme1: formTheme,
              image: formImage, 
            },  
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err));  
    
  };
 
 
  render() {
  
    return (
      <div>
        <Container style={{ marginTop: 80 }}>        

          <UserForm
            name={this.state.name}
            username={this.state.email}
            email={this.state.email}
            password={this.state.password}         
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
