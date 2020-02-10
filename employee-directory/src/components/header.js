import React, { Component } from "react";
import "../styles/header.css";



class Header extends Component {
    // Setting the component's initial state
    state = {
      search:""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const value = event.target.value;
      const name = event.target.name;
      // const password = event.target.password;
  
  
      // Updating the input's state
      this.setState({
        [name]: value,
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();

      if(this.state.search.length===0){
        alert("fill out your search yo")
      }else
      
      alert(`Searching for: ${this.state.search}`);
      this.setState({
        search:""
      });
    };
  
    render() {
      return (
        <div className="header">

          <div className="row text-center">
            <h2> Employee Search Directory</h2>
          </div>

          <div className="row">
            <p>
              Individual to search for: {this.state.search}
            </p>
          </div>
          <div className="row">
            <form className="form">
              <input
                value={this.state.search}
                name="search"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search Here"
              />
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
      );
    }
  }

export default Header;