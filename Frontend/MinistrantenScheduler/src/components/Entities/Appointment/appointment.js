//import {LitElement} from '@polymer/lit-element';

export class Appointment {


    static get properties() {
        return {
            appointmentId:Number,
            time:String,
            required_Mini:Number,
            required_Lec:Number,
            dayId:Number,
            participants:[]
        }
    }

    constructor(appointmentId,time,required_Mini,required_Lec,dayId,participants) {
        this.appointmentId = appointmentId;
        this.time = time;
        this.required_Mini = required_Mini;
        this.required_Lec = required_Lec;
        this.dayId = dayId;
        this.participants = [];
        this.participants = participants == undefined?[]:participants;
    }


    addParticipants(item) {
        if (this.participants.count == null) {
            this.participants.push(item);
            item.addAppointments(this);
            return true;
        }
        let minis = this.participants.filter(p => p.grad == "Ministrant");
        let lec = this.participants.filter(p=> p.grad = "Lektor");
        if (item.grad == "Ministrant" && minis.count < this.required_Mini) {
            this.participants.push(item);
            item.addAppointments(this);
            return true;
        }
        if (item.grad == "Lektor" && lec.count < this.required_Lec) {
            this.participants.push(item);
            item.addAppointments(this);
            return true;
        }
        return false;
    }

    removeParticipant(item) {
        let searchItem = this.participants.find(p => p.participantId == item.participantId);
        this.participants.splice(this.participants.indexOf(searchItem),1);
        searchItem.removeAppointment(this);
    }
}
//window.customElements.define("appointment-component",Appointment);