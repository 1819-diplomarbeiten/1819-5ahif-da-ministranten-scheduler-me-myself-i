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
    }


    backToMain() {
        let root = document.querySelector("ministranten-verwaltung");
        let component = root.shadowRoot.querySelector('#components');
        component.innerHTML = `<church-event-component></church-event-component>`;
    }

    safeObject() {
        alert("Gespeichert");
        this.backToMain();
    }
    render() {
        return html`
                <!--======================================Wichtig==================================================-->
                <script lang="javascript" src="/node_modules/jQuery/tmp/jquery.js"></script>
                <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
                <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
                <!--===============================================================================================-->
                <link rel="stylesheet" type="text/css" href="/src/components/AccountSetting/styles.css">
                <div class="form-settings">
                    <h1>Mein Account</h1>
                    
                    <form>
                        <div class="row form-settings">
                            <label class="label-set">Username:</label>
                            <input class="input-set" type="text" id="userName">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Password:</label>
                            <input class="input-set" type="text" id="password">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Email:</label>
                            <input class="input-set" type="text" id="email">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Telefon:</label>
                            <input class="input-set" type="number" id="phone">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set">Zweites Telefon:</label>
                            <input class="input-set" type="number" id="phoneSec">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set-checkbox">Whatsapp Erinnerung:</label>
                            <input class="input-set-checkbox" type="checkbox" id="whatsappRe">
                        </div>
                        <div class="row form-settings">
                            <label class="label-set-checkbox">Email Erinnerung:</label>
                            <input class="input-set-checkbox" type="checkbox" id="emailRe">
                        </div>
                        
                            ${repeat(this.selectedUser[0].participants,(item) => html`
                                                                                <div class="form-settings">
                                                                                    <form>
                                                                                    <h2>Mitarbeiter</h2>
                                                                                        <div>
                                                                                            <div class="row form-settings">
                                                                                                <label class="label-set">Vorname</label>
                                                                                                <input class="input-set" type="text" id="Vor${item.participantId}">
                                                                                            </div>
                                                                                            <div class="row form-settings">
                                                                                                <label class="label-set">Nachname</label>
                                                                                                <input class="input-set" type="text" id="Nach${item.participantId}">
                                                                                            </div>
                                                                                            <div class="row form-settings">
                                                                                                <label class="label-set">Mitarbeiterkreis</label>
                                                                                                <input class="input-set" type="text" id="grad${item.participantId}">
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                            `)}
                        
                    </form>
                    <div class="button-styling">
                        <button class="btn btn-danger btn-back" @click="${() => this.backToMain()}">Zurück</button>
                        <button class="btn btn-success btn-safe" @click="${() => this.safeObject()}">Speichern</button>
                    </div>
                </div>
        
        
        
        `;
    }
}
window.customElements.define('account-setting-component',AccountSetting);