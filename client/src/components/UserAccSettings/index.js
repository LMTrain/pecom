import React from "react";
import "../UserAccSettings/style.css";
import Container from "../Container/";
import { Link } from "react-router-dom";



function UserAccSettings(props) {
  var divStyle = {};
  var pStyle = {};
  let settingArray = []
  for (var i = 0;  i < props.length; i++) {        
    settingArray.push(props); 
  }    
    console.log("THIS IS SETTING ARRAY+++", settingArray)

  console.log('PROPS==>', props)
  // console.log("THIS IS THE CONTENT OF INDEX 0====>", props.user[0].colorDb)

  // console.log(props.user[0].contact)
  
  divStyle = props.user && {
    color: props.user[0].colorDb,
    textAlign: props.user[0].textalignDb,
    fontSize: props.user[0].divfontsizeDb,
    fontFamily: props.user[0].fontfamilyDb,
  }
  pStyle = props.user && {
    color: props.user[0].colorDb,
    fontFamily: props.user[0].fontfamilyDb,
    fontSize: props.user[0].pfontsizeDb,    
  }; 
  // console.log("THIS IS pSTYLE", pStyle)
  
  return (
             
    <div>
      <Container style={{ marginTop: 60 }}>
        <div className="setting-box">
          <div className="img-container">
            <div style={divStyle}><b>Settings</b></div>
            <ul className="list-group search-results">{props.user && props.user.map(result => (                            
              <li style={pStyle} key={result.userName} className="list-group-item">
                <img alt={result.memberName} width="120" height="180" className="img-fluid" src={result.userImage == null ? 'https://lmtrain.github.io/lm-images/assets/  images/books5.jpg' : result.userImage} /><span></span>              
                  
                  
                  <p style={pStyle}><b>Name    :</b> {result.memberName}</p>
                  <p style={pStyle}><b>userName :</b> {result.userName}</p>
                  <p style={pStyle}><b>Email    :</b> {result.memberId}</p>
                  <p style={pStyle}><b>Credit Card   :</b> {result.cCard}</p>
                  <div className="lineitems">

                  <p style={pStyle}><b>Password    :</b> </p><span><button id={result.userName} type="submit" onClick={() => props.passwordReset(result.userName)} className="btn btn-success">Reset Password</button></span><span></span>
                  </div>
                  <p style={pStyle}><b>Current Theme   :</b> {result.userTheme}</p><button id={result.userName} type="submit" onClick={() => props.setTheme("theme9")} className="btn btn-success">Change Theme</button><span></span>
                  <p style={pStyle}><b>Font Color    :</b> {result.colorDb}</p>
                  <p style={pStyle}><b>Font Text   :</b> {result.fontfamilyDb}</p>
                  <p style={pStyle}><b>Font Size-Title   :</b> {result.divfontsizeDb}</p>
                  <p style={pStyle}><b>Font Size   :</b> {result.pfontsizeDb}</p>
                    {/* <span><b>contact :</b> {result.contact}</span> */}
                  <span><button id={result.userName} type="submit" onClick={() => props.settingSubmit(result.userName)} className="btn btn-success">Save Settings</button></span>
                  <Link to="/UserPage"><button id={result.userName} type="submit" className="btn btn-success">Cancel</button></Link>
                  
              </li>
              ))}
            </ul>
          </div>        
        </div>                           
      </Container>
    </div>
  );
  
}

                  


export default UserAccSettings;
