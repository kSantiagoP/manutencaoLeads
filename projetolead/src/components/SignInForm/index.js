import TextField from "../TextField";

function SignInForm(){
    return(
        <section>
            <form>
                <TextField label="E-mail"></TextField>
                <TextField label="Senha"></TextField>
            </form>
        </section>
    );


}

export default SignInForm;