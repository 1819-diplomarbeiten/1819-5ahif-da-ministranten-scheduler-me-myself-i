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
            switcher: this.shadowRoot
        }
    }

    constructor() {
        super();
        this.switcher = this.shadowRoot;

    }


    switchComponent(input) {
        this.switcher = this.switcher.getElementById('components');
        switch (input.toString()) {
            case "login":

            case "chooser":

        }
        if (input == "login") {
            this.switcher.innerHTML = `<login-component></login-component>`;
        }
        else if (input == "church-event") {
            this.switcher.innerHTML = `<church-event-component></church-event-component>`
        }



    }


/*<!--<create-event-component></create-event-component>-->
<!--<create-church-event-component></create-church-event-component>-->
<!--<user-settings-component></user-settings-component>-->
<!--<participant-settings-component></participant-settings-component>-->*/




  render() {
    $(document).ready(() =>{
        this.switchComponent("church-event")
    });
    return html`
      <div id="components">
        
      </div>
    `;
  }
}

window.customElements.define('ministranten-verwaltung', MinistrantenVerwaltung);
