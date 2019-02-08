import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import {User} from "../Entities/User/user";
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";



export class UserSettings extends LitElement{


    static get properties() {
        return {
            allUser:[],
            selectedUser: User,
            count:Number
        }
    }

    constructor() {
        super();
        this.allUser = [];
        this.allUser = HtmlService.getAllUser()
    }

    setForm(input) {
        if (this.selectedUser != null) {
            this.allUser[this.count].userName = this.shadowRoot.getElementById('userName').value;
            this.allUser[this.count].password = this.shadowRoot.getElementById('password').value;
            this.allUser[this.count].email = this.shadowRoot.getElementById('email').value;
            this.allUser[this.count].phoneNumber = this.shadowRoot.getElementById('phone').value;
            this.allUser[this.count].secPhoneNumber = this.shadowRoot.getElementById('phone_two').value;
            this.allUser[this.count].whatsAppRe = this.shadowRoot.getElementById('check_whatsApp').checked;
            this.allUser[this.count].emailRe = this.shadowRoot.getElementById('check_email').checked;
        }
        this.count = input - 1;
        this.selectedUser = null;
        this.selectedUser = new User();
        for (var i = 0;i < this.allUser.length;i++){
            if (this.allUser[i].userId == input) {
                this.selectedUser = this.allUser[i];
                this.shadowRoot.getElementById('userName').value = this.selectedUser.userName;
                this.shadowRoot.getElementById('password').value = this.selectedUser.password;
                this.shadowRoot.getElementById('email').value = this.selectedUser.email;
                this.shadowRoot.getElementById('phone').value = this.selectedUser.phoneNumber;
                this.shadowRoot.getElementById('phone_two').value = this.selectedUser.secPhoneNumber;
                this.shadowRoot.getElementById('check_whatsApp').checked = this.selectedUser.whatsAppRe;
                this.shadowRoot.getElementById('check_email').checked = this.selectedUser.emailRe;
            }
        }
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

    test() {
        alert("Click");
    }

    safeState() {
        if (this.selectedUser != null) {
            this.allUser[this.count].userName = this.shadowRoot.getElementById('userName').value;
            this.allUser[this.count].password = this.shadowRoot.getElementById('password').value;
            this.allUser[this.count].email = this.shadowRoot.getElementById('email').value;
            this.allUser[this.count].phoneNumber = this.shadowRoot.getElementById('phone').value;
            this.allUser[this.count].secPhoneNumber = this.shadowRoot.getElementById('phone_two').value;
            this.allUser[this.count].whatsAppRe = this.shadowRoot.getElementById('check_whatsApp').checked;
            this.allUser[this.count].emailRe = this.shadowRoot.getElementById('check_email').checked;
        }
        console.log("safe");
    }

    /***********************************************render*************************************************************/
    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/UserSettings/styles.css">


        <a class="back-reply-button" @click="${() => this.safeState()}">
        
        </a>


        <h1 style="transform: translate(30%);">User-Settings</h1>
        <br>
        <div class="col-sm-12 row" style="padding-top: 220px">
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
                                                <tr @click="${() => this.setForm(item.userId)}">    
                                                    <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
                                                    <td>${item.userName}</td>
                                                    <td>${item.password}</td>
                                                    <td @click="${() => this.test()}">${item.participants.map(x => ' ' + x.firstName + ' ' + x.lastName + ' ')}</td>
                                                </tr>`)}
                    
                    </tbody>
                </table>
            </div>
            <div class="col-md-3 form-border">
                <form class="login-form validate-input">
                    <div class="div-form">
                        <label>User:</label>
                        <input id="userName" type="text" class="form-control">
                    </div>
                
                    <div class="div-form">
                        <label>Passwort:</label>
                        <input id="password" type="text" class="form-control">
                    </div>
                
                    <div class="div-form">
                        <label>E-Mail:</label>
                        <input id="email" type="text" class="form-control">
                    </div>
                
                    <div class="div-form">
                        <label>Tel:</label>
                        <input id="phone" type="text" class="form-control">
                    </div>
                
                    <div class="div-form">
                        <label>Tel:</label>
                        <input id="phone_two" type="text" class="form-control">
                    </div>
                
                    <div class="div-form">
                        <input  type="checkbox" id="check_whatsApp" checked="${() => this.getCheckerWA()}" >
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