import {html, LitElement} from '@polymer/lit-element';
import {repeat} from "@polymer/lit-element/node_modules/lit-html/directives/repeat.js";


export class CalenderSettings extends LitElement{


    static get properties() {
        return{

        }
    }

    constructor() {
        super();
    }


    safeState() {

    }

    /******************************************Render******************************************************************/
    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/CalendarSettings/styles.css">
        
        <a class="back-reply-button" @click="${() => this.safeState()}">
        
        </a>
        
        
        <h1 style="transform: translate(30%);">Kalender-Settings</h1>
        <br>
        <div class="col-sm-12 row" style="padding:220px;">
            <div class="col-md-8">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <td><input class="" id="picker" type="checkbox" name="chooser"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                
            </div>
        </div>
        `;
    }
}
window.customElements.define("calendar-settings-component",CalenderSettings);