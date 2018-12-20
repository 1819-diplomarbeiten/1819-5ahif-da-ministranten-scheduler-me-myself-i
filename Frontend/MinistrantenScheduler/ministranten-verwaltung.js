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


  /*switchComponent(input) {
      let elem = null;
      let switcher = this.shadowRoot.getElementById('components');

      while (switcher.firstChild) {
          switcher.removeChild(switcher.firstChild);
      }

      switch (input) {
          case 'login':
              elem = document.createElement('login-component');
              switcher.appendChild(elem);
              break
          case 'churchEvent':
              elem = document.createElement('church-event-component');
              switcher.appendChild(elem);
              break
          case 'createChurchEvent':
              elem = document.createElement('create-church-event-component');
              switcher.appendChild(elem);
              break
          case 'userSettings':
              elem = document.createElement('user-settings-component');
              switcher.appendChild(elem);
              break
          case 'participantSettings':
              elem = document.createElement('participant-settings-component');
              switcher.appendChild(elem);
              break
          default:
              break
      }
  }*/


/*<!--<create-event-component></create-event-component>-->
<!--<create-church-event-component></create-church-event-component>-->
<!--<user-settings-component></user-settings-component>-->
<!--<participant-settings-component></participant-settings-component>-->*/




  render() {
      return html`
        <div id="components">
            <!--<login-component></login-component>-->
            <create-user-component></create-user-component>
        </div>
      `;
  }
}

window.customElements.define('ministranten-verwaltung', MinistrantenVerwaltung);
