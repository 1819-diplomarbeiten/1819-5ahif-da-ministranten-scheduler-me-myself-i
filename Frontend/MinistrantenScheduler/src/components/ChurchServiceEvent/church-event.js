import {html, LitElement} from '@polymer/lit-element';
import {HtmlService} from '../../services/HtmlClientService/html-service';
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";
import {User} from "../Entities/User/user";
import {Participant} from "../Entities/Participant/participant";
import {Day} from "../Entities/Day/day";



export class ChurchServiceEvent extends LitElement {


    static get properties() {
        return {
            allParticipants: [],
            allDays: [],
            allAppointments:[],
            internalDND: String,
            monthResult: [],
            partsInApp:Number,
            openNav:Boolean,
            continueDrag:Boolean
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
        this.openNav = false;
        this.continueDrag = false;
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

    dragContinueHandler(event,dayInd,appInd,item) {
        console.log("neu")
        event.dataTransfer.setData(this.internalDND,item.participantId);
        this.allDays[dayInd].appointments[appInd].removeParticipant(item);
        //this.partsInApp--;
        this.continueDrag = true;
        console.log(item)
    }

    dropHandler(event, dayInd, appInd) {
        if (this.continueDrag == true) {
            this.partsInApp--;
            this.continueDrag = false;
        }
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

    navbarMenu() {
        let nav = this.shadowRoot.getElementById('nav'),
            main = this.shadowRoot.getElementById('main');
        if (!this.openNav) {
            nav.classList.toggle('menu-active',true);
            main.classList.toggle('menu-active',true);
            this.openNav = true;
        }
        else if(this.openNav){
            nav.classList.toggle('menu-active',false);
            main.classList.toggle('menu-active',false);
            this.openNav = false;
        }
        nav.classList.remove('menu-hover');
        main.classList.remove('menu-hover');
    }

    navbarHoverOver() {
        if(!this.openNav) {
            let nav = this.shadowRoot.getElementById('nav'),
                main = this.shadowRoot.getElementById('main');
            nav.classList.add('menu-hover');
            main.classList.add('menu-hover');
        }
    }

    navbarHoverOut() {
        let nav = this.shadowRoot.getElementById('nav'),
            main = this.shadowRoot.getElementById('main');
        nav.classList.remove('menu-hover');
        main.classList.remove('menu-hover');
    }

    /*
    *
    * Switch zwischen denn Components
    *
    * */
    switchComponent(input) {
        let root = document.querySelector("ministranten-verwaltung");
        let components = root.shadowRoot.querySelector('#components');
        let component = document.createElement(input);
        components.innerHTML = component.outerHTML;
    }



    /******************************************Render******************************************************************/
    render() {
        $(document).ready(() => {
            let menu = this.shadowRoot.getElementById('container');
            menu.addEventListener('mouseover',() => this.navbarHoverOver());
            menu.addEventListener('mouseout',() => this.navbarHoverOut());
        });
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->     
        <link rel="stylesheet" type="text/css" href="/src/components/ChurchServiceEvent/styles.css">
        
        <script type="module" src="/node_modules/@google-web-components/google-signin/google-signin.js"></script>
        
        
        
        <nav id="nav" class="menu-activea" @click="${() => this.navbarMenu()}">
            <h1 id="container">Menü</h1>
            <ul>
                <li @click="${() => this.switchComponent('church-event-component')}"><label>Startseite</label></li>
                <li @click="${() => this.switchComponent('create-user-component')}"><label>Neuen User anlegen</label></li>
                <li @click="${() => this.switchComponent('create-church-event-component')}"><label>Neue Messe anlegen</label></li>
                <li @click="${() => this.switchComponent('account-settings-component')}"><label>Mein Account</label></li>
                <li @click="${() => this.switchComponent('participant-settings-component')}"><label>Teilnehmer Einstellungen</label></li>
                <li @click="${() => this.switchComponent('user-settings-component')}"><label>User Einstellungen</label></li>
                <li @click="${() => this.switchComponent('calendar-settings-component')}"><label>Kalender Einstellungen</label></li>
                <google-signin style="width: 90%;padding: 10%;" @google-signed-out="${() => this.switchComponent('login-component')}" 
                                                client-id="461212305163-j72ri8njlsb7ul03cg5sm3c2qkpkck8a.apps.googleusercontent.com" 
                                                scopes="https://www.googleapis.com/auth/drive"></google-signin>
            </ul>
        </nav>
        
        
        <div class="body">
        <div id="main">
            <section class="result-style">
                <div>
                    <h1 id="title">Startseite</h1>
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
                                        <label style="font-size: 30px;text-transform: uppercase;font-weight: bold">${Day.toMonths(months)}</label>
                                        <div class="app-horizontal-scrollbar">
                                            ${repeat(this.allDays.filter(p => p.dayDate.getMonth() + 1 == months), (days) => html`
                                                                              <div class="rectangle-Appo rconers App-style">
                                                                                  <div class="col-md-12">
                                                                                      <label class="App-Header form-style col-md-12">${days.toDayString()}</label>
                                                                                  </div>             
                                                                                  
                                                                                  ${repeat(days.appointments,(app) => html`                                                                             
                                                                                      <div class="Appointment-Inbox" id="App${app.appointmentId}" @dragover="${(event) => event.preventDefault()}" 
                                                                                            @dragenter="${(event) => event.preventDefault()}"  
                                                                                            @drop="${(event) => this.dropHandler(event, this.allDays.indexOf(days), days.appointments.indexOf(app))}"> 
                                                                                            
                                                                                            ${repeat(app.participants,(parts) => html`
                                                                                                                                    <div style="padding-left: 10%;" draggable="true" 
                                                                                                                                    @dragstart="${(event) => this.dragContinueHandler(event,this.allDays.indexOf(days), days.appointments.indexOf(app),parts)}">
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
            </section> 
        </div>
        </div>
        `;
    }

}
window.customElements.define('church-event-component',ChurchServiceEvent);