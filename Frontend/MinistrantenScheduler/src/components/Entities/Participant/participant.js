import {LitElement,html} from '@polymer/lit-element';

export class Participant extends LitElement{

    static get porperties() {
        return {
            participantId: Number,
            firstName: String,
            lastName: String,
            grad: String
        }
    }

    constructor() {
        super();
    }

    getParticipantId() {
        return this.participantId
    }

    render() {
        return html`
        <script src="styles.css"></script>
        
        <div class="rectangle">
            <label class="font-styles" content="${this.firstName} ${this.lastName}"></label>
        </div>
        `;
    }
}
window.customElements.define("participant-component",Participant);