import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import PersonalizePage from "./pages/PersonalizePage";
// import Details from "./components/Details";
import Navbar from "./components/Navbar";
// import ThemeNavbar from "./components/ThemeNavbar";

import Wrapper from "./components/Wrapper";

// require('dotenv').config();

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Signin" component={Signin} />      
          <Route exact path="/Getstarted" component={GetStarted} />
          <Route exact path="/PersonalizePage" component={PersonalizePage} />                  
        </Wrapper>
        
      </div>
    </Router>
  );
}

export default App;
