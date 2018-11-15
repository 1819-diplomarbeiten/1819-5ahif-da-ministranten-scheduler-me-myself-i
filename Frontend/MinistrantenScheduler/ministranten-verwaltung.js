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
        <login-component></login-component>
      </div>
    `;
  }

}

window.customElements.define('ministranten-verwaltung', MinistrantenVerwaltung);
