import React, { Component }, {useState} from "react"
import logo from "./logo.svg"
import "./App.css"
import UserList from "./components/UserList";
import Button from "./components/Button";
import "./components/Style.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />
      </div>
    )
  }
}

export default App
