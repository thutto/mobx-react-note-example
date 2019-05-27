import React from "react";
import { expect } from "chai";
import { stub } from "sinon";
import noteStore from "../../stores/noteStore";
import { noteApi } from "../../apis";

const createStub = stub(noteApi, "createNote");
const addStub = stub(noteApi, "getNotes").returns({
  data: { notes: [{ note: "Test" }] }
});

describe("Note Store", function() {
  afterEach(function() {
    createStub.resetHistory();
    addStub.resetHistory();
  });

  it("Should be defined", function() {
    expect(noteStore).to.not.be.undefined;
  });

  it("Get Notes Calls API", async function() {
    noteStore.noteApi = noteApi;
    await noteStore.getNotes();
    expect(noteStore.notes).to.be.length(1);
    expect(noteStore.noteApi.getNotes.calledOnce).to.be.true;
  });

  it("Create Notes Calls API", async function() {
    noteStore.noteApi = noteApi;
    await noteStore.addNote("Test Note");
    expect(noteStore.notes).to.be.length(1);
    expect(noteStore.noteApi.getNotes.calledOnce).to.be.true;
    expect(noteStore.noteApi.createNote.calledOnce).to.be.true;
  });
});
