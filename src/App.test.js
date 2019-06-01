import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App component testing", function() {
  it("Renders Base Div", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App")).to.have.lengthOf(1);
  });
});
