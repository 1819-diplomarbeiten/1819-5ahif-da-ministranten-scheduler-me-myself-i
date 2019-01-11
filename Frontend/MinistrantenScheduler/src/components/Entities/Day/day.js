import {LitElement} from '@polymer/lit-element';

export class Day extends LitElement {
    static get properties() {
        return{
            dayId:Number,
            dayDate:Date,
            available:Date,
            deadline:Date,
            appointments:[]
        }
    }


    constructor() {
        super();
    }

    setDayId(value) {
        this.dayId = value;
    }

    getDateId() {
        return this.dayId;
    }
    setDayDate(value) {
        this.dayDate = value;
    }
    getDayDate() {
        return this.dayDate;
    }
    setAvailable(value) {
        this.available = value;
    }
    getAvailable() {
        return this.available;
    }
    setDeadline(value) {
        this.deadline = value;
    }
    getDeadline() {
        return this.deadline;
    }
}
window.customElements.define("day-component",Day);