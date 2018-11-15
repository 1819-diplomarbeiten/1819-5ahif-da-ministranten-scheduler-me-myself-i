import {html, LitElement} from '@polymer/lit-element';


export class Login extends LitElement{
    render() {
        return html`
            <div class="container text-md-center">
                <table>
                    <tr>
                        <td>
                            <label>Username: </label>
                        </td>
                        <td>
                            <input class="form-control" id="userName"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Passwort: </label>
                        </td>
                        <td>
                            <input class="form-control" id="[[password]]"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button @click="${() => this.checkLogin()}">Login</button>
                        </td>
                    </tr>
                </table>
            </div>
        `;
    }

    checkLogin() {
        console.log("click event login"+password);
    }

    static get properties() {
        return{
            userName : String,
            password : Number
        }
    }
}
window.customElements.define("login-component",Login);