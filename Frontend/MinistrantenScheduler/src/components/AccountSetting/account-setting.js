import {LitElement,html} from '@polymer/lit-element';
import {HtmlService} from "../../services/HtmlClientService/html-service";
import {User} from "../Entities/User/user";

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


    render() {
        return html`
                <h1>Mein Account</h1>
                
                <form>
                    
                </form>
        
        
        
        
        `;
    }
}
window.customElements.define('account-setting-component',AccountSetting);