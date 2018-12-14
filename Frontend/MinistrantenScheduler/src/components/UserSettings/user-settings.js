import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import {User} from "../Entities/User/user";
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";



export class UserSettings extends LitElement{


    static get properties() {
        return {
            allUser:{
                type: Array
            },
            selectedUser: User
        }
    }

    constructor() {
        super();
        this.allUser = HtmlService.getAllUser()
    }

    setForm(input) {
        this.selectedUser = input
        console.log("click")
    }

    getCheckerWA() {
        if(this.selectedUser != null) {
            if (this.selectedUser.whatsAppRe == true) {
                this.shadowRoot.getElementById('check_whatsapp').checked = true;
            }
            else {
                this.shadowRoot.getElementById('check_whatsapp').checked = false;
            }
        }
    }

    getCheckerEM() {
        if(this.selectedUser != null) {
            if (this.selectedUser.emailRe == true) {
                this.shadowRoot.getElementById('check_email').checked = true;
            }
            else {
                this.shadowRoot.getElementById('check_email').checked = false;
            }
        }
    }

    /***********************************************render*************************************************************/
    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/UserSettings/styles.css">

        <h1 style="display: block; align-items: center;">User-Settings</h1>
        <br>
        <div class="col-sm-12" style="padding-top: 220px">
            <div class="col-md-8">
                <table id="table" class="table fixed_header table-hover">
                    <thead>
                        <tr>
                            <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
                            <td>Username</td>
                            <td>Passwort</td>
                            <td>zugewiesene Mitarbeiter</td>
                        </tr>
                    </thead>
                    <tbody>
                    ${repeat(this.allUser,(item) => html`
                                                <tr @click="${() => this.setForm(item)}">    
                                                    <td><input className="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
                                                    <td>${item.userName}</td>
                                                    <td>${item.password}</td>
                                                    <td>${item.participants.map(x => ' ' + x.firstName + ' ' + x.lastName + ' ')}</td>
                                                </tr>`)}
                    
                    </tbody>
                </table>
            </div>
            <div class="col-sm-4 form-border">
                <form class="login-form validate-input">
                    <div class="div-form">
                        <label>User:</label>
                        <input id="userName" type="text" class="form-control" value="${this.selectedUser== null ?  " " :  this.selectedUser.userName}">
                    </div>
                
                    <div class="div-form">
                        <label>Passwort:</label>
                        <input id="password" type="text" class="form-control" value="${this.selectedUser== null ?  " " :  this.selectedUser.password}">
                    </div>
                
                    <div class="div-form">
                        <label>E-Mail:</label>
                        <input id="email" type="text" class="form-control" value="${this.selectedUser== null ?  " " :  this.selectedUser.email}">
                    </div>
                
                    <div class="div-form">
                        <label>Tel:</label>
                        <input id="phone" type="text" class="form-control" value="${this.selectedUser== null ?  " " :  this.selectedUser.phoneNumber}">
                    </div>
                
                    <div class="div-form">
                        <label>Tel:</label>
                        <input id="phone_two" type="text" class="form-control" value="${this.selectedUser== null ?  " " :  this.selectedUser.secPhoneNumber}">
                    </div>
                
                    <div class="div-form">
                        <input  type="checkbox" id="check_whatsapp" checked="${this.getCheckerWA()}" >
                        <label for="check_whatsapp" style="padding-left: 20px;">Reminder via Whatsapp</label>
                    </div>
                    <div class="div-form">
                        <input type="checkbox" id="check_email" checked="${this.getCheckerEM()}">
                        <label for="check_email" style="padding-left: 20px;">Reminder via E-Mail</label>
                    </div>              
                </form>
            </div>
        </div>
        `;
    }
}
window.customElements.define('user-settings-component',UserSettings);