import React from "react";
import "../styles/card.css";

// key={peopleData.id} firstname={People.results.name.first} lastname={People.results.name.last} email={People.results.email} picture={People.results.picture.medium}/>)} 

function PeopleCard(props) {
  return (
    <div className="card">
      <div className="table table-striped">
      </div>
      <div className="content aligned">
        <div className="text-center picture">
          <img alt={props.firstname} src={props.picture} />
        </div>
        <ul>
            <li><strong>Name:</strong> {props.name}</li>
            <li><strong>Email:</strong> {props.email}</li>
            <li><strong>Location:</strong> {props.location}</li>

        </ul>
      </div>
    </div>

  

    
  );
}

export default PeopleCard;
