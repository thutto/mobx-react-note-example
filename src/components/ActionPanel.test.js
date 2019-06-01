import React from "react";
import { configure, mount, shallow } from "enzyme";
import { observable, configure as mobxConf, action } from "mobx";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { stub, spy } from "sinon";
import ActionPanel from "./ActionPanel";
import NoteStore from "../stores/noteStore";

configure({ adapter: new Adapter() });
let createModalToggleSpy;

describe("Action Panel", function() {
  it("Renders", function() {
    const wrapper = shallow(<ActionPanel />);
    expect(wrapper.find("Button")).to.have.lengthOf(1);
  });

  it("Clicking button calls modal open", function() {
    const wrapper = shallow(<ActionPanel />);
    createModalToggleSpy = spy(wrapper.instance(), "createModalToggle");
    wrapper.instance().forceUpdate();
    expect(wrapper.find("Button")).to.have.lengthOf(1);
    wrapper.find("Button").simulate("click");

    expect(createModalToggleSpy.called).to.be.true;
  });
});
