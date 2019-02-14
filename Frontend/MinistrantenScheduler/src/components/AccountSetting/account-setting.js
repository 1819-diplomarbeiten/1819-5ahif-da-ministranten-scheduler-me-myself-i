import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import {User} from "../Entities/User/user";
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";

export class AccountSetting extends LitElement{
    static get properties() {
        return{
            selectedUser:User
        }
    }


    constructor() {
        super();
        this.selectedUser = new User();
        this.selectedUser = HtmlService.getUserById(1);
        let current = this.shadowRoot;

    }


    /*
    *
    *Zurück gehen zur Startseite
    *
    * */
    backToMain() {
        let root = document.querySelector("ministranten-verwaltung");
        let component = root.shadowRoot.querySelector('#components');
        component.innerHTML = `<church-event-component></church-event-component>`;
    }

    /*
    *
    * Safe der letzten Änderung der Daten
    *
    * */
    safeState() {
        alert("Gespeichert");
        this.backToMain();
    }

    /*
    *
    * Überprüft ob Checkbox gechecked ist
    *
    * */
    getCheckerWA() {
        if(this.selectedUser != null) {
            if (this.selectedUser.whatsAppRe == true) {
                this.shadowRoot.getElementById('whatsappRe').checked = true;
            }
            else {
                this.shadowRoot.getElementById('whatsappRe').checked = false;
            }
        }
    }

    /*
    *
    * Überprüft ob Checkbox gechecked ist
    *
    * */
    getCheckerEM() {
        if(this.selectedUser != null) {
            if (this.selectedUser.emailRe == true) {
                this.shadowRoot.getElementById('emailRe').checked = true;
            }
            else {
                this.shadowRoot.getElementById('emailRe').checked = false;
            }
        }
    }


    /***********************************************render*************************************************************/
    render() {
        $(document).ready(() => {
            this.getCheckerEM();
            this.getCheckerWA();
        });
        return html`
                <!--======================================Wichtig==================================================-->
                <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
                <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
                <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
                <!--===============================================================================================-->
                <link rel="stylesheet" type="text/css" href="/src/components/AccountSetting/styles.css">
                <div class="form-settings">
                    <h1>Mein Account</h1>
                    
                    <form>
                        <div class="row form-settings">
                            <label class="label-set">Username:</label>
                            <input class="input-set" type="text" id="userName" value="${this.selectedUser.userName}">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Password:</label>
                            <input class="input-set" type="text" id="password" value="${this.selectedUser.password}">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Email:</label>
                            <input class="input-set" type="text" id="email" value="${this.selectedUser.email}">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Telefon:</label>
                            <input class="input-set" type="number" id="phone" value="${this.selectedUser.phoneNumber}">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Zweites Telefon:</label>
                            <input class="input-set" type="number" id="phoneSec" value="${this.selectedUser.secPhoneNumber}">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set-checkbox">Whatsapp Erinnerung:</label>
                            <input class="input-set-checkbox" type="checkbox" id="whatsappRe" >
                        </div>
                        <div class="row form-settings">
                            <label class="label-set-checkbox">Email Erinnerung:</label>
                            <input class="input-set-checkbox" type="checkbox" id="emailRe">
                        </div>
                        
                            ${repeat(this.selectedUser.participants,(item) => html`
                                                                                <div class="form-settings">
                                                                                    <form>
                                                                                    <h2>Mitarbeiter</h2>
                                                                                        <div>
                                                                                            <div class="row form-settings">
                                                                                                <label class="label-set">Vorname</label>
                                                                                                <input class="input-set" type="text" id="Vor${item.participantId}" value="${item.firstName}">
                                                                                            </div>
                                                                                            <div class="row form-settings">
                                                                                                <label class="label-set">Nachname</label>
                                                                                                <input class="input-set" type="text" id="Nach${item.participantId}" value="${item.lastName}">
                                                                                            </div>
                                                                                            <div class="row form-settings">
                                                                                                <label class="label-set">Mitarbeiterkreis</label>
                                                                                                <input class="input-set" type="text" id="grad${item.participantId}" value="${item.grad}" disabled>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                            `)}
                        
                    </form>
                    <div class="button-styling">
                        <button class="btn btn-danger btn-back" @click="${() => this.backToMain()}">Zurück</button>
                        <button class="btn btn-success btn-safe" @click="${() => this.safeState()}">Speichern</button>
                    </div>
                </div>
        
        
        
        `;
    }
}
window.customElements.define('account-settings-component',AccountSetting);