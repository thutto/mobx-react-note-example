import React from "react";
import { configure, mount, shallow } from "enzyme";
import { observable, configure as mobxConf, action } from "mobx";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { stub, spy } from "sinon";
import AddNoteModal from "../../components/AddNoteModal";
import NoteStore from "../../stores/noteStore";

configure({ adapter: new Adapter() });
let createModalToggleSpy;

describe("AddNoteModal", function() {
  it("Renders", function() {
    const wrapper = shallow(<AddNoteModal />);
    expect(wrapper.find("Modal")).to.have.lengthOf(1);
  });
});
