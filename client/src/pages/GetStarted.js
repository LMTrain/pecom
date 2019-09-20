import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import UserForm from "../components/UserForm";
import { Redirect } from "react-router-dom";

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
  redirect: false
  };

  
  loadSignInPage = () => {
    this.setRedirect()
    // localStorage.clear();
    // console.log("cliasdk");
    // return(
    //     <Redirect to="/Signin/"/>
    // )
  }
  
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Signin' />
    }
  }
  
 
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    const {membername, memberemail, memberpassword, confirmpassword} = this.state

    if (!membername) {
      document.getElementById("message").textContent = "Name field can not be empty";
      // alert("Name field can not be empty");
      return;
    }else{document.getElementById("message").textContent = "";}

    if (!memberemail) {
      document.getElementById("message").textContent = "Email cannot be empty";
      // alert("Email cannot be empty");
      return;
    }else{document.getElementById("message").textContent = "";}
    
    if (!memberpassword) {
      document.getElementById("message").textContent = "Password cannot be empty";
      // alert("Password cannot be empty");
      return;
    }else{document.getElementById("message").textContent = "";}

    if (memberpassword !== confirmpassword) {
      document.getElementById("message").textContent = "Passwords should match!";
      
      // alert("Passwords should match!");
      return;
    }else{document.getElementById("message").textContent = "";}

    const newAccount = {
      membername,
      memberemail,
      memberpassword,
      confirmpassword
    }

    this.setState({
      memberemail: '',
      membername: '',
      memberpassword: '',
      confirmpassword: ''
    })
    

    console.log('newAccount', newAccount)
    let memberId = String(newAccount.memberemail)
    let memberName = String(newAccount.membername)
    let userName = String(newAccount.memberemail)
    let email = String(newAccount.memberemail)
    let password = String(newAccount.memberpassword)
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

    API.saveUser({
      memberId: memberId,
      memberName: memberName,
      userName: userName,
      email: [email],
      password: password,
      cCard: formCcard,
      contact: {
                    address: formAddress,
                    phone: formPhone,
                    email: email,
                  },
      cart: {
              item: formItem,
              qty:	formQty,
              unitPrice: formUnitPrice,
              link: formItemLink,
              description: formDescription,
              thumbnail: formThumbnail,
              customerRating: formReview,
            },
      savedItems: {
                    item: formSavedItem,	
                    unitPrice: formSavedUnitPrice,
                    link: formSavedItemLink,
                    description: formSavedDescription,
                    thumbnail: formSavedThumbnail,
                    customerRating: formSavedReview
                  },
      themes: {
                theme1:false,
                theme2:false,
                theme3:false,
                theme4:false,
                theme5:false,
                userImage: formImage, 
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
    })
      .then(res => {this.loadSignInPage()})
      
      .catch(err => console.log(err));  
    
  };

   

 
  render() {
  
    return (
      <div>
        {this.renderRedirect()}
        <Container style={{ marginTop: 80 }}>        

          <UserForm
            id="message"
            membername={this.state.membername}
            memberemail={this.state.memberemail}
            memberpassword={this.state.memberpassword}         
            confirmpassword={this.state.confirmpassword}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
                       
          /> 
      
         
        </Container>
      </div>
      
    );
  }
}

export default GetStarted;
