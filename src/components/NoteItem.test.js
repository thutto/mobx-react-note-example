import React from "react";
import { configure, mount } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import NoteItem from "./NoteItem";
import { Note } from "../models";

configure({ adapter: new Adapter() });
describe("Note List", function() {
  let note;
  beforeEach(() => {
    note = new Note({
      _id: "5c983859e3599390c8feb5ca",
      id: "1",
      note: "This is a Another test note",
      createDate: "2019-03-25T02:08:59.134Z",
      archived: false,
      __v: 0
    });
  });

  it("Renders Base Div", function() {
    const wrapper = mount(<NoteItem note={note} />);
    expect(wrapper.find(".list-group-item")).to.have.lengthOf(1);
  });
});
