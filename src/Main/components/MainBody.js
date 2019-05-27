import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import { Container, CardBody } from "reactstrap";
import { NoteStore } from "../../stores";
import NoteList from "../../components/NoteList";
import ActionPanel from "../../components/ActionPanel";

@inject("noteStore")
@observer
export default class MainBody extends Component {
  static propTypes = {
    noteStore: PropTypes.instanceOf(NoteStore).isRequired
  };

  render() {
    return (
      <Container>
        <ActionPanel />
        <NoteList />
      </Container>
    );
  }
}
