import {LitElement} from '@polymer/lit-element';

export class Participant extends LitElement{

    static get properties() {
        //console.log("participant prop")
        return {
            participantId: Number,
            firstName: String,
            lastName: String,
            grad: String
        }
    }

    constructor() {
        super();
        console.log("constructor participant")
    }

    getParticipantId() {
        return this.participantId
    }
}
window.customElements.define("participant-component",Participant);