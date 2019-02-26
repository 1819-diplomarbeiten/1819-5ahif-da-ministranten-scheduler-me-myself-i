//import {LitElement} from '@polymer/lit-element';

export class Day {
    static get properties() {
        return{
            dayId:Number,
            dayDate:Date,
            available:Date,
            deadline:Date,
            appointments:[]
        }
    }


    constructor(dayId,dayDate,available,deadline,appointments) {
        this.dayId = dayId;
        this.dayDate = dayDate;
        this.available = available;
        this.deadline = deadline;
        this.appointments = [];
        this.appointments = appointments;
    }

    toDayString() {
        return "" + this.dayDate.getDate() + "-" + (this.dayDate.getMonth()+1) + "-" + this.dayDate.getFullYear() + "";
    }

    static toMonths(input) {
        let allMonths = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
        return allMonths.slice(input-1,input);
    }

}
//window.customElements.define("day-component",Day);