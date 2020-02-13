import React from "react";
import Wrapper from "./wrapper";
import PeopleCard from "./card";
import API from "../utils/API";
import "../styles/body.css";
import SortBtn from "./SortBtn";
import Filter from "./FilterBtn";
import Row from './row';
import Container from "./container";


class Body extends React.Component {
  state = {
    peoples: [],
    results: "",
    filter: "",
    sorted: false
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ peoples: res.data.results, results: res.data.results}))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    event.preventDefault();
    
    let filter = event.target.value.toLowerCase();
    let peoples = [...this.state.results];
    if (filter > "") {
      peoples = peoples.filter(person => {
        let name = person.name.first.toLowerCase();

        return name.startsWith(filter);
      });
    }

    this.setState({ filter: filter, peoples: peoples });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("formSubmit Works!");
  };

  handleOnClick = event => {
    event.preventDefault();
    console.log("I'm running ths button");

    function sortStuff(v) {
      v = [...v];
      v.sort((a, b) => {
        a = a.name.first.toLowerCase() + " " + a.name.last.toLowerCase();
        b = b.name.first.toLowerCase() + " " + b.name.last.toLowerCase();
        return a > b ? 1 : b > a ? -1 : 0;
      });
      return v;
    }

    let peoples = sortStuff(this.state.peoples);
    let results = sortStuff(this.state.results);
    this.setState({ sorted: true, peoples: peoples, results: results });
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Container>
            <div>
              <Row>
                <SortBtn onClick={this.handleOnClick}></SortBtn>
              </Row>
            </div>
            <div>
              <Row>
                <Filter
                  onChange={this.handleInputChange}
                />
              </Row>
            </div>
            <Row>
              <h1 className="title">Peoples List</h1>
              {this.state.peoples.map((peoples, index) => (
                <PeopleCard
                  key={peoples.login.uuid}
                  name={peoples.name.first + " " + peoples.name.last}
                  email={peoples.email}
                  picture={peoples.picture.medium}
                  location={peoples.location.city}
                />
              ))}
            </Row>
          </Container>
        </Wrapper>
      </div>

    );
  }
}
export default Body;
