import {html,LitElement} from '@polymer/lit-element';
import {repeat} from '@polymer/lit-element/node_modules/lit-html/directives/repeat.js';
import {Participant} from "../Entities/Participant/participant";
import {User} from "../Entities/User/user";

export class CreateNewUser extends LitElement{

    static get properties() {
        return{
            getUser:User,
            getParticipants:[],
            count:Number
        }
    }

    constructor() {
        super();
        this.getParticipants = [];
        this.count = 0;
    }


    /*
    *
    * Hinzufügung eines weiteren Teilnehmer
    *
    * */
    addEventParticipant() {
        var part = new Participant();
        this.count++;
        part.participantId = this.count;
        this.getParticipants.push(part);
    }

    /*
    *
    * Löschung des weiteren Teilnehmer
    *
    * */
    deleteEventParticipant() {
        this.getParticipants.pop();
        this.count--;
    }


    /*
    *
    * Speichert und Merged alle Daten
    *
    * */
    safeUser() {
        alert("Safe")
        this.getAllUserDatas();
        console.log(this.getUser)
    }

    /*
    *
    *Zurück gehen zur Startseite
    *
    * */
    backComponent() {
        let root = document.querySelector("ministranten-verwaltung");
        let component = root.shadowRoot.querySelector("#components");
        component.innerHTML = `<church-event-component></church-event-component>`
    }

    /*
    *
    * Hollt alle Daten und steckt sie in eine User Klasse
    *
    * */
    getAllUserDatas() {
        let elem = this.shadowRoot;
        this.getAllParticipants();
        this.getUser = new User(0,elem.getElementById('userName').value,
            elem.getElementById('password').value,
            elem.getElementById('email').value,
            elem.getElementById('tel1').value,
            elem.getElementById('tel2').value,
            elem.getElementById('waRe').checked,
            elem.getElementById('emRe').checked,
            this.getParticipants);
    }

    /*
    *
    * Hollt alle Daten die sich im Repeater befinden und steckt sie in die Klasse Teilnehemer
    *
    * */
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
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->    
        <link rel="stylesheet" href="/src/components/CreateNewUser/styles.css">
        
        
        
        
        <div class="form-style">
            <div class="col-md-6">
                <h1>Neuer User anlegen</h1>
                <div class="row">
                <br>
                    <div class="col-sm-4">
                        <label>Username:</label>
                        <input id="userName" type="text" class="form-control" placeholder="MaxMustermann">
                    </div>
                    <div class="col-sm-4">
                        <label>Passwort:</label>
                        <input id="password" type="text" class="form-control" placeholder="Hallo1234">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm-8">
                        <label>Email</label>
                        <input id="email" type="text" class="form-control" placeholder="max.mustermann@example.com" >
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm-4">
                        <label>Telefonnummer</label>
                        <input id="tel1" type="text" class="form-control" placeholder="+43************" pattern="">
                    </div>
                    <div class="col-sm-4">
                        <label>Zw. Telefonnummer<span class="text-muted">(Optional)</span></label>
                        <input id="tel2" type="text" class="form-control" placeholder="+43************">
                    </div>
                </div>
                
                <hr class="row" style="width: 70%;">
                
                <div class="row col-sm-6">
                    <div class="custom-control custom-checkbox" style="padding-right: 10%;">
                        <input id="waRe" type="checkbox" class="custom-control-input">
                        <label for="waRe" class="custom-control-label">WhatsApp rew.</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input id="emRe" type="checkbox" class="custom-control-input">
                        <label for="emRe" class="custom-control-label">Email rew.</label>
                    </div>
                </div>
                
                <hr class="row" style="width: 70%;">
                <div id="addParticipant">
                    ${repeat(this.getParticipants,(item) => html`
                                                                <div>
                                                                    <h3>Teilnehmer anlegen</h3>
                                                                    <div class="row">
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
                                                                        <div class="custom-radio custom-control custom-style">
                                                                            <input id="minis${item.participantId}" type="radio" class="custom-control-input" name="grad">
                                                                            <label for="minis${item.participantId}" class="custom-control-label">Ministrant</label>
                                                                        </div>
                                                                        <div class="custom-radio custom-control custom-style">
                                                                            <input id="lector${item.participantId}" type="radio" class="custom-control-input" name="grad">
                                                                            <label for="lector${item.participantId}" class="custom-control-label">Lektor</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br><br>
                    `)}
                   
                </div>
                <hr class="row" style="width: 70%;">
                <div class="col-md-8" align="center">
                    <button class="circle-plus" @click="${() => this.addEventParticipant()}"></button>
                    <button class="circle-minus" @click="${() => this.deleteEventParticipant()}"></button>
                    <br>
                </div>
                <div class="button-print row">
                    <div class="button-stack col-md-4">
                        <button class="form-control text-color-back-button" @click="${() => this.backComponent()}">Zurück</button>
                    </div>
                    <div class="button-stack col-md-4">
                        <button class="form-control text-color-button" @click="${() => this.safeUser()}">Speichern</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}
window.customElements.define('create-user-component',CreateNewUser);