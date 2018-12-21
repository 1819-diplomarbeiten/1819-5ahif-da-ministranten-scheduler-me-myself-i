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

    setParticipantId(value) {
        this.participantId = value;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(value) {
        this.firstName = value;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(value) {
        this.lastName = value;
    }
    getGrad() {
        return this.grad;
    }
    setGrad(value) {
        this.grad = value;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(value) {
        this.userId = value;
    }
}
window.customElements.define("participant-component",Participant);