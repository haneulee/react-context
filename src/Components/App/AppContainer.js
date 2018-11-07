import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";
class AppContainer extends Component {
  constructor(props) {
    super(props);

    //store consumer에서 사용하고 싶은 함수는 constructor안에 있어야함
    this._changeMessage = () => {
      this.setState({
        message: this.state.message === "hello" ? "bye" : "hello"
      });
    };
    this.state = {
      message: "hello",
      changeMessage: this._changeMessage
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
