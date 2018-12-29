import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from '../../services/HtmlClientService/html-service';
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";



export class ChurchServiceEvent extends LitElement{



    static get properties() {
        return{
            allParticipants:[],
            internalDND: Number
        }
    }


    constructor() {
        super();
        this.allParticipants = [];
        this.allParticipants = HtmlService.getAllParticipant();
        /*let user = this.getAttribute("user");
        let pass = this.getAttribute("pass");
        console.log(user+ "  "+pass);*/
    }

     dragStartHandler(event, item) {
         console.log("drag" + event.target.id);
         event.dataTransfer.setData('text',event.target.id);
         //this.internalDND = event
     }

    dropHandler(event) {
        //event.preventDefault();
        console.log("drop")
        let int = event.dataTransfer.getData('Text');

        this.shadowRoot.getElementById('test').innerHTML += `<p>${int}</p>`
    }




    /******************************************Render******************************************************************/
    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->     
        <link rel="stylesheet" type="text/css" href="/src/components/ChurchServiceEvent/styles.css">
        
        
        
        <div>
            <h1>Drag&Drop</h1>
        </div>  
        <br>
        <div class="row">
            <div class="col-md-2" style="border-right: black 1px solid;">             
                <div>
                    ${repeat(this.allParticipants,(item) => html`
                                                            <div draggable="true" id="${item.participantId}" @dragstart="${(event)=> this.dragStartHandler(event,item)}">
                                                                <div class="rectangle-Part rconers">
                                                                    <label class="form-style">${item.firstName} ${item.lastName}</label>
                                                                </div>
                                                            </div>
                                                            `)}
                </div>  
            </div>
            <div class="col-md-8">
                <div id="Appo" style="padding-left: 50%">
                
                    <div class="rectangle-Appo rconers">
                        <div class="col-md-12">
                            <label class="form-style col-md-12" style="padding: 10px; text-align: center; border-bottom: #0c5460 1px solid;">Montag</label>
                        </div>                
                        <div style="height: 200px;width: 300px;" id="test" @dragover="${(event) => event.preventDefault()}" @dragenter="${(event) => event.preventDefault()}"  @drop="${(event) => this.dropHandler(event)}">
                        
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        `;
    }
}
window.customElements.define('church-event-component',ChurchServiceEvent);