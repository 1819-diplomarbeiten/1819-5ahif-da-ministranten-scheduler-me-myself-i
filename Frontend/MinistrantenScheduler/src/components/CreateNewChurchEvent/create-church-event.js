import {LitElement,html} from '@polymer/lit-element';
import {repeat} from '@polymer/lit-element/node_modules/lit-html/directives/repeat.js';
import {Appointment} from "../Entities/Appointment/appointment";

export class CreateNewChurchEvent extends LitElement{

    static get properties() {
        return{
            getAppointments:[],
            count:Number
        }
    }

    constructor() {
        super();
        this.getAppointments = [];
        this.count = 0;
    }

    addEventChurch() {
        var apps = new Appointment();
        this.count++;
        apps.setAppointmentId(this.count);
        this.getAppointments.push(apps);
    }

    deleteEventChurch() {
        this.getAppointments.pop();
        this.count--;
    }

    safeDay() {
        alert("Safe");
        this.getAllAppointments()
    }

    backComponent() {
        let root = document.querySelector("ministranten-verwaltung");
        let component = root.shadowRoot.querySelector("#components");
        component.innerHTML = `<church-event-component></church-event-component>`
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
        console.log("Hallo du");
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jQuery/tmp/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" href="/src/components/CreateNewChurchEvent/styles.css">
        
        <div>
            <div class="col-md-2"></div>
            <div class="col-md-9">                
                <div class=" row">
                    <h1>Neue Messe anlegen</h1>
                    <div class="col-sm-3">
                        <label>Datum</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <label>Verfügbar ab</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <label>Frist bis</label>
                        <input type="date" class="form-control">
                    </div>
                </div>
                <div id="addAppointment">
                    ${repeat(this.getAppointments,(item) => html`<hr>
                                                                <div class="row">
                                                                    <h3>Termin</h3>
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
                                                                <hr>
                    `)}
                
                
                
                </div>
                <hr>
                <div class="col-md-8" align="center">
                    <button class="circle-plus" @click="${() => this.addEventChurch()}"></button>
                    <button class="circle-minus" @click="${() => this.deleteEventChurch()}"></button>
                    <br>
                </div>
                <div class="col-md-8 button-print">
                    <hr>
                    <div class="button-stack col-md-12">
                        <button class="form-control text-color-back-button" @click="${() => this.backComponent()}">Zurück</button>
                    </div>
                    <div class="button-stack col-md-12">
                        <button class="form-control text-color-button" @click="${() => this.safeDay()}">Speichern</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

}
window.customElements.define('create-church-event-component',CreateNewChurchEvent);