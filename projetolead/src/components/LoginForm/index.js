import './LoginForm.css';
import PasswordField from "../PasswordField";
import EmailField from "../EmailField";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import validateCredentials from '../../controllers/LoginFormController';


function LoginForm(){
    const navigate = useNavigate();
    const handleSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);
        
        if(validateCredentials(formData)){
            
            localStorage.setItem('authToken', true); 

            navigate('/lead');
        }
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