import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import {User} from "../Entities/User/user";


export class UserSettings extends LitElement{


    constructor() {
        super();
    }


    /*********************************************User-Layout**********************************************************/

    getAllUsers() {
        let inputs = HtmlService.getAllUser();
        console.log(inputs[0].userName);
        var input = new User();
        input = inputs[0];
        console.log(input.userName);
        let variable = this.getUserLayout(input);
        this.shadowRoot.getElementById('minis').innerHTML = this.getUserLayout(input);
    }


    getUserLayout(inp) {
        return `
        <tr>
            <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
            <td>${inp.userName}</td>
            <td>${inp.password}</td>
        </tr>
        
        `;
    }
    /*********************************************User-Layout**********************************************************/



    /***********************************************render*************************************************************/
    render() {
        $(document).ready(() => {
            this.getAllUsers();
        });
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!--===============================================================================================-->




        <h1>User-Settings</h1>
        <br>
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
                        <td>Username</td>
                        <td>Passwort</td>
                        <td>zugewiesene Mitarbeiter</td>
                    </tr>
                </thead>
                <tbody>
                    <tr id="minis"></tr>
                </tbody>
            </table>
        </div>
        `;
    }
}
window.customElements.define('user-settings-component',UserSettings);