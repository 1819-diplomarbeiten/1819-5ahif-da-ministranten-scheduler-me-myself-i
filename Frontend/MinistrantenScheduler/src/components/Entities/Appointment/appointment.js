import {LitElement} from '@polymer/lit-element';

export class Appointment extends LitElement {


    static get properties() {
        return {
            appointmentId:Number,
            time:Date,
            required_Mini:Number,
            required_Lec:Number,
            dayId:Number
        }
    }

    constructor() {
        super();
    }

    getAppointmentId() {
        return this.appointmentId;
    }

    setAppointmentId(value) {
        this.appointmentId = value;
    }

    getTimeDate() {
        return this.time;
    }
    setTimeDate(value){
        this.time = value;
    }

    getRequiredMinistrant() {
        return this.required_Mini;
    }
    setRequiredMinistrant(value) {
        this.required_Mini = value;
    }
    getRequiredLector() {
        return this.required_Lec;
    }
    setRequiredLector(value) {
        this.required_Lec = value;
    }

    setDayId(value) {
        this.dayId = value
    }

    getDayId() {
        return this.dayId;
    }
}
window.customElements.define("appointment-component",Appointment);