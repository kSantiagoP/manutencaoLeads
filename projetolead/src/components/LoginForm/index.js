import './LoginForm.css';
import PasswordField from "../PasswordField";
import EmailField from "../EmailField";
import Button from '../Button';


function LoginForm(){
    return(
        <section className="loginForm">
            <form>
                <EmailField label="E-mail"/>
                <PasswordField label="Senha"/>
                <Button centralize={true}>Login</Button>
            </form>
        </section>
    );


}

export default LoginForm;