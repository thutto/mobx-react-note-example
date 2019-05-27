import moment from "moment";
import { observable } from "mobx";

export default class Note {
  @observable mongoId; //String
  @observable id; //String
  @observable note; //String
  @observable createDate; //Date
  @observable archived; //Boolean

  constructor(json = {}) {
    this.mongoId = json._id;
    this.id = json.id;
    this.note = json.note;
    this.createDate = this.formatDate(json.createDate);
    this.archived = json.archived;
  }

  formatDate(dateString, format = "MMM DD, Y h:mm a") {
    if (dateString) {
      return moment(dateString).format(format);
    }
    return undefined;
  }
}
