import { LitElement } from "../../../node_modules/@polymer/lit-element/lit-element.js";
import { Participant } from '../../components/Entities/Participant/participant.js';
export class HtmlClient extends LitElement {
  static get properties() {
    return {
      datas: Array(typeof Participant)
    };
  }

  constructor() {
    super();
    console.log("constructor html geht");
    this.datas.push([{
      participantId: 1,
      lastName: "Herbert",
      firstName: "Franz",
      grad: "Ministrant"
    }(Participant), {
      participantId: 2,
      firstName: "Max",
      lastName: "Mustermann",
      grad: "Ministrant"
    }(Participant), {
      participantId: 3,
      firstName: "Lisa",
      lastName: "Hermann",
      grad: "Ministrant"
    }(Participant), {
      participantId: 4,
      firstName: "Franz",
      lastName: "Buschmann",
      grad: "Ministrant"
    }(Participant)]);
  }

  static getAllParticipant() {
    return this.datas;
  }

}