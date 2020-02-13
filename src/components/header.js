import React, { Component } from "react";
import "../styles/header.css";



class Header extends Component {
    // Setting the component's initial state
    render() {
      return (
        <div className="header">

          <div className="row text-center">
            <h2> Employee Search Directory</h2>
          </div>
         
        </div>
      );
    }
  }

export default Header;