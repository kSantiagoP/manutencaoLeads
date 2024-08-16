import { useNavigate } from "react-router-dom";
import TextField from "../TextField";
import EmailField from "../EmailField";
import PasswordField from "../PasswordField";
import Button from "../Button";
import processInputValues from "../../controllers/SignInFormController";
import './SignInForm.css';

function SignInForm(){
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        if(processInputValues(new FormData(event.target))){
            /*redireciona pra login se deu tudo certo*/
            navigate("/login");
        }

        event.preventDefault();
    }; 
    return(
        <section className="signInForm">
            <form onSubmit={handleSubmit}>
                <TextField label="Seu nome completo:" required={true} name="name"></TextField>
                <EmailField label="E-mail:" required={true} name="email"/>
                <PasswordField label="Senha:" required={true} name="password"/>
                <PasswordField label="Confirme sua senha:"required={true} name="confirmPassword"/>
                <Button centralize={true}>Cadastro</Button>
            </form>
        </section>
    );


}

export default SignInForm;