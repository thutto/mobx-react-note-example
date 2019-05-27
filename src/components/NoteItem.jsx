import React from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import { ListGroupItem, Card, CardBody, CardFooter } from "reactstrap";
import { Note } from "../models";

const NoteItem = observer(({ note }) => (
  <ListGroupItem>
    <Card>
      <CardBody>{note.note}</CardBody>
      <CardFooter>
        <small>Created On: {note.createDate}</small>
      </CardFooter>
    </Card>
  </ListGroupItem>
));

NoteItem.propTypes = {
  note: PropTypes.instanceOf(Note).isRequired
};

export default NoteItem;
