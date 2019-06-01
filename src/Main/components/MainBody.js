import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Container, CardBody } from "reactstrap";
import NoteList from "../../components/NoteList";
import ActionPanel from "../../components/ActionPanel";

@observer
export default class MainBody extends Component {
  render() {
    return (
      <Container>
        <ActionPanel />
        <NoteList />
      </Container>
    );
  }
}
