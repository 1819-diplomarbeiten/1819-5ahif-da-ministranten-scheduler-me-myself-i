import {html, LitElement} from '@polymer/lit-element';

/**
 * `ministranten-verwaltung`
 * Erleichterung für Ministranten zum Eintragen ihres Unterrichts
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MinistrantenVerwaltung extends LitElement {


    static get properties() {
        return {
            changer: {
                type: String,
                notify: true
            }
        }

    }

    constructor() {
        super();

    }


  render() {
      return html`
        <div id="components">
            <!--<login-component></login-component>   <create-church-event-component></create-church-event-component>   <create-user-component></create-user-component>              
             <account-setting-component></account-setting-component>-->
            <!-- <user-settings-component></user-settings-component>     <church-event-component></church-event-component>-->
            <!--<participant-settings-component></participant-settings-component>-->
            
            <church-event-component></church-event-component>
        </div>
      `;
  }
}

window.customElements.define('ministranten-verwaltung', MinistrantenVerwaltung);
