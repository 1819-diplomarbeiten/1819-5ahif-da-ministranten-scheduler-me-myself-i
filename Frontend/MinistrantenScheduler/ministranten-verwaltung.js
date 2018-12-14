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
  render() {
    return html`
      <div id="components">
        <!--<church-event-component></church-event-component>-->
        <!--<login-component></login-component>-->
        <!--<create-event-component></create-event-component>-->
        <!--<create-church-event-component></create-church-event-component>-->
        <user-settings-component></user-settings-component>
        <!--<participant-settings-component></participant-settings-component>-->
      </div>
    `;
  }
}

window.customElements.define('ministranten-verwaltung', MinistrantenVerwaltung);
