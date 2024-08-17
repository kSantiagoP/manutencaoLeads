import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import './LoginPage.css';

function LoginPage(){
    return(
        <div className="loginPage">
            <Logo></Logo>
            <LoginForm></LoginForm>
            <div className="registerLink">
                <Link to="/">
                    <p>Não possui conta ainda? Faça seu registro.</p>
                </Link>
            </div>
        </div>

    );
}

export default LoginPage;