import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import { repeat } from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";
import {Participant} from "../Entities/Participant/participant";

export class ParticipantSettings extends LitElement{


    static get properties() {
        return {
            allParticipants: {
                type: Array
            },
            selectedParticipant: Participant
        }
    }

    constructor() {
        super();
        this.allParticipants = HtmlService.getAllParticipant();
        //this.selectedParticipant = new Participant();

    }

    setForm(input) {
        this.selectedParticipant = input;
        console.log("click");
    }

    


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/ParticipantSettings/styles.css">
        
        
        
        <h1 style="display: block; align-items: center;">Mitarbeiter-Settings</h1>
        <br>
        <div class="col-sm-12" style="padding-top: 220px">
            <div class="col-md-8">
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
                                                        <tr @click="${() => this.setForm(item)}">
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
                        <input id="firstName" type="text" class="form-control" value="${this.selectedParticipant== null ?  " " :  this.selectedParticipant.firstName}">
                    </div>
                    <div class="div-form">
                        <label>Nachname:</label>
                        <input id="lastName" type="text" class="form-control" value="${this.selectedParticipant == null ? " " : this.selectedParticipant.lastName}">
                    </div>
                    <div class="div-form">
                        <label>Kreis:</label>
                        <input id="grad" type="text" class="form-control" value="${this.selectedParticipant == null ? " " : this.selectedParticipant.grad}">
                    </div>
                    <div class="div-form">
                        <label>User:</label>
                        <input id="userName" type="text" class="form-control" value="${this.selectedParticipant == null ? " " : this.selectedParticipant.userId}">
                    </div>
                </form>
            </div>
        </div>
        `;
    }
}
window.customElements.define("participant-settings-component",ParticipantSettings)