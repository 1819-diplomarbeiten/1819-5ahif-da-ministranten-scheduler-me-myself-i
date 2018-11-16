import {html, LitElement} from '@polymer/lit-element';


export class Login extends LitElement{
    render() {
        return html`
	<script lang="javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script lang="javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="/src/components/Login/designInput/images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/css/util.css">
	<link rel="stylesheet" type="text/css" href="/src/components/Login/designInput/css/main.css">
<!--===============================================================================================-->	
	<div class="limiter">
		<div class="container-login100 background_size">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="text" name="username" placeholder="Username">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
	
<!--===============================================================================================-->
	<!--<script src="/src/components/Login/designInput/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="/src/components/Login/designInput/vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="/src/components/Login/designInput/vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="/src/components/Login/designInput/vendor/daterangepicker/moment.min.js"></script>
	<script src="/src/components/Login/designInput/vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="/src/components/Login/designInput/vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="/src/components/Login/designInput/js/main.js"></script>
	<script src="styles.css"></script>
	
        `;
    }

    checkLogin() {
        console.log("click event login"+password);
    }

    static get properties() {
        return{
            userName : String,
            password : Number
        }
    }
}
window.customElements.define("login-component",Login);