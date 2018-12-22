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



/*<!--<create-event-component></create-event-component>-->
<!--<create-church-event-component></create-church-event-component>-->
<!--<user-settings-component></user-settings-component>-->
<!--<participant-settings-component></participant-settings-component>-->*/




  render() {
      return html`
        <div id="components">
            <!--<login-component></login-component>-->
            <!-- <create-church-event-component></create-church-event-component>-->
            <create-user-component></create-user-component>
           
        </div>
      `;
  }
}

window.customElements.define('ministranten-verwaltung', MinistrantenVerwaltung);
