import React from "react";


function Filter(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="name">Search by First Name: </label>
          <input
            value={props.search}
            onChange={props.onChange}
            name="name"
            list="names"
            type="text"
            className="form-control"
            placeholder="Type in a name to begin"
            id="name"
          />
        </div>
      </form>
    );
  }

export default Filter;