import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import { repeat } from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";

export class ParticipantSettings extends LitElement{


    static get properties() {
        return {
            allParticipants: {
                type: Array
            },
            normal:String
        }
    }

    constructor() {
        super();
        this.allParticipants = HtmlService.getAllParticipant()
        console.log(this.allParticipants.length)
        this.normal = "Hallo"
    }


    setTest(input,id) {
        console.log(input+' '+id)
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
                    <tbody id="participants">
                    ${repeat(this.allParticipants,(item) => html`
                                                        <tr @click="${() => this.setTest(item.firstName,item.participantId)}">
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
                        <label>User:</label>
                        <input id="userName" type="text" class="form-control" value="">
                    </div>
                </form>
            </div>
        </div>
        `;
    }
}
window.customElements.define("participant-settings-component",ParticipantSettings)