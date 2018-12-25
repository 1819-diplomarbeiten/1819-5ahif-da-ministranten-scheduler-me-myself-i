import {html,LitElement} from '@polymer/lit-element';
import {repeat} from '@polymer/lit-element/node_modules/lit-html/directives/repeat.js';
import {Participant} from "../Entities/Participant/participant";

export class CreateNewUser extends LitElement{

    static get properties() {
        return{
            getParticipants:[],
            count:Number
        }
    }

    constructor() {
        super();
        this.getParticipants = [];
        this.count = 0;
    }


    addEventParticipant() {
        var part = new Participant();
        this.count++;
        part.setParticipantId(this.count);
        this.getParticipants.push(part);
    }

    deleteEventParticipant() {
        this.getParticipants.pop();
        this.count--;
    }


    safeUser() {
        alert("Safe")
        this.getAllParticipants()
    }

    backComponent() {
        let root = document.querySelector("ministranten-verwaltung");
        let component = root.shadowRoot.querySelector("#components");
        component.innerHTML = `<church-event-component></church-event-component>`
    }

    getAllParticipants() {
        if (this.count > 0) {
            let it = this.shadowRoot;
            for (var i = 0;i < this.getParticipants.length;i++){
                this.getParticipants[i].firstName = it.getElementById('vor'+(i+1)).value;
                this.getParticipants[i].lastName = it.getElementById('nach'+(i+1)).value;
                if (it.getElementById('lector'+(i+1)).checked) {
                    this.getParticipants[i].grad = "Lector";
                }
                else {
                    this.getParticipants[i].grad = "Ministrant";
                }
            }
        }
        console.log("Hallo")
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jQuery/tmp/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" href="/src/components/CreateNewUser/styles.css">
        
        
        
        <div class="col-md-4">
        </div>
        <div class="col-md-6 row" style="padding: 30px;">
            <h1>Neuer User anlegen</h1>
            <div class="row">
            <br>
                <div class="col-sm-4">
                    <label>Username</label>
                    <input id="userName" type="text" class="form-control" placeholder="MaxMustermann">
                </div>
                <div class="col-sm-4">
                    <label>Passwort</label>
                    <input id="password" type="text" class="form-control" placeholder="Hallo1234">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-8">
                    <label>Email</label>
                    <input id="email" type="text" class="form-control" placeholder="max.mustermann@example.com">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-4">
                    <label>Telefonnummer</label>
                    <input id="tel1" type="text" class="form-control" placeholder="+43************">
                </div>
                <div class="col-sm-4">
                    <label>Zw. Telefonnummer<span class="text-muted">(Optional)</span></label>
                    <input id="tel2" type="text" class="form-control" placeholder="+43************">
                </div>
            </div>
            
            <div class="row">
                <hr class="col-sm-8">
            </div>
            
            <div class="row col-sm-4">
                <div class="custom-control custom-checkbox">
                    <input id="waRe" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label">WhatsApp rew.</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input id="emRe" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label">Email rew.</label>
                </div>
            </div>
            
            <div class="row">
                <hr class="col-sm-8">
            </div>
            <div id="addParticipant">
                ${repeat(this.getParticipants,(item) => html`
                                                            <div>
                                                                <div class="row">
                                                                    <h3>Teilnehmer anlegen</h3>
                                                                    <div class="col-sm-4">
                                                                        <label>Vorname</label>
                                                                        <input id="vor${item.participantId}" type="text" class="form-control" placeholder="Max">
                                                                    </div>
                                                                    <div class="col-sm-4">
                                                                        <label>Nachname</label>
                                                                        <input id="nach${item.participantId}" type="text" class="form-control" placeholder="Mustermann">
                                                                    </div>
                                                                </div>
                                                                <br>
                                                                <div class="row col-sm-4">
                                                                    <div class="custom-radio custom-control">
                                                                        <input id="minis${item.participantId}" type="radio" class="custom-control-input" >
                                                                        <label class="custom-control-label">Ministrant</label>
                                                                    </div>
                                                                    <div class="custom-radio custom-control">
                                                                        <input id="lector${item.participantId}" type="radio" class="custom-control-input">
                                                                        <label class="custom-control-label">Lektor</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br><br>
                `)}
               
            </div>
            <div class="row">
                <hr class="col-sm-8">
            </div>
            <div class="col-md-8" align="center">
                <button class="circle-plus" @click="${() => this.addEventParticipant()}"></button>
                <button class="circle-minus" @click="${() => this.deleteEventParticipant()}"></button>
                <br>
            </div>
            <div>
                <br>
            </div>
            <div class="col-md-8 button-print">
            <hr>
                <div class="button-stack col-md-12">
                    <button class="form-control text-color-back-button" @click="${() => this.backComponent()}">Zurück</button>
                </div>
                <div class="button-stack col-md-12">
                    <button class="form-control text-color-button" @click="${() => this.safeUser()}">Speichern</button>
                </div>
            </div>
        </div>
        <br>
        <br>

        
    `;
    }
}
window.customElements.define('create-user-component',CreateNewUser);