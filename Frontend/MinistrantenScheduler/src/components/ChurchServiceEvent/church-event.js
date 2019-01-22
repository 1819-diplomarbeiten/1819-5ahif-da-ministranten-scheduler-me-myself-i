import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from '../../services/HtmlClientService/html-service';
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";
import {User} from "../Entities/User/user";



export class ChurchServiceEvent extends LitElement{



    static get properties() {
        return{
            allParticipants:[],
            internalDND: String,
            allDays:[],
            monthResult:[]
        }
    }


    constructor() {
        super();
        this.allParticipants = [];
        this.allDays = [];
        this.monthResult = [];
        this.monthResult = [];
        this.internalDND = 'part';
        this.allParticipants = HtmlService.getAllParticipant();
        this.allDays = HtmlService.getAllDays();
        this.monthResult = this.getAllMonths();

        /*let user = this.getAttribute("user");
        let pass = this.getAttribute("pass");
        console.log(user+ "  "+pass);*/
    }

     dragStartHandler(event, item) {
         console.log("drag" + event.target.id);
         event.dataTransfer.setData(this.internalDND,item.participantId);
     }

    dragContinueHandler(event) {
        console.log("neu")
    }

    dropHandler(event,item) {
        console.log("drop");
        let int = event.dataTransfer.getData(this.internalDND);
        
        //this.allDays[item.dayId - 1].appointments[0].participants.push(this.allParticipants[int - 1]);
        //let i = this.shadowRoot.getElementById('App'+item.dayId);
        this.shadowRoot.getElementById('App'+item.dayId).innerHTML += this.addParticipants(this.allParticipants[int - 1]);
    }

    addParticipants(inputs) {
        return `
            <tr class="row-Parti">
                <td class="rectangle-Part rconers" draggable="true">                    
                    <label class="form-style">${inputs.toNameString()}</label>               
                </td>
            </tr>
        `
    }

    getAllMonths() {
        let months = [];
        months.push(this.allDays[0].dayDate.getMonth() + 1);
        for (let i = 1;i< this.allDays.length;i++){
            let checker = true;
            let t = this.allDays[i].dayDate.getMonth() + 1;
            for (let j = 0;j< months.length;i++) {

                if (t == months[j]) {
                    checker = false;
                }
            }
            if (checker == true) {
                months.push(t);
            }
        }
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
        
        
        

         <div class="cd-content">
            <div>
                <h1>Drag&Drop</h1>
            </div> 
             
            <br>
            <div class="row">
                <div class="col-md-2" style="border-right: black 1px solid;">             
                    <div>
                        ${repeat(this.allParticipants,(item) => html`
                                                                <div draggable="true" @dragstart="${(event)=> this.dragStartHandler(event,item)}">
                                                                    <div class="rectangle-Part rconers">
                                                                        <label class="form-style">${item.toNameString()}</label>
                                                                    </div>
                                                                </div>
                                                                `)}
                    </div>  
                </div>
                <div class="col-md-10">
                    <div id="Appo" class="row app-result-style row" style="padding-left: 10%">
                        <div class="app-horizontal">
                            
                            
                            
                            
                            <div class="app-horizontal-scrollbar">
                                ${repeat(this.allDays,(item) => html`
                                                                  
                                                                  <div class="rectangle-Appo rconers App-style row">
                                                                      <div class="col-md-12">
                                                                          <label class="form-style col-md-12" style="padding: 10px; text-align: center; border-bottom: #0c5460 1px solid;">${item.dayDate.getDate()}-${item.dayDate.getMonth()+1}-${item.dayDate.getFullYear()}</label>
                                                                      </div>             
                                                                      
                                                                      <table class="table" @dragover="${(event) => event.preventDefault()}" @dragenter="${(event) => event.preventDefault()}"  @drop="${(event) => this.dropHandler(event,item)}"> 
                                                                           <tbody id="App${item.dayId}">
                                                                                
                                                                            </tbody>
                                                                      </table> 
                                                                      
                                                                  </div>     
                                                                                                            
                                                                 `)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>       
        
        `;
    }

}
window.customElements.define('church-event-component',ChurchServiceEvent);