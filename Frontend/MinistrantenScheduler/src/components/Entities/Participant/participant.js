//import {LitElement} from '@polymer/lit-element';

export class Participant {

    static get properties() {
        return {
            participantId: Number,
            firstName: String,
            lastName: String,
            grad: String,
            userId: Number,
            appointments: []
        }
    }


    constructor(participantId,firstName,lastName,grad,userId,appointments) {
        this.participantId = participantId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grad = grad;
        this.userId = userId;
        this.appointments = [];
        this.appointments = appointments == undefined?[]:appointments;
    }


    toNameString() {
        return "" + this.firstName + " " + this.lastName + "";
    }


}
//window.customElements.define("participant-component",Participant);