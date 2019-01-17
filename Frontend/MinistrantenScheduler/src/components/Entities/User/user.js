//import {LitElement} from '@polymer/lit-element';

export class User{
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

    constructor(userId,userName,password,email,phoneNumber,secPhoneNumber,whatsAppRe,emailRe,participants) {
        //super();
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.secPhoneNumber = secPhoneNumber;
        this.whatsAppRe = whatsAppRe;
        this.emailRe = emailRe;
        this.participants = [];
        this.participants = participants;
    }



}
//window.customElements.define('user-component',User);