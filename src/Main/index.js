import React, { Component } from "react";
import { observer } from "mobx-react";
import MainBody from "./components/MainBody";

@observer
export default class Main extends Component {
  render() {
    return (
      <div>
        <MainBody />
      </div>
    );
  }
}
