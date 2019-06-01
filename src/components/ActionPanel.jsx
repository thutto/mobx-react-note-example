import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { Button } from "reactstrap";
import AddNoteModal from "./AddNoteModal";

@observer
export default class ActionPanel extends Component {
  @observable createModalOpen = false;

  @action
  createModalToggle = () => {
    this.createModalOpen = !this.createModalOpen;
  };

  render() {
    return (
      <div>
        <Button size="lg" onClick={this.createModalToggle} color="primary">
          New Note
        </Button>
        <AddNoteModal
          isOpen={this.createModalOpen}
          toggle={this.createModalToggle}
        />
      </div>
    );
  }
}
