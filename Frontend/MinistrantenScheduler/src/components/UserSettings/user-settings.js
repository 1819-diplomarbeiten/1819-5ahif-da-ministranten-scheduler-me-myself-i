import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import {User} from "../Entities/User/user";



export class UserSettings extends LitElement{


    constructor() {
        super();
        //this.selectedUser = new User()
        //this.selectedUser.userName = "";
        this.allUser = HtmlService.getAllUser()
    }

    static get properties() {
        return {
            selectedUser: User,
            selectedUserId: Number,
            allUser: Array
        }
    }



    /*********************************************User-Layout**********************************************************/

    getAllUsers() {
        this.shadowRoot.getElementById('minis').innerHTML = ''
        for (let i = 0;i < this.allUser.length;i++) {
            let input = new User();
            input = this.allUser[i];
            this.shadowRoot.getElementById('minis').innerHTML += this.getUserLayout(input)

        }
    }


    getUserLayout(inps) {
        var ins = (`
        <tr id="user${inps.userId}">    
            <td><input class="input-checkbox" id="picker" type="checkbox" name="chooser"></td>
            <td>${inps.userName}</td>
            <td>${inps.password}</td>
            <td>${inps.participants.map(x => ' '+x.firstName+' '+x.lastName+ ' ')}</td>
        </tr>
        `);
        return ins
    }

    /*********************************************User-Layout**********************************************************/


    setTableCol() {


        console.log(this.allUser.length)
        for (var i = 0;i < this.allUser.length;i++)
        {
            var its = 'user'+(i+1)
            this.shadowRoot.getElementById(its.toString()).click(this.setTest(its))
            /*this.shadowRoot.getElementById('user'+ (i + 1)).addEventListener('click',function () {
                this.selectedUserId = i +1
            })*/
        }
    }

    setTestUser() {
        var vn = this.shadowRoot.querySelector('#table').addEventListener('click',function (ev) {
            return ev.target.prototype.rowIndex
        })
        console.log(vn.toString())
    }




    setTest(ist) {
        console.log(ist.toString())
    }


    /***********************************************render*************************************************************/
    render() {
        $(document).ready(() => {
            this.getAllUsers();
            //this.setTableCol()
            this.setTestUser()
        });

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

                <br>
                <tbody id="minis">
                
                </tbody>
            </table>
        </div>
        <div class="col-sm-4 form-border">
            <form class="login-form validate-input">
                <div class="div-form">
                    <label>User:</label>
                    <input id="userName" type="text" class="form-control" value="">
                </div>
                
                <div class="div-form">
                    <label>Passwort:</label>
                    <input id="password" type="text" class="form-control" value="">
                </div>
                
                <div class="div-form">
                    <label>E-Mail:</label>
                    <input id="email" type="text" class="form-control" value=""
                </div>
                
                <div class="div-form">
                    <label>Tel:</label>
                    <input id="phone" type="text" class="form-control" value="">
                </div>
                
                <div class="div-form">
                    <label>Tel:</label>
                    <input id="phone" type="text" class="form-control" value="">
                </div>
                
                <div class="div-form">
                    <input  type="checkbox" id="check_whatsapp" >
                    <label for="check_whatsapp" style="padding-left: 20px;">Reminder via Whatsapp</label>
                </div>
                <div class="div-form">
                    <input type="checkbox" id="check_email">
                    <label for="check_email" style="padding-left: 20px;">Reminder via E-Mail</label>
                </div>
                
            </form>
        </div>
        </div>
        `;
    }
}
window.customElements.define('user-settings-component',UserSettings);