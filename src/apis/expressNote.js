const axios = require("axios");

// import store if needed
// Make axios config driven (https://github.com/axios/axios#axios-api)
const path = "http://localhost:7700";

class NoteApi {
  async getNotes() {
    try {
      const response = await axios.get(`${path}/notes`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async createNote(note) {
    try {
      const response = await axios.post(`${path}/note`, note);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default new NoteApi();
