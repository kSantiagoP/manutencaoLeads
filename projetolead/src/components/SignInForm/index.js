import TextField from "../TextField";
import EmailField from "../EmailField";
import PasswordField from "../PasswordField";
import Button from "../Button";
import processInputValues from "../../controllers/SignInFormController";
import './SignInForm.css';

function SignInForm(){
    const handleSubmit = (event) => {
        processInputValues(new FormData(event.target));

        /*
            trata dados na controller para enviar para o "banco"
            se processInput retornar true, deu tudo certo -> encaminha pro login
            caso contrário preventDefault, pede pro usuario dar input corretamente
        
        */ 
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