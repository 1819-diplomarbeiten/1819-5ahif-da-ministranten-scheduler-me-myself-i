import { html, LitElement } from "../../../node_modules/@polymer/lit-element/lit-element.js";
export class Login extends LitElement {
  render() {
    return html`
            <div class="container align-content-center">
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
                            <input class="form-control" id="password"/>
                        </td>
                    </tr>
                    <tr>
                        <button @click="${() => this.checkLogin()}">Login</button>
                    </tr>
                </table>
            </div>
        `;
  }

  checkLogin() {
    console.log("click event login ");
  }

  static get properties() {
    return {
      UserName: String,
      Password: Number
    };
  }

}
window.customElements.define("login-component", Login);