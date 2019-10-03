import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Listup, ListItemup } from "../components/Listup";
// import UserAccSettings from "../components/UserAccSettings";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import SearchResults from '../components/SearchResults';
import ItemDetails from '../components/ItemDetails'
// import { Link } from "react-router-dom";



var userArray = []
var membername = ""
var userName =""
var usertheme = "";
var divStyle = {};

class UserPage extends Component {
  
  state = {    
    user:[],
    userSettings: [],
    userArray: [],
    userName: this.props.currentUser,
    redirect: false,    
  };



  
  componentWillMount() {
    this.loadUserData();    
  }

  loadUserData = () => {
    this.setState({
      userName: this.props.currentUser
    })
    userName = this.state.userName
    console.log("THIS IS USERNAME", userName)
    const currentAccount = {     
      userName,          
    }
    this.loadAPIgetUser(currentAccount.userName);
  }

  loadAPIgetUser = (id) => {
    const app = this;
    id = userName
    API.getUser({      
      userName: userName,               
    })
    .then(function(res){
      return new Promise(function(resolve, reject){
        app.setState({ user: res.data })
        resolve(true);
      })
    }).then(function(){
      console.log("THIS IS USER OBJECT", app.state.user);
      userArray = [...app.state.user]
      // settingsArray = userArray[0].toLocaleString()
      console.log("USERNAME API ID$$$$", userArray);
      console.log(userArray[0].userName)
      usertheme = userArray[0].userTheme
      membername = userArray[0].memberName
      // contact = userArray[0].contact
      console.log("USER THEME IS ===", usertheme)
      app.userTheme(usertheme);
    })    
    // .then(res => {console.log(res)})
    .catch(err => console.log(err));
  }

  userTheme = (id) => {   
    console.log("mID is : ", usertheme)    
    
    divStyle = {
      color: userArray[0].colorDb,
      textAlign: userArray[0].textalignDb,
      fontSize: userArray[0].divfontsizeDb,
      fontFamily: userArray[0].fontfamilyDb,
    };

    this.props.setTheme(id)    
  }

  
  // GETTING USERS INFO FROM DB
  userCart = () => {
    console.log("THIS IS USER CART===>", userArray[0].cart)
    console.log("THIS IS USER SAVE ITEM===>", userArray[0])
    console.log("THIS IS CURRENT USER===>", userArray[0].userName)
    this.loadAPIgetUser(userArray[0].userName)
    // console.log(props.user[0].contact)
  }

  logOutPage = () => {    
    this.setRedirect()
    localStorage.clear();
    console.log("cliasdk");
    return(
        <Redirect to="/Signin/"/>
    )
  }

  setRedirect = () => {    
    this.setState({
      redirect: true,      
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {     
      return <Redirect to='/Logout' />
    }
  }

  settingButton = () => {
    this.setState({
      redirect: true,       
    })
    if (this.state.redirect) {     
      return <Redirect to='/Settings' />
    }  
  }

  help = () => {
    this.setState({
      redirect: true,       
    })
    if (this.state.redirect) {     
      return <Redirect to='/home' />
    }  
  }
  
  
  

  render() {
    
   
    return (
      <div>
        {this.renderRedirect()}
        <Row>              
          <Col size="md-10">
            <div style={divStyle}><b> Welcome {membername}</b></div>
          </Col>
          <Col size="md-2">
            <div className="lineitems">            
                <span><button type="submit" className="btn btn-success" onClick={() => this.settingButton()}>Settings</button></span>
                <button type="submit" className="btn btn-success" onClick={() => this.help()}>Help</button>
                <button type="submit" className="btn btn-success" onClick={() => this.logOutPage()}>Sign Out</button>
            </div>        
          </Col>
        </Row>
        <Container style={{ marginTop: 60 }}>
        <div id="message"></div>

          
          {this.props.Items.length !== 0 && <SearchResults Items={this.props.Items} cart={this.props.cart} saveForLater={this.props.saveForLater} detailItem={this.props.detailItem} addItemToCart={this.props.addItemToCart} addItemToSaveForLater={this.props.addItemToSaveForLater} additemDetails={this.props.additemDetails}/>}
          
          <div className="gap"></div>            
            <Row>              
              <Col size="md-4">
                <div className="contents-r2-c1">

                  <div className="upage-box">
                    <div className="img-container">
                      <Row>              
                        <Col size="md-12">
                            <div className="inside-upage-box">
                              <div className="img-container">
                                <b>Save For Later</b>
                              </div>                  
                            </div>                          
                        </Col>
                      </Row>
                    </div>
                   
                    <div className="upage-box-content">
                      <Listup className="list-overflow-container-uspage">

                      {this.props.saveForLater.map(saveForLater => (
                        <ListItemup key={saveForLater[0].id}>
                        <img alt={saveForLater[0].name} width="80" height="100" className="img-fluid" src={saveForLater[0].largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : saveForLater[0].largeImage} />
                        <p><b>Item Name             :</b> {saveForLater[0].name}</p>
                        <b>Price         :</b> ${saveForLater[0].salePrice}
                        </ListItemup>

                      ))}
                        
                      </Listup>                      
                    </div>
                                      
                  </div>
                </div>
              </Col>
              <Col size="md-4">
              <div className="contents-r2-c2">

                <div className="upage-box">
                  <div className="img-container">
                  <Row>              
                    <Col size="md-12">
                        <div className="inside-upage-box" onClick={() => this.userCart()}>
                          <div className="img-container">
                            <b>Cart</b>
                          </div>                  
                        </div>                          
                    </Col>
                  </Row>                    
                  </div>

                  <div className="upage-box-content">
                    <Listup className="list-overflow-container-uspage">

                    {this.props.cart.map(cart => (
                        <ListItemup key={cart[0].id}>
                        <img alt={cart[0].name} width="80" height="100" className="img-fluid" src={cart[0].largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : cart[0].largeImage} />
                        <p><b>Item Name             :</b> {cart[0].name}</p>
                        <b>Price         :</b> ${cart[0].salePrice}
                        </ListItemup>

                      ))}

                    </Listup>               
                  </div>

                </div>
              </div>
              </Col>
              <Col size="md-4">
              <div className="contents-r2-c3">

                <div className="upage-box">
                  <div className="img-container">
                  <Row>              
                    <Col size="md-12">
                        <div className="inside-upage-box">
                          <div className="img-container">
                            <b>Orders</b>
                          </div>                  
                        </div>                          
                    </Col>
                  </Row>                    
                  </div>
                  <div className="upage-box-content">

                    <Listup className="list-overflow-container-uspage">

                    {this.props.cart.map(cart => (
                        <ListItemup key={cart[0].id}>
                        <img alt={cart[0].name} width="80" height="100" className="img-fluid" src={cart[0].largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : cart[0].largeImage} />
                        <p><b>Item Name             :</b> {cart[0].name}</p>
                        <b>Price         :</b> ${cart[0].salePrice}
                        </ListItemup>

                      ))}

                    </Listup>               
                  </div>

                </div>
              </div>
              </Col>                           
            </Row>
            
            {this.props.Items.length !== 0 && <ItemDetails cart={this.props.cart} saveForLater={this.props.saveForLater} detailItem={this.props.detailItem} addItemToCart={this.props.addItemToCart} addItemToSaveForLater={this.props.addItemToSaveForLater} additemDetails={this.props.additemDetails}/>}
        
        </Container>
      </div>
    );
  }
}

export default UserPage;





