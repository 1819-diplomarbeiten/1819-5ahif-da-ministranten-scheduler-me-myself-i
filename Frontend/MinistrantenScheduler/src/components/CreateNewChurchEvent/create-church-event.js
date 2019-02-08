import {LitElement,html} from '@polymer/lit-element';
import {repeat} from '@polymer/lit-element/node_modules/lit-html/directives/repeat.js';
import {Appointment} from "../Entities/Appointment/appointment";
import {Day} from "../Entities/Day/day";
import {HtmlService} from "../../services/HtmlClientService/html-service";

export class CreateNewChurchEvent extends LitElement{

    static get properties() {
        return{
            getDays:Day,
            getAppointments:[],
            count:Number
        }
    }

    constructor() {
        super();
        this.getDay = new Day();
        this.getAppointments = [];
        this.count = 0;
    }

    addEventChurch() {
        var apps = new Appointment();
        this.count++;
        apps.appointmentId = this.count;
        this.getAppointments.push(apps);
    }

    deleteEventChurch() {
        this.getAppointments.pop();
        this.count--;
    }

    safeDay() {
        alert("Safe");
        this.getAllDayDatas();
        console.log(this.getDay)
    }

    backComponent() {
        let root = document.querySelector("ministranten-verwaltung");
        let component = root.shadowRoot.querySelector("#components");
        component.innerHTML = `<church-event-component></church-event-component>`
    }

    getAllDayDatas() {
        let elem = this.shadowRoot;
        this.getAllAppointments();
        let format = "yyyy-MM-dd";
        let deliminator = "-";
        this.getDay = new Day(0,HtmlService.stringToDate(elem.getElementById('datetime').value,format,deliminator),
            HtmlService.stringToDate(elem.getElementById('available').value,format,deliminator),
            HtmlService.stringToDate(elem.getElementById('deadline').value,format,deliminator),
            this.getAppointments);
    }

    getAllAppointments() {
        if (this.count > 0) {
            let it = this.shadowRoot;
            for (var i = 0;i < this.getAppointments.length;i++){
                this.getAppointments[i].time = it.getElementById('time'+(i+1)).value;



                this.getAppointments[i].required_Mini = it.getElementById('minMin'+(i+1)).value;
                this.getAppointments[i].required_Lec = it.getElementById('minLec'+(i+1)).value;
            }
        }
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" href="/src/components/CreateNewChurchEvent/styles.css">
        
        <div class="form-style">      
            <div class="col-md-9">     
                <h1>Neue Messe anlegen</h1>           
                <div class=" row">                
                    <div class="col-md-3">
                        <label>Datum</label>
                        <input id="datetime" type="date" class="form-control">
                    </div>
                    <div class="col-md-3">
                        <label>Verfügbar ab</label>
                        <input id="available" type="date" class="form-control">
                    </div>
                    <div class="col-md-3">
                        <label>Frist bis</label>
                        <input id="deadline" type="date" class="form-control">
                    </div>
                </div>
                <div id="addAppointment">
                    ${repeat(this.getAppointments,(item) => html`<hr class="row" style="width: 78%;">
                                                                <div>
                                                                    <h3>Termin</h3>
                                                                    <div class="row">
                                                                        <br>
                                                                        <div class="col-sm-3">
                                                                            <label>Uhrzeit</label>
                                                                            <input id="time${item.appointmentId}" type="time" class="form-control">
                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <label>min. Ministranten</label>
                                                                            <input id="minMin${item.appointmentId}" type="number" class="form-control">
                                                                        </div> 
                                                                        <div class="col-sm-3">
                                                                            <label>min. Lektoren</label>
                                                                            <input id="minLec${item.appointmentId}" type="number" class="form-control">
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                                
                    `)}
                
                
                
                </div>
                <hr class="row" style="width: 78%;">
                <div class="col-md-8" align="center">
                    <button class="circle-plus" @click="${() => this.addEventChurch()}"></button>
                    <button class="circle-minus" @click="${() => this.deleteEventChurch()}"></button>
                    <br>
                </div>
                <hr class="row" style="width: 78%;">
                <div class="col-md-8 button-print row"> 
                    <div class="button-stack col-md-4">
                        <button class="form-control text-color-back-button" @click="${() => this.backComponent()}">Zurück</button>
                    </div>
                    <div class="button-stack col-md-4">
                        <button class="form-control text-color-button" @click="${() => this.safeDay()}">Speichern</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

}
window.customElements.define('create-church-event-component',CreateNewChurchEvent);