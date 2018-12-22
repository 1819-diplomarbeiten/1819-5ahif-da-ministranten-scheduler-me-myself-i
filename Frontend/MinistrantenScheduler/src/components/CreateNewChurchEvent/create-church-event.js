import {LitElement,html} from '@polymer/lit-element';

export class CreateNewChurchEvent extends LitElement{

    static get properties() {
        return{
            anzahl: Number,
            realAnzahl: Number
        }
    }

    constructor() {
        super();
        this.anzahl = new Number();
        this.realAnzahl = new Number();
        this.anzahl = 0;
        this.realAnzahl = 0;
    }

    addEventChurch() {
        this.anzahl += 1;
        this.shadowRoot.getElementById('addAppointment').innerHTML += this.getAppointmentsLayout();
    }

    deleteEventChurch() {
        this.realAnzahl = this.anzahl - 1;
        var newAllAppointment;
        let inp = 0;
        for (let i=0;i<this.realAnzahl;i++){
            newAllAppointment += this.getAppointmentsLayout()
            inp++;
        }
        this.anzahl=this.realAnzahl;
        this.shadowRoot.getElementById('addAppointment').innerHTML = inp < 1 ?``: ``+newAllAppointment;
    }


    /**********************************************Appointment-Layout**************************************************/
    getAppointmentsLayout() {
        return `<br>
            <div>
                <div class="row">
                    <h3>Termin</h3>
                    <br>
                    <div class="col-sm-3">
                        <label>Uhrzeit</label>
                        <input type="time" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <label>min. Ministranten</label>
                        <input type="number" class="form-control">
                    </div> 
                    <div class="col-sm-3">
                        <label>min. Lektoren</label>
                        <input type="number" class="form-control">
                    </div> 
                </div>
            </div>
            <hr>
            `;
    }
    /**********************************************Appointment-Layout**************************************************/

    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" href="/src/components/CreateNewChurchEvent/styles.css">
        
        <div>
            <div class="col-md-2"></div>
            <div class="col-md-9">                
                <div class=" row">
                    <h1>Neue Messe anlegen</h1>
                    <div class="col-sm-3">
                        <label>Datum</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <label>Verfügbar ab</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <label>Frist bis</label>
                        <input type="date" class="form-control">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <h3>Termin</h3>
                    <br>
                    <div class="col-sm-3">
                        <label>Uhrzeit</label>
                        <input type="time" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <label>min. Ministranten</label>
                        <input type="number" class="form-control">
                    </div> 
                    <div class="col-sm-3">
                        <label>min. Lektoren</label>
                        <input type="number" class="form-control">
                    </div> 
                </div>
                <hr>
                <div id="addAppointment">
                
                </div>
                <div class="col-md-8" align="center">
                <span class="circle-plus" @click="${() => this.addEventChurch()}"></span>
                <span class="circle-minus" @click="${() => this.deleteEventChurch()}"></span>
                <br>
            </div>
            </div>
        </div>
        
        
        
        `;
    }

}
window.customElements.define('create-church-event-component',CreateNewChurchEvent);