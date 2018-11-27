import {LitElement,html} from '@polymer/lit-element';

export class User extends LitElement{
    static get properties() {
        return{
            userId:Number,
            userName: String,
            password: String,
            email: String,
            phoneNumber: BigInt,
            secPhoneNumber: BigInt,
            whatsAppRe: Boolean,
            emailRe: Boolean,
            participants: Array
        }
    }
}