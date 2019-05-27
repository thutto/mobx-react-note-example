import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import { NoteStore } from "../stores";
import { ListGroup } from "reactstrap";
import NoteItem from "./NoteItem";

@inject("noteStore")
@observer
export default class NoteList extends Component {
  static propTypes = {
    noteStore: PropTypes.instanceOf(NoteStore).isRequired
  };

  componentDidMount() {
    const { noteStore } = this.props;
    noteStore.getNotes();
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };

  render() {
    const { noteStore } = this.props;
    return (
      <ListGroup>
        {noteStore.notes
          ? noteStore.notes.map(note => (
              <NoteItem key={note.mongoId} note={note} />
            ))
          : null}
      </ListGroup>
    );
  }
}
