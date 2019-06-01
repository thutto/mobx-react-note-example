import React from "react";
import { expect } from "chai";
import Note from "./note";

const result = {
  mongoId: "TestMongoId",
  id: "1",
  note: "This is a test note",
  createDate: "Mar 25, 2019 6:08 am",
  archived: false
};
const createDate = "2019-03-25T10:08:50.134Z";

describe("Note Modal Test", function() {
  it("Build From JSON", function() {
    const jsonNote = {
      _id: "TestMongoId",
      id: "1",
      note: "This is a test note",
      createDate,
      archived: false,
      __v: 0
    };
    const note = new Note(jsonNote);
    expect(note).to.eql(result);
  });

  it("Format Date to a custom format", function() {
    const note = new Note();
    expect(note.formatDate(createDate, "MMM DD, Y")).to.equal("Mar 25, 2019");
  });

  it("Format Date with no date to be undefined", function() {
    const note = new Note();
    expect(note.formatDate()).to.be.undefined;
  });
});
