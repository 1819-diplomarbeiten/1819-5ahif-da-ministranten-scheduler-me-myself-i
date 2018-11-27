import {LitElement,html} from '@polymer/lit-element';


export class UserSettings extends LitElement{


    getAllUsers() {
        
    }


    render() {
        return html`<h1>New Page</h1>`;
    }
}
window.customElements.define('user-settings-component',UserSettings);