import {html, LitElement} from '@polymer/lit-element';
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";


export class CalenderSettings extends LitElement{


    static get properties() {
        return{

        }
    }

    constructor() {
        super();
    }


    /******************************************Render******************************************************************/
    render() {
        return html``;
    }
}
window.customElements.define("calendar-settings-component",CalenderSettings);