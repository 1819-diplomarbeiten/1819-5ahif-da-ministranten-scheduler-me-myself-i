import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import { repeat } from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";
import {Participant} from "../Entities/Participant/participant";


export class ParticipantSettings extends LitElement{


    static get properties() {
        return {
            allParticipants: [],
            selectedParticipant: Participant,
            count:Number
        }
    }

    constructor() {
        super();
        this.allParticipants = [];
        this.allParticipants = HtmlService.getAllParticipant();
    }

    setForm(input) {

        if (this.selectedParticipant != null) {
            this.allParticipants[this.count].firstName = this.shadowRoot.getElementById('firstName').value;
            this.allParticipants[this.count].lastName = this.shadowRoot.getElementById('lastName').value;
            this.allParticipants[this.count].grad = this.shadowRoot.getElementById('grad').selectedOptions[0].innerText;
            this.allParticipants[this.count].userId = this.shadowRoot.getElementById('userName').value;
        }
        this.count = input - 1;
        this.selectedParticipant = null;
        this.selectedParticipant = new Participant();
        for (var i = 0;i < this.allParticipants.length;i++){
            if (this.allParticipants[i].participantId == input) {
                this.selectedParticipant = this.allParticipants[i];
                this.shadowRoot.getElementById('firstName').value = this.selectedParticipant.firstName;
                this.shadowRoot.getElementById('lastName').value = this.selectedParticipant.lastName;
                this.shadowRoot.getElementById('grad').selectedOptions[0].innerText = this.selectedParticipant.grad;
                this.shadowRoot.getElementById('userName').value = this.selectedParticipant.userId;
            }
        }
    }

    safeState(){
        if (this.selectedParticipant != null) {
            this.allParticipants[this.count].firstName = this.shadowRoot.getElementById('firstName').value;
            this.allParticipants[this.count].lastName = this.shadowRoot.getElementById('lastName').value;
            this.allParticipants[this.count].grad = this.shadowRoot.getElementById('grad').selectedOptions[0].innerText;
            this.allParticipants[this.count].userId = this.shadowRoot.getElementById('userName').value;
        }
        console.log("safe")
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/ParticipantSettings/styles.css">
        
        
        <a class="back-reply-button" @click="${() => this.safeState()}">
        
        </a>
        
        
        <h1 style="transform: translate(30%);">Mitarbeiter-Settings</h1>
        <br>
        <div class="col-sm-12 row" style="padding-top: 220px">
            <div class="col-md-7">
                <table id="table" class="table table-hover fixed_header">
                    <thead>
                        <tr>
                            <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
                            <td>Vorname</td>
                            <td>Nachname</td>
                            <td>Mitarbeiterkreis</td>
                            <td>zugewisene User</td>
                        </tr>
                    </thead>
                    <tbody>
                    ${repeat(this.allParticipants,(item) => html`
                                                        <tr @click="${() => this.setForm(item.participantId)}">
                                                            <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
                                                            <td>${item.firstName}</td>
                                                            <td>${item.lastName}</td>
                                                            <td>${item.grad}</td>
                                                            <td>${item.userId}</td>
                                                        </tr>`)}
                    </tbody>
                </table>
            </div>
            <div class="col-sm-4 form-border">
                <form class="login-form validate-input">
                    <div class="div-form">
                        <label>Vorname:</label>
                        <input id="firstName" type="text" class="form-control" >
                    </div>
                    <div class="div-form">
                        <label>Nachname:</label>
                        <input id="lastName" type="text" class="form-control" >
                    </div>
                    <div class="div-form">
                        <label>Kreis:</label>
                        <select class="form-control" id="grad">
                            <option selected class="form-control">Ministrant</option>
                            <option class="form-control">Lektor</option>
                        </select>
                    </div>
                    <div class="div-form">
                        <label>User:</label>
                        <input id="userName" type="text" class="form-control" >
                    </div>
                </form>
            </div>
        </div>
        `;
    }
}
window.customElements.define("participant-settings-component",ParticipantSettings)