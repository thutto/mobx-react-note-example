import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import {
  ModalBody,
  ModalFooter,
  Button,
  Form,
  Label,
  Input,
  FormGroup
} from "reactstrap";
import { NoteStore } from "../stores";
import { observable, action } from "mobx";

@inject("noteStore")
@observer
export default class AddNoteModalForm extends Component {
  @observable noteText = "";
  static propTypes = {
    noteStore: PropTypes.instanceOf(NoteStore).isRequired,
    toggle: PropTypes.func.isRequired
  };

  submitNote = async event => {
    const { toggle, noteStore } = this.props;
    event.preventDefault();
    if (this.noteText === "") {
      //TODO Add error handling
      return;
    }
    //TODO Send Post.
    await noteStore.addNote(this.noteText);
    //TODO Close Modal.
    toggle();
  };

  @action
  handleChange = async event => {
    this.noteText = event.target.value;
  };

  render() {
    const { toggle } = this.props;
    return (
      <Form onSubmit={this.submitNote}>
        <ModalBody>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              type="textarea"
              name="note"
              id="noteId"
              value={this.noteText}
              onChange={this.handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Add Note</Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Form>
    );
  }
}
