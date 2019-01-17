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
        this.internalDND = 'part';
        this.allParticipants = HtmlService.getAllParticipant();
        this.allDays = HtmlService.getAllDays();


        let arrays = [];
        var users = new User();
        users.userName = "Hallo"
        arrays.push(users);
        console.log(arrays[0].userName);
        console.log(users)
        arrays.push(new User("Hallo2"))
        console.log(arrays[1].userName);

        let dat = new Date();
        dat.setHours(11,30,0);
        console.log(dat.getHours()+ ":" +dat.getMinutes());
        dat.setHours(12,12,0);
        console.log(dat.getHours()+ ":" +dat.getMinutes());


        //console.log(this.allDays.length);
        //this.getAllMonths();
        /*let user = this.getAttribute("user");
        let pass = this.getAttribute("pass");
        console.log(user+ "  "+pass);*/
    }

     dragStartHandler(event, item) {
         console.log("drag" + event.target.id);
         event.dataTransfer.setData(this.internalDND,item.participantId);
     }

    dropHandler(event,item) {
        console.log("drop")
        let int = event.dataTransfer.getData(this.internalDND);

        let i = this.allParticipants[int - 1];
        this.allDays[item.dayId - 1].appointments[0].participants.push(i);
        this.shadowRoot.getElementById('App'+item.dayId).innerHTML += this.addParticipants(this.allParticipants[int - 1]);
    }

    addParticipants(inputs) {
        return `
            <div draggable="true" id="${inputs.participantId}" @dragstart="${(event)=> this.dragStartHandler(event,inputs)}">
                <div class="rectangle-Part rconers">
                    <label class="form-style">${inputs.firstName} ${inputs.lastName}</label>
                </div>
            </div>
        `
    }

    getAllMonths() {
        var res = 0;
        var months = [];
        for (let i = 0;i< this.allDays.length;i++){

            let t = new Date(this.stringToDate(this.allDays[1].dayDate,"dd.MM.yyyy","."));
            for (let i = 0;i< this.allDays.length;i++){

            }
            if (t.getMonth() + 1) {

            }
        }
    }
    stringToDate(_date,_format,_delimiter)
    {
        var formatLowerCase=_format.toLowerCase();
        var formatItems=formatLowerCase.split(_delimiter);
        var dateItems=_date.split(_delimiter);
        var monthIndex=formatItems.indexOf("mm");
        var dayIndex=formatItems.indexOf("dd");
        var yearIndex=formatItems.indexOf("yyyy");
        var month=parseInt(dateItems[monthIndex]);
        month-=1;
        var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
        return formatedDate;
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
                                                              
                                                              <div class="rectangle-Appo rconers App-style">
                                                                  <div class="col-md-12">
                                                                      <label class="form-style col-md-12" style="padding: 10px; text-align: center; border-bottom: #0c5460 1px solid;">${item.dayDate}</label>
                                                                  </div>                
                                                                  <div style="height: 200px;width: 300px;" id="App${item.dayId}" @dragover="${(event) => event.preventDefault()}" @dragenter="${(event) => event.preventDefault()}"  @drop="${(event) => this.dropHandler(event,item)}">
                                                                
                                                                  </div>
                                                              </div>                                               
                                                             `)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
window.customElements.define('church-event-component',ChurchServiceEvent);