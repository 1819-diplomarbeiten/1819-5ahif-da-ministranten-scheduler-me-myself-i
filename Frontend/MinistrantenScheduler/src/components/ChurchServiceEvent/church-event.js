import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from '../../services/HtmlClientService/html-service';
import {Participant} from "../Entities/Participant/participant";



var datts;
export class ChurchServiceEvent extends LitElement{
    constructor() {
        super();
        datts = HtmlService.getAllParticipant()
        let i = datts[1];
        console.log(i.firstName);
        console.log(datts.length);
    }

    /*static get properties() {
        console.log("properties geht");
        return{
            participants: Array,
            client: HtmlClient
        };
    }*/



    test(){
        console.log("test church-event")
        let minis = this.shadowRoot.getElementById("Minis")
        for(var i = 0;i < datts.length;i++){
            let input = new Participant();
            Object.assign(input, datts[i]);

            //let inp;
            //inp.fillParticipant(datts[i]);
            //console.log(inp.firstName)
            //input.fillParticipant(datts[i]);

            console.log(i+' '+input.firstName);
            minis.innerHTML += `<participant-component></participant-component><br>`;
        }
    }

    singleTest() {
        let input = new Participant();
        input = datts[0];

        console.log("single Test "+input.firstName);
        let minis = this.shadowRoot.getElementById("Minis");
        minis.innerHTML = input;
        console.log("single Test success")
    }



    render() {
        $(document).ready(() =>{
            this.singleTest();
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