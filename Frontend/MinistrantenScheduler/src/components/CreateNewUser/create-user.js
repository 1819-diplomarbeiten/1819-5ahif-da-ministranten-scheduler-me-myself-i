import {html,LitElement} from '@polymer/lit-element';
import {repeat} from '@polymer/lit-element/node_modules/lit-html/directives/repeat.js';
import {Participant} from "../Entities/Participant/participant";

export class CreateNewUser extends LitElement{

    static get properties() {
        return{
            anzahl: Number,
            realAnzahl: Number,
            test: String,
            getParticipants:{
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.anzahl = new Number();
        this.realAnzahl = new Number();
        this.test = "Hallo";
        this.anzahl = 0;
        this.realAnzahl = 0;


        this.push('getParticipants',"Kiwi");
        console.log(this.getParticipants.length);
    }

    addEventParticipant() {
        console.log("click geht");
        this.anzahl += 1;
        //console.log(anzahl);
        this.shadowRoot.getElementById('addParticipant').innerHTML += this.getParticipantLayout();
    }

    deleteEventParticipant() {
        this.realAnzahl = this.anzahl - 1;
        var newAllParticipant;
        let inp = 0;
        for (let i=0;i<this.realAnzahl;i++){
            newAllParticipant += this.getParticipantLayout()
            inp++;
        }
        this.anzahl=this.realAnzahl;
        this.shadowRoot.getElementById('addParticipant').innerHTML = ``;
        this.shadowRoot.getElementById('addParticipant').innerHTML = inp < 1 ?``: ``+newAllParticipant;
    }


    /**********************************************Participant-Layout**************************************************/
    getParticipantLayout() {
        return `<br>
            <div>
                <div class="row">
                    <h3>Teilnehmer anlegen</h3>
                    <div class="col-sm-4">
                        <label>Vorname</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm-4">
                        <label>Nachname</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <br>
                <div class="row col-sm-4">
                    <div class="custom-radio custom-control">
                        <input type="radio" class="custom-control-input">
                        <label class="custom-control-label">Ministrant</label>
                    </div>
                    <div class="custom-radio custom-control">
                        <input type="radio" class="custom-control-input">
                        <label class="custom-control-label">Lektor</label>
                    </div>
                </div>
            </div>
            <hr>`
    }

    /**********************************************Participant-Layout**************************************************/

    safeUser() {
        alert("Safe")
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
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
                    <input type="text" class="form-control" placeholder="MaxMustermann">
                </div>
                <div class="col-sm-4">
                    <label>Passwort</label>
                    <input type="text" class="form-control" placeholder="Hallo1234">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-8">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="max.mustermann@example.com">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-4">
                    <label>Telefonnummer</label>
                    <input type="text" class="form-control" placeholder="+43************">
                </div>
                <div class="col-sm-4">
                    <label>Zw. Telefonnummer<span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" placeholder="+43************">
                </div>
            </div>
            
            <div class="row">
                <hr class="col-sm-8">
            </div>
            
            <div class="row col-sm-4">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <label class="custom-control-label">WhatsApp rew.</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <label class="custom-control-label">Email rew.</label>
                </div>
            </div>
            
            <div class="row">
                <hr class="col-sm-8">
            </div>
            
            <div>
                <div class="row">
                    <h3>Teilnehmer anlegen</h3>
                    <div class="col-sm-4">
                        <label>Vorname</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm-4">
                        <label>Nachname</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <br>
                <div class="row col-sm-4">
                    <div class="custom-radio custom-control">
                        <input type="radio" class="custom-control-input">
                        <label class="custom-control-label">Ministrant</label>
                    </div>
                    <div class="custom-radio custom-control">
                        <input type="radio" class="custom-control-input">
                        <label class="custom-control-label">Lektor</label>
                    </div>
                </div>
            </div>
            <br>
            <div id="addParticipant">
            
                ${`
            <div>
                <div class="row">
                    <h3>Teilnehmer anlegen</h3>
                    <div class="col-sm-4">
                        <label>Vorname</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm-4">
                        <label>Nachname</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <br>
                <div class="row col-sm-4">
                    <div class="custom-radio custom-control">
                        <input type="radio" class="custom-control-input">
                        <label class="custom-control-label">Ministrant</label>
                    </div>
                    <div class="custom-radio custom-control">
                        <input type="radio" class="custom-control-input">
                        <label class="custom-control-label">Lektor</label>
                    </div>
                </div>
            </div>`.repeat(3)}
                
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
                <button class="col-md-8 form-control text-color-button" @click="${() => this.safeUser()}">Speichern</button>
            </div>
        </div>
        <br>
        <br>

        
    `;
    }
}
window.customElements.define('create-user-component',CreateNewUser);