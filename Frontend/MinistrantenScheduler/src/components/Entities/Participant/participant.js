import {LitElement} from '@polymer/lit-element';

export class Participant extends LitElement{

    static get properties() {
        return {
            participantId: Number,
            firstName: String,
            lastName: String,
            grad: String,
            userId: Number
        }
    }

    constructor() {
        super();
    }

    getParticipantId() {
        return this.participantId
    }
}
window.customElements.define("participant-component",Participant);