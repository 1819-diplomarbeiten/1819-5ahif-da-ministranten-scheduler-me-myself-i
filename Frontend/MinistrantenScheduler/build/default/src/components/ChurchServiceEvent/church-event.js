import { html, LitElement } from "../../../node_modules/@polymer/lit-element/lit-element.js";
import { Participant } from "../Entities/Participant/participant.js";
import { HtmlClient as client, HtmlClient } from "../../services/HtmlClientService/htmlClient.js";
export class ChurchServiceEvent extends LitElement {
  render() {
    console.log("geht in render");
    return html`
        <div>
            <h1>New Page</h1>
        </div>   
        <div id="Minis">
            
        </div>  
        <script>
            let i;
            for(i = 0;i < participant.length;i++){
                participant[i].render();
            }
            document.getElementById("Minis")
        </script>   
        `;
  }

  constructor() {
    super();
    console.log("constructor geht");
    this.participants = client.getAllParticipant();
    console.log("constructor geht raus" + client.getAllParticipant()[0].firstName);
  }

  static get properties() {
    console.log("properties geht");
    return {
      participants: Array,
      client: HtmlClient
    };
  }

}
window.customElements.define('church-event-component', ChurchServiceEvent);