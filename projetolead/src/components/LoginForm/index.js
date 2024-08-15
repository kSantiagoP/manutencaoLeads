import './LoginForm.css';
import PasswordField from "../PasswordField";
import EmailField from "../EmailField";

function LoginForm(){
    return(
        <section className="loginForm">
            <form>
                <EmailField/>
                <PasswordField/>
            </form>
        </section>
    );


}

export default LoginForm;