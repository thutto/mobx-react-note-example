import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import { Modal, ModalHeader } from "reactstrap";
import AddNoteModalForm from "./AddNoteModalForm";

@inject("noteStore")
@observer
export default class AddNoteModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
  };

  render() {
    const { isOpen, toggle } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <AddNoteModalForm toggle={toggle} />
      </Modal>
    );
  }
}
