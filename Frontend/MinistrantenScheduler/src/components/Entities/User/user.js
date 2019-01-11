import {LitElement} from '@polymer/lit-element';

export class User extends LitElement{
    static get properties() {
        return{
            userId:Number,
            userName: String,
            password: String,
            email: String,
            phoneNumber: Number,
            secPhoneNumber: Number,
            whatsAppRe: Boolean,
            emailRe: Boolean,
            participants: []
        }
    }

    constructor() {
        super();
    }
}
window.customElements.define('user-component',User)