import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: true
    };
  }

  render() {
    let wordDisplay;
    if (this.state.isLoggedin === true) {
      wordDisplay = "in";
    } else {
      wordDisplay = "out";
    }
    return (
      <div>
        <h1>welcome to class component{wordDisplay}</h1>
      </div>
    );
  }
}
export default App;
