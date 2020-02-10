// import React, { Component } from "react";
// import "../styles/body.css";
// import Wrapper from "./components/wrapper";
// import PeopleCard from "./components/card";
// import People from "DA JSONNNNN";
// import API from "../utils/API";

// class Body extends Component {

//     state = {
//         result: [],
//         search: ""
//       };

//   componentDidMount() {
//     API.search()
//     .then(res=> this.setState({result: res.data.results}))
//     .catch(err=> console.log(err));
//   }

//   render() {
//     return (
//       <Wrapper>
//         <h1 className="title">Peoples List</h1>
//         {this.state.peoples.map(peoplesData, key => (
//           <PeopleCard
//             key={peoplesData.id}
//             firstname={People.results.name.first}
//             lastname={People.results.name.last}
//             email={People.results.email}
//             picture={People.results.picture.medium}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }

// export default Body;



import React from "react";
// import "../styles/body.css";
import Wrapper from "./wrapper";
import PeopleCard from "./card";
// import People from "DA JSONNNNN";
import API from "../utils/API";



class Body extends React.Component {

  state = {
    peoples: [],
    search: ""
  };

  componentDidMount () {
    API.search()
    .then(res => this.setState({ peoples: res.data.results }))
    .catch(err => console.log(err));
  }; 

  
  
render() {
  console.log(this.state.peoples);
    
  
  return (


    <div>
      <Wrapper>
        <h1 className="title">Peoples List</h1>
        {this.state.peoples.map((peoples, index) => (
          <PeopleCard
          key={index}
          firstname={peoples.name.first}
          lastname={peoples.name.last}
          email={peoples.email}
          picture={peoples.picture.medium}
          />
          ))}
      </Wrapper>
    
          
        </div>
        

  )
  }
}
export default Body;
