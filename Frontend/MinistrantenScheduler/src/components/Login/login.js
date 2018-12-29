import {html, LitElement} from '@polymer/lit-element';


export class Login extends LitElement {




    static get properties() {
        return {
            userName: String,
            password: Number
        }
    }





    checkLogin() {
        console.log("click event login :" );
        this.userName = this.shadowRoot.getElementById('username').value;
        this.password = this.shadowRoot.getElementById('password').value;
        let root = document.querySelector("ministranten-verwaltung");
        let components = root.shadowRoot.querySelector('#components');
        console.log(this.userName)
        components.innerHTML = `<church-event-component user="${this.userName}" pass="${this.password}"></church-event-component>`
    }




    render() {
        return html`
        <!--======================================Wichtig==================================================-->
        <script lang="javascript" src="/node_modules/jQuery/tmp/jquery.js"></script>
        <script lang="javascript" type="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="/src/components/Login/styles.css">
        
        
        
        
        
        
        
            <div class="container">
	            <section id="content">
		            <form action="">
			            <h1>Login</h1>
			            <div class="form-input">
			            <div>
				            <input type="text" placeholder="Username" required="" id="username"/>
			            </div>
			            <div>
				            <input type="password" placeholder="Password" required="" id="password" />
			            </div>
			            <div>
				            <input type="submit" value="Log in"  @click="${() => this.checkLogin()}"/>
			            </div>
			            <div class="lost-style">
			                <a href="#">Lost your password?</a> 
                        </div>
                        </div>
		            </form><!-- form -->
	            </section><!-- content -->
            </div><!-- container -->
       
        `;
    }
}
window.customElements.define("login-component",Login);