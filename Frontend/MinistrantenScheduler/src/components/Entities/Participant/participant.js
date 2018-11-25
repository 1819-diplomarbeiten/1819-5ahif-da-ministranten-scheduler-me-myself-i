import {LitElement,html} from '@polymer/lit-element';

export class Participant extends LitElement{

    static get properties() {
        //console.log("participant prop")
        return {
            participantId: Number,
            firstName: String,
            lastName: String,
            grad: String
        }
    }

    constructor() {
        super();
        //this.firstName = "herbert";
        //this.lastName = "Franz";
        console.log("constructor participant")
    }

    getParticipantId() {
        return this.participantId
    }


    fillParticipant(participant) {
        console.log("in filler methode");
        this.participantId = participant.participantId;
        console.log(this.participantId);
        this.firstName = participant.firstName;
        this.lastName = participant.lastName;
        this.grad = participant.grad;
    }

    loadParticipant(){
        let label = this.shadowRoot.getElementById('participant');
        label.innerHTML = this.firstName + " " + this.lastName
    }

    render() {
        $(document).ready(() => {
            this.loadParticipant();
        });
        return html`
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        
        
        <link rel="stylesheet" type="text/css" href="/src/components/Entities/Participant/styles.css">
        
        <div class="col-sm-3">
            <div class="col-sm-8">
                <div class="rectangle rcconers">
                    <label id="participant" class="font-styles100"></label>
                </div>
            </div>
        </div>
        `;
    }
}
window.customElements.define("participant-component",Participant);