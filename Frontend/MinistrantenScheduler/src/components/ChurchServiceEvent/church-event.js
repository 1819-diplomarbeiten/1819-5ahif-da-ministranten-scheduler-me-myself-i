import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from '../../services/HtmlClientService/html-service';
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";
import {User} from "../Entities/User/user";
import {Participant} from "../Entities/Participant/participant";



export class ChurchServiceEvent extends LitElement {


    static get properties() {
        return {
            allParticipants: [],
            allDays: [],
            allAppointments:[],
            internalDND: String,
            monthResult: [],
            partsInApp:Number
        }
    }


    constructor() {
        super();
        this.allParticipants = [];
        this.allDays = [];
        this.monthResult = [];
        this.monthResult = [];
        this.allAppointments = [];
        this.internalDND = 'part';
        this.partsInApp = 0;
        this.allParticipants = HtmlService.getAllParticipant();
        this.allDays = HtmlService.getAllDays();
        this.allAppointments = HtmlService.getAllAppointments();
        this.monthResult = this.getAllMonths();

        /*let user = this.getAttribute("user");
        let pass = this.getAttribute("pass");
        console.log(user+ "  "+pass);*/
    }

    dragStartHandler(event, item) {
        event.dataTransfer.setData(this.internalDND, item.participantId);
    }

    dragContinueHandler(event) {
        console.log("neu")
    }

    dropHandler(event, dayInd, appInd) {
        let partId = event.dataTransfer.getData(this.internalDND);
        this.allDays[dayInd].appointments[appInd].addParticipants(this.allParticipants.filter(p => p.participantId == partId).pop())
        this.partsInApp++;
    }

    getAllMonths() {
        let months = [];
        months.push(this.allDays[0].dayDate.getMonth() + 1);
        for (let i = 1; i < this.allDays.length; i++) {
            let checker = true;
            let t = this.allDays[i].dayDate.getMonth() + 1;
            for (let j = 0; j < months.length; j++) {

                if (t == months[j]) {
                    checker = false;
                }
            }
            if (checker == true) {
                months.push(t);
            }
        }
        return months
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
                        ${repeat(this.allParticipants, (item) => html`
                                                                    <div draggable="true" @dragstart="${(event) => this.dragStartHandler(event, item)}">
                                                                        <div class="rectangle-Part rconers">
                                                                            <label class="form-style">${item.toNameString()}</label>
                                                                        </div>
                                                                    </div>
                        `)}
                    </div>  
                </div>
                <div class="col-md-10 app-max-size">
                    <div id="Appo" class=" app-result-style" style="padding-left: 10%">
                          
                            
                        ${repeat(this.getAllMonths(), (months) => html`
                            
                            <div id="${months}">
                                <div class="app-horizontal row">
                                    <label>${months}</label>
                                    <div class="app-horizontal-scrollbar">
                                        ${repeat(this.allDays.filter(p => p.dayDate.getMonth() + 1 == months), (days) => html`
                                                                          <div class="rectangle-Appo rconers App-style">
                                                                              <div class="col-md-12">
                                                                                  <label class="App-Header form-style col-md-12">${days.toDayString()}</label>
                                                                              </div>             
                                                                              
                                                                              ${repeat(days.appointments,(app) => html`                                                                             
                                                                                  <div class="Appointment-Inbox" id="App${app.appointmentId}" @dragover="${(event) => event.preventDefault()}" 
                                                                                        @dragenter="${(event) => event.preventDefault()}"  @drop="${(event) => this.dropHandler(event, this.allDays.indexOf(days), days.appointments.indexOf(app))}"> 
                                                                                        ${repeat(app.participants,(parts) => html`
                                                                                                                                <div draggable="true" @dragstart="${(event) => this.dragContinueHandler(event)}">
                                                                                                                                    <div class="rectangle-Part rconers">
                                                                                                                                        <label class="form-style">${parts.toNameString()}</label>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                        
                                                                                        `)}
                                                                                      
                                                                                  </div>
                                                                              `)}                                                                              
                                                                          </div>                                               
                                        `)}
                                    </div>
                                </div>
                            </div>
                            
                        `)}
                                
                                
                            
                    </div>
                </div>
            </div>
         
        `;
    }

}
window.customElements.define('church-event-component',ChurchServiceEvent);