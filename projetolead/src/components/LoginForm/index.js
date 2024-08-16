import './LoginForm.css';
import PasswordField from "../PasswordField";
import EmailField from "../EmailField";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import validateCredentials from '../../controllers/LoginFormController';


function LoginForm(){
    const navigate = useNavigate();
    const handleSubmit = (event) => {

        if(validateCredentials(new FormData(event.target))){
            navigate('/lead');
        }
        
        event.preventDefault();
    }; 
    return(
        <section className="loginForm">
            <form onSubmit={handleSubmit}>
                <EmailField label="E-mail" name='email'/>
                <PasswordField label="Senha" name='password'/>
                <Button centralize={true}>Login</Button>
            </form>
        </section>
    );


}

export default LoginForm;