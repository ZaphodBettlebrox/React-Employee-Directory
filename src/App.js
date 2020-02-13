import React from "react";
import "./App.css";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
//SRC16 for friends json layout, SRC20 for api search
// Be like friends example with the added search function

// the api call creates a list of all people, just like the spongebob

// 1st, get api list to console log
// 2nd get all users to show on the page with some infomation showing
// 3rd give them each ids (or whatever we used)
// 4th search function
// 5th search function decreases list to names that fit for search

function App() {
  return (
    <div>
      <Header />,
      {/* <div className="container"> */}
        <Body />,
        <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
