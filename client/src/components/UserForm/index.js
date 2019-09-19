import React from "react";
import "./style.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function UserForm(props) {
  return (
    <div className="card card-body">
      <div className="message"></div>
      <h4 className="text-center mb-3">Create Account</h4>
        <form className="form-groups">
          <div className="form-group">
            <label htmlFor="userName">Name</label>
            <input
              value={props.userNname}
              type="text"
              id="user-name" 
              className="form-control" 
              placeholder="Enter Your Name"/>
          </div>
          <div className="form-group">
            <label id="user-email">Email</label>
            <input 
              type="text" 
              id="user-email" 
              className="form-control" 
              placeholder="Enter Your Email"/>
          </div>
          <div className="form-group">
            <label id="user-password">Password</label>
            <input 
              type="password" 
              id="user-password" 
              className="form-control" 
              placeholder="Enter User Password"/>
          </div>
          <div className="form-group">
            <label id="confirm-password">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              className="form-control" 
              placeholder="Confirm Password"/>
          </div>
          <span className="create-acc-btn"><button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary float-left">Create Account</button></span>
        </form>
        <p className="lead mt-4">Have An Account? <a href="/Signin">Sign In</a></p>
    </div>
  );
}

export default UserForm;
