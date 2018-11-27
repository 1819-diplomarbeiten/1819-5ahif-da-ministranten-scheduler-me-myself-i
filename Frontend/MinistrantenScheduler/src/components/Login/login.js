import {html, LitElement} from '@polymer/lit-element';


export class Login extends LitElement {


    checkLogin() {
        console.log("click event login" + password);
    }

    static get properties() {
        return {
            userName: String,
            password: Number
        }
    }


    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link type="text/css" rel="stylesheet" href="/src/components/Login/designInput/styles/styles.css">
        <link type="text/css" rel="stylesheet" href="/src/components/Login/designInput/styles/utils.css">
        <link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/fonts/iconic/css/material-design-iconic-font.min.css">
        
        
        <div class="limit backgrond-img">
            <div class="container-login">
                <div class="wrap-login"><!--font anmeldung-->
                    <form class="login-form validate-form">
                        <span class="login-form-logo icon-set">
                            <i class=""></i>
                        </span>
                        
                        <span class="login-form-title p-b-34 p-t-27">
                            Log in
                        </span>
                        
                        <div class="wrap-input validate-input" data-validate="Enter username">
                            <input class="input" type="text" name="username" placeholder="Username">
                            <span class="focus-input" data-placeholder="&#xf207;"></span>
                        </div>
                        
                        <div class="wrap-input validate-input" data-validate="Enter password">
                            <input class="input" type="password" name="pass" placeholder="Password"><!--name für url Anzeige-->
                            <span class="focus-input" data-placeholder="&#xf207;"></span>
                        </div>
                        
                        <div class="contact-form-checkbox">
                            <input class="input-checkbox" id="mindMe" type="checkbox" name="remember-me">
                            <label class="label-checkbox" for="mindMe">Remember me</label>
                        </div>
                        
                        <div class="container-login-form-btn">
                            <button class="login-form-btn" @click="${() => alert("Hallo")}">Login</button>
                        </div>
                        
                        <div class="text-center p-t-90">
                            <a class="txtl" href="#">Forgot Password?</a>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>       
        `;
    }
}
window.customElements.define("login-component",Login);