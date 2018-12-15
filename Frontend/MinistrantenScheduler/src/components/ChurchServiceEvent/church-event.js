import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from '../../services/HtmlClientService/html-service';
import {Participant} from "../Entities/Participant/participant";
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";
//import {PolymerElement, html} from 'https://unpkg.com/@polymer/polymer/polymer-element.js?module';
//import {Sortable, Plugins} from '@shopify/draggable';


export class ChurchServiceEvent extends LitElement{


    static get properties() {
        return{
            allParticipants:{
                type: Array
            }
        }
    }


    constructor() {
        super();
        this.allParticipants = HtmlService.getAllParticipant();

    }

    dragStart(event) {
        console.log("Hallo");
        alert(event.target.id);
        //event.dataTransfer.setData("id",event.target.id);
    }
    allowDrop(event) {
        event.preventDefault();
    }
    drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("id");
        event.target.appendChild(document.getElementById(data));
    }






    /**********************************************Appointment*********************************************************/
    loadAppointments() {
        this.shadowRoot.getElementById('Appo').innerHTML = this.addAppointmentLayout();
    }

    /**********************************************Appointment-Layout**************************************************/

    addAppointmentLayout() {
        return `
         <div>
            <div>
                <div class="rectangle-Appo rconers">
                    <div class="row font-header-style">
                        <label>Montag</label>
                        <hr>
                    </div>                
                    <div style="height: auto;width: auto;" id="test" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                    </div>
                </div>
            </div>
         </div>
        
          `;
    }
    /**********************************************Appointment*********************************************************/



    /******************************************Render******************************************************************/
    render() {
        $(document).ready(() =>{
            this.loadAppointments();
        });
        return html`
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">        
        <link rel="stylesheet" type="text/css" href="/src/components/ChurchServiceEvent/styles.css">
        
        
        
        
        <div>
            <h1>Drag&Drop</h1>
        </div>  
        <br>
        <div>
            <div class="col-md-3 row">             
                <div id="participants" class="col-md-9">
                    ${repeat(this.allParticipants,(item) => html`
                                                            <div draggable="true" onDragStart="${() => this.dragStart(event)}" id="${item.participantId}">
                                                                <div class="col-md-12">
                                                                    <div class="rectangle-Part rconers form-style">
                                                                        <label class="font-styles-Part">${item.firstName} ${item.lastName}</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            `)}
                </div>  
            </div>
            <div class="col-md-8">
                <div id="Appo" class="col-md-7">
                    
                </div>
            </div>
        </div>
        `;
    }
}
window.customElements.define('church-event-component',ChurchServiceEvent);