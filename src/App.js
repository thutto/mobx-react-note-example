import React, { Component } from "react";
import { configure } from "mobx";
import { Provider, observer } from "mobx-react";
import { noteStore } from "./stores";
import Main from "./Main";

const stores = { noteStore };
configure({ enforceActions: "observed" });

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider {...stores}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
