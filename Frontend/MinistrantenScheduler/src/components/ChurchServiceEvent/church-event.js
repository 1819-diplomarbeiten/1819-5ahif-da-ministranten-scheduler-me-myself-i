import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from '../../services/HtmlClientService/html-service';
import {Participant} from "../Entities/Participant/participant";
//import {PolymerElement, html} from 'https://unpkg.com/@polymer/polymer/polymer-element.js?module';
//import {Sortable, Plugins} from '@shopify/draggable';


export class ChurchServiceEvent extends LitElement{
    constructor() {
        super();
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




    /*******************************************Participant************************************************************/
    loadParticipant(){
        let minis = this.shadowRoot.getElementById('participants');
        let fillPart;
        let data = HtmlService.getAllParticipant();
        for(var i = 0;i < data.length;i++){
            fillPart = new Participant()
            fillPart = data[i];
            minis.innerHTML += this.addParticipantLayout(fillPart);
        }
        console.log("success test methode");
    }
    /**************************************Participant-Layout**********************************************************/
    //Übergeben von der Klasse Participant
    addParticipantLayout(input) {
       return `<br>        
        <div draggable="true" ondragstart="dragStart(event)" id="${input.participantId}">
            <div class="col-md-12">
                <div class="rectangle-Part rcconers">
                    <label id="participant" class="font-styles-Part">` + input.firstName + ` ` + input.lastName + `</label>
                </div>
            </div>
        </div>
        <br>
        `;
    }
    /**********************************************Participant*********************************************************/

    /**********************************************Appointment*********************************************************/
    loadAppointments() {
        this.shadowRoot.getElementById('Appo').innerHTML = this.addAppointmentLayout();
    }

    /**********************************************Appointment-Layout**************************************************/

    addAppointmentLayout() {
        return `
         <div>
            <div>
                <div class="rectangle-Appo rcconers">
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
            this.loadParticipant();
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
                <div id="participants" class="col-md-9"></div> 
                <div class="vertic-line col-md-1"></div>
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