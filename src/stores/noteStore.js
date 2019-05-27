import { observable, action, runInAction } from "mobx";
import { noteApi } from "../apis";
import { Note } from "../models";

export class NoteStore {
  @observable notes;

  @action
  async getNotes() {
    try {
      const {
        data: { notes = [] }
      } = await noteApi.getNotes();
      runInAction(() => {
        this.notes = notes.map(note => new Note(note));
        // Add any need parsing logic.
      });
    } catch (err) {
      // TODO Handel Errors
      console.log(err);
    }
  }

  @action
  async addNote(noteText) {
    const noteObj = {
      id: "IDStubForBadAPI",
      note: noteText
    };
    try {
      await noteApi.createNote(noteObj);
      runInAction(async () => {
        await this.getNotes();
      });
    } catch (err) {
      // TODO Handel Errors
      console.log(err);
    }
  }
}

export default new NoteStore();
