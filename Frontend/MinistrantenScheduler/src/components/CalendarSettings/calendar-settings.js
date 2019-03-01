import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import  {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";
import {Day} from "../Entities/Day/day";
import {Appointment} from "../Entities/Appointment/appointment";


export class CalenderSettings extends LitElement{


    static get properties() {
        return{
            allDays:[],
            selectedDayApp:[],
            allSelection:Number,
            selectedApp:[]
        }
    }

    constructor() {
        super();
        this.allDays = [];
        this.selectedDayApp = [];
        this.selectedApp = [];
        this.allSelection = 0;
        this.allDays = HtmlService.getAllDays();
    }


    safeState() {
        let root = document.querySelector("ministranten-verwaltung");
        let component = root.shadowRoot.querySelector("#components");
        component.innerHTML = `<church-event-component></church-event-component>`
    }



    /*
    *
    * checked ob Tag ausgewählt wurde
    * */
    checkedDay(item) {




        /*wenn im Array das gewünschte Element nicht vorhanden ist */
        if (!this.selectedDayApp.find(p => p.dayId == item.dayId)) {
            this.shadowRoot.getElementById("picker" + item.dayId).checked = true;
            item.appointments.map(i => { /*holt von der liste nur die Termine heraus*/
                this.selectedDayApp.push(i);
                this.allSelection++;
            });
        } else {
            this.shadowRoot.getElementById("picker" + item.dayId).checked = false;
            let newSelected = [];
            this.allSelection = 0;
            this.selectedDayApp.map(i => { /* erstellung eines neuen Arrays und so zu sagen löschung der der nicht mehr verwendeten Elementen*/
                if (item.dayId != i.dayId) {
                    newSelected.push(i);
                    this.allSelection++;
                }
            });
            //item.appointments.map(i => this.checkedAppointment(i,false))
            this.selectedDayApp = newSelected;
            this.selectedApp = [];
            this.backChecker()
        }
    }

    backChecker() {
        this.selectedDayApp.map(i => this.shadowRoot.getElementById("select"+ i.appointmentId)).checked = false;
    }


    /*
    *
    * checked Termine auswählen
    * */
    checkedAppointment(item,bool) {
        if (this.selectedApp.find(p => p.appointmentId == item.appointmentId)|| bool == false) {
            this.shadowRoot.getElementById("select" + item.appointmentId).checked = false;
            let newSelected = [];
            this.selectedApp.map(i => {
                if (item.appointmentId != i.appointmentId) {
                    newSelected.push(i);
                }
            });
            this.selectedApp = newSelected;
        } else {
            this.shadowRoot.getElementById("select" + item.appointmentId).checked = true;
            this.selectedApp.push(item);
        }
    }

    getAppointmentDay(item) {
        let day = this.allDays.find(p => p.dayId == item.dayId);
        return Day.toDate(day.dayDate);
    }


    deleteAppointment() {

    }


    /******************************************Render******************************************************************/
    render() {
        $(document).ready(() => {
            let button = this.shadowRoot.getElementById("deleteButton");
            this.selectedDayApp == 0 ? button.hidden = true: button.hidden = false;
        });
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/CalendarSettings/styles.css">
        
        <a class="back-reply-button" @click="${() => this.safeState()}">
        
        </a>
        
        
        <h1>Kalender-Settings</h1>
        <br>
        <div class="col-md-12 row format-style">
            <div class="col-md-6">
                <table id="table" class="table fixed_header table-hover">
                    <thead>
                        <tr>
                            <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser" disabled="true"></td>
                            <td>Tag</td>
                            <td>verfügbar ab</td>
                            <td>bearbeitbar bis</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(this.allDays, (item) => html`
                                                    <tr @click="${() => this.checkedDay(item)}">
                                                        <td><input class="input-checkbox" id="picker${item.dayId}" type="checkbox" name="chooser" disabled="true"></td>
                                                        <td>${Day.toDate(item.dayDate)}</td>
                                                        <td>${Day.toDate(item.available)}</td>
                                                        <td>${Day.toDate(item.deadline)}</td>
                                                    </tr>`)}
                    </tbody>
                </table>
            </div>
            <div class="col-md-5">
                <table class="table table-hover fixed_header">
                    <thead>
                        <tr>
                            <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser" disabled="true"></td>
                            <td>Tag</td>
                            <td>Uhrzeit</td>
                            <td>Bed. Minis</td>
                            <td>Bed. Lektor</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(this.selectedDayApp, (item) => html`
                                                        <tr @click="${() => this.checkedAppointment(item,true)}">
                                                            <td><input class="input-checkbox" id="select${item.appointmentId}" type="checkbox" name="chooser" disabled="true"></td>
                                                            <td>${this.getAppointmentDay(item)}</td>
                                                            <td>${item.time}</td>
                                                            <td>${item.required_Mini}</td>
                                                            <td>${item.required_Lec}</td>
                                                        </tr>
                        `)}
                    </tbody>
                </table>
                <div class="button-format">
                    <button id="deleteButton" @click="${() => this.deleteAppointment()}" class="btn btn-danger button-style">Löschen</button>
                </div>
            </div>
        </div>
        `;
    }
}
window.customElements.define("calendar-settings-component",CalenderSettings);