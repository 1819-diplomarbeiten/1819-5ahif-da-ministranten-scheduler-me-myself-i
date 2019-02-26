import {html, LitElement} from '@polymer/lit-element';


export class Login extends LitElement {




    static get properties() {
        return {
            userName: String,
            password: Number
        }
    }



    /*
    *
    * Prüft die Daten des Benutzers
    *
    * */

    checkLogin() {
        let root = document.querySelector("ministranten-verwaltung");
        let components = root.shadowRoot.querySelector('#components');
        components.innerHTML = `<church-event-component></church-event-component>`
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/Login/styles.css">        
        <script type="module" src="/node_modules/@google-web-components/google-signin/google-signin.js"></script>
               
            <div class="container">
	            <section id="content">
		            <form>
		                <div class="form-styling">
                            <div class="form-result">
                                <h1>Login</h1>			            
                                <google-signin @google-signin-success="${() => this.checkLogin()}" 
                                                client-id="461212305163-j72ri8njlsb7ul03cg5sm3c2qkpkck8a.apps.googleusercontent.com" 
                                                scopes="https://www.googleapis.com/auth/drive"></google-signin>
                                <br>
                                <a href="https://www.htl-leonding.at/index.php?id=1561">HTBLA Leonding</a>                         
                            </div>
                        </div>
		            </form>
	            </section>
            </div>       
        `;
    }
}
window.customElements.define("login-component",Login);