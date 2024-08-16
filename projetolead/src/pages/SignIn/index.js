import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import SignInForm from "../../components/SignInForm";
import './SignInPage.css'

function SignInPage(){

    return(

        <div>
            <Logo/>

            <SignInForm/>
            
            <div className="loginLink">
                <Link to='/login'>
                    <p>Já possui conta? Fazer login</p>
                </Link>
            </div>

        </div>

    )
}


export default SignInPage;