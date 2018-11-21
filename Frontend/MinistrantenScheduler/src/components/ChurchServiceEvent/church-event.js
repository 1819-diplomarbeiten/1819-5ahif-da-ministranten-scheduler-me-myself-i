import {html, LitElement} from '@polymer/lit-element';
import {HtmlClient} from '../../services/HtmlClientService/html-client';
import {Participant} from "../../../build/default/src/components/Entities/Participant/participant";


var datts;
export class ChurchServiceEvent extends LitElement{
    constructor() {
        super();
        datts = this.getData();
        let i = datts[1];
        console.log(i.firstName);
        console.log(datts.length);
    }

    static get properties() {
        console.log("properties geht");
        return{
            participants: Array,
            client: HtmlClient
        };
    }



    test(){
        console.log("test church-event")
        let minis = this.shadowRoot.getElementById("Minis")
        for(var i = 0;i < datts.length;i++){
            //HtmlClient.getAllParticipant()
            var input = Object;

            input.fillParticipant(datts[i]);
            //input.fillParticipant(datts[i]);
            console.log(input.firstName);
            //minis.innerHTML = input;
        }
    }

    getData(){
        var data =
            [
                {
                    participantId: 1,
                    lastName: "Herbert",
                    firstName: "Franz",
                    grad: "Ministrant"
                },
                {
                    participantId: 2,
                    firstName: "Max",
                    lastName: "Mustermann",
                    grad: "Ministrant"
                },
                {
                    participantId: 3,
                    firstName: "Lisa",
                    lastName: "Hermann",
                    grad: "Ministrant"
                },
                {
                    participantId: 4,
                    firstName: "Franz",
                    lastName: "Buschmann",
                    grad: "Ministrant"
                }
            ]
        return data;
    }

    render() {
        $(document).ready(() =>{
            this.test();
        });

        console.log("geht in render");
        return html`
        <div>
            <h1>New Page</h1>
        </div>  
        <br> 
        <div id="Minis">
            
        </div>  
        `;
    }

}
window.customElements.define('church-event-component',ChurchServiceEvent);