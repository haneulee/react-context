import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";
class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "something",
          seen: false
        },
        "2": {
          id: 2,
          text: "something else",
          seen: false
        },
        "3": {
          id: 3,
          text: "something else but different",
          seen: false
        }
      }
    };
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}
export default AppContainer;
