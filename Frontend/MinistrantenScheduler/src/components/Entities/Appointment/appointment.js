//import {LitElement} from '@polymer/lit-element';

export class Appointment {


    static get properties() {
        return {
            appointmentId:Number,
            time:Date,
            required_Mini:Number,
            required_Lec:Number,
            dayId:Number,
            participants:[]
        }
    }

    constructor(appointmentId,time,required_Mini,required_Lec,dayId,participants) {
        //super();
        this.appointmentId = appointmentId;
        this.time = time;
        this.required_Mini = required_Mini;
        this.required_Lec = required_Lec;
        this.dayId = dayId;
        this.participants = [];
        this.participants = participants == undefined?[]:participants;
    }
}
//window.customElements.define("appointment-component",Appointment);