import React from "react";
import { observable, configure as mobxConf, action } from "mobx";
import { shallow, configure, mount } from "enzyme";
import { expect } from "chai";
import { stub } from "sinon";
import Adapter from "enzyme-adapter-react-16";
import NoteStore from "../stores/noteStore";
import { noteApi } from "../apis";
import NoteList from "./NoteList";
import { Note } from "../models";

configure({ adapter: new Adapter() });
describe("Note List", function() {
  let store;
  beforeEach(() => {
    mobxConf({ enforceActions: "never" });
    store = observable(NoteStore);
    store.notes = [new Note({ note: "test", _id: "1" })];
  });

  it("is an observer of notes", () => {
    let wrapper = mount(<NoteList noteStore={store} />);
    expect(wrapper.find("ul.list-group")).to.have.lengthOf(1);
    expect(wrapper.find(".list-group-item")).to.have.lengthOf(1);
    store.notes.push(new Note({ note: "test 2", _id: "2" }));
    wrapper.update();
    expect(wrapper.find("li.list-group-item").length).to.equal(2);
  });
});
