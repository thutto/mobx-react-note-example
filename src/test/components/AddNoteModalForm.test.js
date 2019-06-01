import React from "react";
import { observable, configure as mobxConf, action } from "mobx";
import { shallow, configure, mount } from "enzyme";
import { expect } from "chai";
import { stub } from "sinon";
import Adapter from "enzyme-adapter-react-16";
import NoteStore from "../../stores/noteStore";
import AddNoteModalForm from "../../components/AddNoteModalForm";
import { Note } from "../../models";

configure({ adapter: new Adapter() });
describe("Note Modal Form", function() {
  let store;
  beforeEach(() => {
    mobxConf({ enforceActions: "never" });
    store = observable(NoteStore);
    store.notes = [new Note({ note: "test", _id: "1" })];
  });

  it("Renders", function() {
    const wrapper = mount(
      <AddNoteModalForm noteStore={store} toggle={() => {}} />
    );
    expect(wrapper.find("Form")).to.have.lengthOf(1);
  });
});
